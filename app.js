import { lessons } from './lessons.js';

const $ = (selector) => document.querySelector(selector);
const STORAGE_KEY = 'cover-lab-turkey-escape-v1';
const ids = new Set(lessons.map((lesson) => lesson.id));
const chapters = [
  { name: 'Setup', start: 0, end: 2 },
  { name: 'Characters', start: 2, end: 6 },
  { name: 'Cover design', start: 6, end: 13 },
  { name: 'Finish', start: 13, end: 16 }
];
const chapterIndexFor = (id) => {
  const index = lessons.findIndex((lesson) => lesson.id === id);
  return chapters.findIndex((chapter) => index >= chapter.start && index < chapter.end);
};
const paths = {
  check: '<path d="m5 12 4 4L19 6"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
const esc = (text) => String(text).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const format = (text) => esc(text).replace(/#[0-9a-fA-F]{6}\b/g, (color) => `<button class="color-chip" data-copy="${color}" style="--swatch:${color}" aria-label="Copy color ${color}" title="Copy this color">${color}</button>`);
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch { /* A fresh session works if storage is unavailable. */ }
const readHash = () => { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; } };
const hashId = readHash();
const state = {
  current: ids.has(hashId) ? hashId : ids.has(saved.current) ? saved.current : lessons[0].id,
  completed: new Set(Array.isArray(saved.completed) ? saved.completed.filter((id) => ids.has(id)) : []),
  tasks: saved.tasks && typeof saved.tasks === 'object' && !Array.isArray(saved.tasks) ? saved.tasks : {}
};
if (!ids.has(hashId)) history.replaceState(null, '', `#${state.current}`);
let expandedChapter = chapterIndexFor(state.current);
let navigationLesson = state.current;
let resourceTab = 'files';
let toastTimer;
let mediaOpener;
const imageChoices = {};

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ current: state.current, completed: [...state.completed], tasks: state.tasks })); } catch { /* The lesson remains usable without persistent storage. */ }
}
function notify(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2800);
}
function currentLesson() { return lessons.find((lesson) => lesson.id === state.current) || lessons[0]; }
function taskSet(lesson = currentLesson()) {
  return new Set(Array.isArray(state.tasks[lesson.id]) ? state.tasks[lesson.id].filter((index) => Number.isInteger(index) && index >= 0 && index < lesson.steps.length) : []);
}
function renderNav() {
  if (navigationLesson !== state.current) {
    expandedChapter = chapterIndexFor(state.current);
    navigationLesson = state.current;
  }
  const markup = (prefix) => chapters.map((chapter, chapterIndex) => {
    const items = lessons.slice(chapter.start, chapter.end);
    const completed = items.filter((lesson) => state.completed.has(lesson.id)).length;
    const current = items.some((lesson) => lesson.id === state.current);
    const open = expandedChapter === chapterIndex;
    const linksId = `${prefix}-chapter-${chapterIndex}`;
    return `<section class="nav-chapter${current ? ' is-current' : ''}" aria-label="${esc(chapter.name)}"><button type="button" class="nav-chapter-heading" data-chapter="${chapterIndex}" aria-expanded="${open}" aria-controls="${linksId}"><span class="chapter-number">${String(chapterIndex + 1).padStart(2, '0')}</span><span>${esc(chapter.name)}</span><span class="chapter-count" aria-label="${completed} of ${items.length} steps complete">${completed}/${items.length}</span></button><div class="chapter-links" id="${linksId}"${open ? '' : ' hidden'}>${items.map((lesson, itemIndex) => `<a class="nav-step${state.current === lesson.id ? ' active' : ''}${state.completed.has(lesson.id) ? ' completed' : ''}" href="#${lesson.id}" data-step="${lesson.id}"${state.current === lesson.id ? ' aria-current="step"' : ''}><span class="nav-number">${state.completed.has(lesson.id) ? icon('check') : String(chapter.start + itemIndex + 1).padStart(2, '0')}</span><span>${esc(lesson.shortTitle)}</span></a>`).join('')}</div></section>`;
  }).join('');
  $('#desktop-nav').innerHTML = markup('desktop');
  $('#mobile-nav').innerHTML = markup('mobile');
  $('#progress-count').textContent = `${state.completed.size} / ${lessons.length}`;
  $('#mini-progress').textContent = `${state.completed.size} of ${lessons.length} complete`;
  $('#progress-percent').textContent = `${Math.round(state.completed.size / lessons.length * 100)}%`;
  $('#progress-fill').style.width = `${state.completed.size / lessons.length * 100}%`;
  const track = $('.progress-track');
  track.setAttribute('aria-valuenow', String(state.completed.size));
  track.setAttribute('aria-valuemax', String(lessons.length));
  $('#finish-banner').hidden = state.completed.size !== lessons.length;
  const activeLink = $('#desktop-nav .nav-step.active');
  if (activeLink?.getClientRects().length) activeLink.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
function renderInstructions() {
  const lesson = currentLesson(), checked = taskSet(lesson);
  $('#instructions').innerHTML = lesson.steps.map((step, index) => `<li class="instruction${checked.has(index) ? ' done' : ''}"><button class="instruction-toggle" data-task="${index}" aria-pressed="${checked.has(index)}" aria-label="${checked.has(index) ? 'Uncheck' : 'Check off'} instruction ${index + 1}">${checked.has(index) ? icon('check') : index + 1}</button><p>${format(step)}</p></li>`).join('');
  $('#instruction-count').textContent = `${checked.size} of ${lesson.steps.length} checked`;
}
function renderVisual(lesson) {
  const gallery = lesson.images || (lesson.image ? [lesson.image] : []);
  if (gallery.length) {
    const selected = Math.min(imageChoices[lesson.id] || 0, gallery.length - 1);
    const image = gallery[selected], isCover = image.src.includes('goal');
    const galleryNav = gallery.length > 1 ? `<div class="gallery-nav"><span>More views</span>${gallery.map((item, index) => `<button data-gallery="${index}" aria-pressed="${index === selected}" aria-label="Show reference image ${index + 1} of ${gallery.length}"><img src="${esc(item.src)}" alt=""><span aria-hidden="true">${index + 1}</span></button>`).join('')}</div>` : '';
    return `<section class="visual-card"><div class="visual-header"><span>${isCover ? 'The layout reference' : 'Visual reference'}${gallery.length > 1 ? ` · ${selected + 1}/${gallery.length}` : ''}</span><button class="zoom-link" data-media="${esc(image.src)}" data-media-title="${esc(lesson.shortTitle)}" data-media-alt="${esc(image.alt)}" data-media-caption="${esc(image.caption)}">${icon('expand')} Zoom in</button></div><div class="reference-stage"><button class="image-zoom-button" data-media="${esc(image.src)}" data-media-title="${esc(lesson.shortTitle)}" data-media-alt="${esc(image.alt)}" data-media-caption="${esc(image.caption)}" aria-label="Enlarge visual reference"><img class="reference-image${isCover ? ' cover-image' : ''}" src="${esc(image.src)}" alt="${esc(image.alt)}"></button></div>${galleryNav}<p class="visual-caption">${esc(image.caption)}</p></section>`;
  }
  if (lesson.id === 'save-psd') {
    return `<section class="visual-card"><div class="visual-header"><span>Keep both versions</span><span>PSD + PNG</span></div><div class="reference-stage"><div class="layer-demo"><div class="layer-row"><span class="layer-dot turkey">PSD</span>Editable artwork<small>YOUR WORKING FILE</small></div><div class="layer-row"><span class="layer-dot circle">PNG</span>One finished picture<small>YOUR EXPORT</small></div></div></div><p class="visual-caption">Save a PSD to keep your layers and text. Export a PNG when you need a picture to share.</p></section>`;
  }
  return `<section class="visual-card"><div class="visual-header"><span>Your title preview</span><span>Keep it editable</span></div><div class="reference-stage"><div class="demo-title outlined" aria-label="Cream Free Birds title with a maroon outline"><span>FREE</span><span>BIRDS</span></div></div><p class="visual-caption">A dark outline helps light letters stand out. Your font and arrangement can look different.</p></section>`;
}
function updateFooter() {
  const lesson = currentLesson(), index = lessons.indexOf(lesson), completedAll = state.completed.size === lessons.length;
  $('#previous').disabled = index === 0;
  $('#next').hidden = index === lessons.length - 1;
  $('#next').innerHTML = `Skip ahead <span aria-hidden="true">→</span>`;
  $('#next-title').textContent = lessons[index + 1]?.shortTitle || 'Your next creation';
  $('#complete').disabled = completedAll && index === lessons.length - 1;
  $('#complete').innerHTML = completedAll && index === lessons.length - 1 ? `${icon('check')} Workshop complete` : `${lesson.saveCheckpoint ? 'I saved my PSD — continue' : state.completed.has(lesson.id) ? 'Continue' : index === lessons.length - 1 ? 'Finish this workshop' : 'Complete step'} ${icon('arrow')}`;
}
function render() {
  const lesson = currentLesson(), index = lessons.indexOf(lesson);
  document.title = `${lesson.shortTitle} · Free Birds · Cover Lab`;
  $('#chapter-label').textContent = chapters.find((chapter) => index >= chapter.start && index < chapter.end).name;
  $('#lesson-position').textContent = `Step ${String(index + 1).padStart(2, '0')} of ${lessons.length}`;
  $('#lesson-eyebrow').textContent = lesson.eyebrow;
  $('#lesson-title').textContent = lesson.title;
  $('#lesson-goal').textContent = lesson.goal;
  $('#step-counter').innerHTML = `${String(index + 1).padStart(2, '0')} <span>/ ${lessons.length}</span>`;
  $('#lesson-time').innerHTML = `${icon('clock')} About ${esc(lesson.time)}`;
  $('#lesson-tools').innerHTML = lesson.tools.map((tool) => `<span class="tool-chip">${esc(tool)}</span>`).join('');
  renderInstructions();
  $('#checkpoint-text').textContent = lesson.checkpoint;
  $('#save-checkpoint').hidden = !lesson.saveCheckpoint;
  $('#lesson-downloads').innerHTML = (lesson.downloads || []).map((file) => `<a class="download-button" href="${esc(file.href)}" download>${icon('download')}${esc(file.label)}</a>`).join('');
  $('#lesson-visual').innerHTML = renderVisual(lesson);
  $('#lesson-help').innerHTML = lesson.help.map(({ question, answer }) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('');
  $('#lesson-curious').innerHTML = `<details class="curious-card"><summary><span class="curious-label">A little curious?</span>${esc(lesson.curious.question)}</summary><p>${esc(lesson.curious.answer)}</p></details>`;
  updateFooter();
  $('.nav-caption span').textContent = `${lessons.length} STEPS`;
  renderNav();
  persist();
}
function goTo(id, { focus = true } = {}) {
  if (!ids.has(id)) return;
  state.current = id;
  expandedChapter = chapterIndexFor(id);
  history.pushState(null, '', `#${id}`);
  $('#step-dialog').close();
  render();
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  if (focus) $('#lesson-title').focus({ preventScroll: true });
}
function openMedia({ src, title, alt, caption }, opener = document.activeElement) {
  mediaOpener = opener;
  $('#media-title').textContent = title || 'Reference image';
  $('#media-image').src = src;
  $('#media-image').alt = alt || title || 'Reference image';
  $('#media-caption').textContent = caption || '';
  $('#media-download').href = src;
  $('#media-download').download = src.split('/').pop();
  if (!$('#media-dialog').open) $('#media-dialog').showModal();
  $('.media-body').scrollTop = 0;
}
const files = [
  { src: 'assets/turkey-source.webp', title: 'The turkey source', text: 'Use File → Open & Place to add it to your cover.', name: 'Turkeys.webp' },
  { src: 'assets/falling-leaves.png', title: 'Falling leaves', text: 'Six separate leaves for selection practice.', name: 'Falling-leaves.png' },
  { src: 'assets/turkey-escape-goal.png', title: 'The layout reference', text: 'Our tutorial title is Free Birds. Use this layout as a guide.', name: 'Cover-layout-reference.png' }
];
const guides = [
  { src: 'assets/selection-tools.png', title: 'Selection tools & modes', text: 'Replace, Unite, Subtract, and Intersect.' },
  { src: 'assets/toolbar-reference.png', title: 'Meet the toolbar', text: 'The names beside the icons.' },
  { src: 'assets/alignment-tools-labeled.png', title: 'Center your circle', text: 'Center Horizontally and Center Vertically.' },
  { src: 'assets/workspace.png', title: 'The Photopea workspace', text: 'Find your canvas, toolbar, and Layers panel.' }
];
const helpIndex = lessons.flatMap((lesson) => lesson.help.map((item) => ({ ...item, id: lesson.id, step: lesson.shortTitle })));
function renderHelpResults(query = '') {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = helpIndex.filter((item) => words.every((word) => `${item.question} ${item.answer} ${item.step}`.toLowerCase().includes(word)));
  $('#help-results').innerHTML = results.length ? results.map((item) => `<details class="search-result"><summary>${esc(item.question)}</summary><p>${esc(item.answer)}</p><button class="related-step" data-help-step="${item.id}">Go to ${esc(item.step)} ${icon('arrow')}</button></details>`).join('') : '<p class="no-results">No matches yet. Try a word like “layer,” “selection,” “white,” or “save.”</p>';
}
function renderResources(tab = resourceTab) {
  resourceTab = tab;
  document.querySelectorAll('[data-resource-tab]').forEach((button) => { const active = button.dataset.resourceTab === tab; button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1; });
  $('#resource-panel').setAttribute('aria-labelledby', `tab-${tab}`);
  if (tab === 'files') {
    $('#resource-panel').innerHTML = `<p class="resource-intro">Download these files before you need them. Place the turkey source inside your cover; open the leaf sheet in a separate Photopea tab when you reach that step.</p><div class="file-grid">${files.map((file) => `<article class="file-card"><img src="${file.src}" alt="${esc(file.title)}"><div class="file-card-info"><h3>${esc(file.title)}</h3><p>${esc(file.text)}</p><a class="download-button" href="${file.src}" download="${file.name}">Download ${icon('download')}</a></div></article>`).join('')}</div>`;
  } else if (tab === 'guides') {
    $('#resource-panel').innerHTML = `<p class="resource-intro">Open a reference to take a closer look. You can download it to keep nearby.</p><div class="guide-list">${guides.map((guide) => `<button class="guide-button" data-media="${guide.src}" data-media-title="${esc(guide.title)}" data-media-caption="${esc(guide.text)}"><img src="${guide.src}" alt=""><span>${esc(guide.title)}<small>${esc(guide.text)}</small></span>${icon('expand')}</button>`).join('')}</div>`;
  } else {
    $('#resource-panel').innerHTML = `<label class="help-search">${icon('search')}<input id="help-query" type="search" placeholder="What’s going wrong? Try “selection” or “save”…" aria-label="Search workshop help"></label><div id="help-results" class="help-results" aria-live="polite"></div>`;
    renderHelpResults();
  }
}
function openResources(tab = 'files') { renderResources(tab); if (!$('#resource-dialog').open) $('#resource-dialog').showModal(); }
function toggleTask(index) {
  const lesson = currentLesson();
  if (!Number.isInteger(index) || index < 0 || index >= lesson.steps.length) return;
  const checked = taskSet(lesson);
  if (checked.has(index)) { checked.delete(index); state.completed.delete(lesson.id); } else checked.add(index);
  state.tasks[lesson.id] = [...checked];
  renderInstructions();
  renderNav();
  updateFooter();
  persist();
  $(`[data-task="${index}"]`)?.focus({ preventScroll: true });
}
async function copyColor(value) {
  try {
    await navigator.clipboard.writeText(value);
    notify(`Copied ${value}. Paste it into the color picker.`);
  } catch {
    const input = document.createElement('textarea');
    input.value = value; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select();
    const copied = document.execCommand('copy'); input.remove();
    notify(copied ? `Copied ${value}.` : `Color: ${value}`);
  }
}
document.addEventListener('click', (event) => {
  const chapter = event.target.closest('[data-chapter]');
  if (chapter) {
    const index = Number(chapter.dataset.chapter), navId = chapter.closest('nav').id;
    expandedChapter = expandedChapter === index ? -1 : index;
    renderNav();
    $(`#${navId} [data-chapter="${index}"]`)?.focus({ preventScroll: true });
    return;
  }
  const step = event.target.closest('[data-step]');
  if (step) { event.preventDefault(); goTo(step.dataset.step); return; }
  const task = event.target.closest('[data-task]');
  if (task) { toggleTask(Number(task.dataset.task)); return; }
  const color = event.target.closest('[data-copy]');
  if (color) { copyColor(color.dataset.copy); return; }
  const gallery = event.target.closest('[data-gallery]');
  if (gallery) { imageChoices[state.current] = Number(gallery.dataset.gallery); $('#lesson-visual').innerHTML = renderVisual(currentLesson()); $(`[data-gallery="${gallery.dataset.gallery}"]`)?.focus({preventScroll:true}); return; }
  const media = event.target.closest('[data-media]');
  if (media) { openMedia({ src: media.dataset.media, title: media.dataset.mediaTitle, alt: media.dataset.mediaAlt, caption: media.dataset.mediaCaption }, media); return; }
  const close = event.target.closest('[data-close]');
  if (close) { document.getElementById(close.dataset.close).close(); return; }
  const tab = event.target.closest('[data-resource-tab]');
  if (tab) { renderResources(tab.dataset.resourceTab); return; }
  const related = event.target.closest('[data-help-step]');
  if (related) { $('#resource-dialog').close(); goTo(related.dataset.helpStep); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'goal') openMedia({ src: 'assets/turkey-escape-goal.png', title: 'Our layout reference', alt: 'Game cover layout reference', caption: 'Use the arrangement as a guide. Our tutorial title is Free Birds. Your source artwork and small details can look different.' });
  if (action === 'resources') openResources();
  if (action === 'all-help') openResources('help');
  if (action === 'steps') {
    expandedChapter = chapterIndexFor(state.current);
    renderNav();
    $('#step-dialog').showModal();
    $('#mobile-nav .nav-step.active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  if (action === 'reset') { state.completed.clear(); state.tasks = {}; goTo(lessons[0].id); notify('Progress reset. Your Photopea files are not affected.'); }
});
document.addEventListener('input', (event) => { if (event.target.id === 'help-query') renderHelpResults(event.target.value); });
$('.resource-tabs').addEventListener('keydown', (event) => {
  const tabs = [...document.querySelectorAll('[data-resource-tab]')], index = tabs.indexOf(document.activeElement);
  if (index < 0 || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  renderResources(tabs[target].dataset.resourceTab); tabs[target].focus();
});
$('#complete').addEventListener('click', () => {
  const lesson = currentLesson(), index = lessons.indexOf(lesson);
  state.completed.add(lesson.id); state.tasks[lesson.id] = lesson.steps.map((_, i) => i); persist();
  if (index < lessons.length - 1) { goTo(lessons[index + 1].id); notify('Step saved. On to the next one.'); } else { render(); notify(state.completed.size === lessons.length ? 'Workshop complete. Nice work on your cover.' : 'Step saved. You can return to any unfinished steps.'); }
});
$('#previous').addEventListener('click', () => { const index = lessons.indexOf(currentLesson()); if (index > 0) goTo(lessons[index - 1].id); });
$('#next').addEventListener('click', () => { const index = lessons.indexOf(currentLesson()); if (index < lessons.length - 1) goTo(lessons[index + 1].id); });
document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }));
$('#media-dialog').addEventListener('close', () => { if (mediaOpener?.isConnected) mediaOpener.focus({ preventScroll: true }); });
window.addEventListener('popstate', () => { const id = readHash(); if (ids.has(id)) { state.current = id; render(); } });
window.addEventListener('hashchange', () => { const id = readHash(); if (ids.has(id) && id !== state.current) { state.current = id; render(); } });
render();
