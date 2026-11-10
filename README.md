# Make a Game Cover — Free Birds

A 16-lesson Photopea tutorial for first-time users in the Vidyas repository. Students follow their teacher to make a **Free Birds** game cover while learning selections, layers, color fills, transforms, alignment, editable text, and exports. Numbered instructions, checkpoints, troubleshooting, downloadable source files, and illustrated walkthroughs support the shared lesson and remain available for independent practice.

The interface is a plain illustrated classroom guide: warm white, dark text, thin dividers, and one burnt-orange accent. The opening `#overview` page shows the source poster beside the updated cover reference with an Everyone rating badge. Choose **Start with the canvas** to begin; click the **Make a Game Cover** site title or **Project overview** to return to the opening page. The contents organize 16 lessons into seven groups: Canvas & background, Cut out the birds, Place the characters, Create the circle, Add the title, Leaves & details, and Save & export. The current lesson's group opens automatically.

All 16 lessons use sequential sections: 38 substeps with 26 reference-image placements drawn from 18 unique used assets. Each figure stays visible in the page alongside or below its matching instructions. There is no carousel or image switching; zoom is optional for inspecting small details. Completing a step is distinct from viewing the next step without marking it complete.

The supplied artwork titled **Turkey Escape** is a **layout reference**, not an exact image students must reproduce. The current reference includes the title, two birds, circle, leaves, and Everyone badge. The tutorial's title is **Free Birds**, and its source artwork and small details can differ from the reference. The original reference image is preserved separately.

This is a standalone static website: HTML, CSS, JavaScript, and local images. It requires no package installation, build command, database, account system, or API key.

## Workshop progression

1. Create and save the Free Birds canvas.
2. Fill the background orange.
3. Place the source artwork and select one bird.
4. Add the second bird and repair the selection.
5. Copy and paste the selected birds onto their own layer.
6. Resize and position the characters.
7. Explore how Shift changes an elliptical selection.
8. Fill the circle, then align it.
9. Place the circle behind the birds.
10. Create editable Free Birds text.
11. Select the words, choose Anton, and enlarge the title.
12. Make the title cream and position it.
13. Add a maroon **#701818**, **13 px**, **Outside**, **100% opacity** stroke, then **save the PSD before continuing**.
14. Select and arrange three leaves, then add the Everyone badge on its own layer.
15. Check the layers, including the visible Rating badge layer, and save the editable PSD.
16. Export a PNG containing the badge and explain the design choices.

Step 13 has an explicit save reminder and an **I saved my PSD — continue** button. Students must save in Photopea themselves; the tutorial cannot verify that a PSD was downloaded. They save again before the final export.

In step 14, students download `assets/e-for-everyone.png`, place it inside the cover, resize it with linked proportions, and position it upright in the bottom-left corner. It remains editable as a separate **Rating badge** layer. The later PSD and PNG checks include the badge.

## Preview locally

Open a terminal in this folder and run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open [http://localhost:8080](http://localhost:8080). Stop the server with Control-C when finished.

Use this local server rather than opening the HTML file directly, so browser modules and local assets load consistently.

## Put it on GitHub and Vercel

1. Put this folder's contents in your GitHub repository, keeping `index.html`, `lessons.js`, `vercel.json`, and `assets/` together at the repository root.
2. Push the files to GitHub using your usual workflow.
3. In Vercel, import that GitHub repository as a new project.
4. Use these settings:

   | Setting | Value |
   | --- | --- |
   | Framework Preset | Other |
   | Root Directory | The folder containing `index.html` |
   | Build Command | Leave blank; no build is needed |
   | Output Directory | `.` (the project root) |
   | Install Command | Leave blank; installation is explicitly skipped |
   | Environment Variables | None |

5. Deploy when you are ready.

The project is at the root of the Vidyas repository, so leave Vercel's Root Directory at the repository root.

The included `vercel.json` selects Other, skips installation and the build, and serves this folder. The empty `installCommand` prevents dependency installation even though a `package.json` exists for the optional syntax check. These settings follow Vercel's [static-project build guidance](https://vercel.com/docs/builds/configure-a-build#skip-build-step) and [configuration reference](https://vercel.com/docs/project-configuration/vercel-json#installcommand).

## Edit the tutorial

- **`lessons.js`** exports the 16 lessons. Each lesson contains its top-level `steps` instruction array, tools, checkpoint, troubleshooting, and an ordered `sections` array for the illustrated walkthrough. Every section has a `title`, a `steps` array of zero-based indices into that lesson's top-level instructions, and an `images` array of objects with `src`, `alt`, and `caption`. A section may contain any number of images, including none. The outline lesson uses `saveCheckpoint: true` to display the explicit PSD save reminder.
- **`index.html`** is the page entry point. **`app.js`** handles lesson navigation, illustrated sections, optional image zoom, help, checklists, and saved progress. The CSS files control the layout.
- **`assets/`** contains the classroom source artwork, layout reference, selection-practice images, and walkthrough screenshots. Use relative image paths so the site works on a local server and its deployed domain.

Within each lesson, include every top-level instruction index exactly once and in order across its sections. For example, if a lesson has five instructions, sections could reference `[0, 1]`, `[2]`, and `[3, 4]`; do not duplicate or omit an index. Place each image in the section containing the action it illustrates. Multiple images in a section all remain visible.

Keep existing lesson identifiers and instruction indices stable when updating wording or rearranging the presentation: saved progress refers to the lesson ID and each instruction's position in its top-level `steps` array. Hash routes preserve these lesson IDs, and `#overview` identifies the project overview. Opening the site without a lesson hash shows the overview; an existing lesson hash still opens that lesson directly. When adding an image, put the file in `assets/` and use a relative path to it. Legacy lesson-level `image` and `images` fields are fallbacks only for lessons without `sections`; edit the section images for the current walkthroughs.

If Node.js is installed, an optional JavaScript syntax check is available without installing any packages:

```sh
npm run check
```

This checks `app.js` and `lessons.js`; it is not a build step.

## Progress and resetting

The tutorial stores the current step, completed lessons, and checked instructions in the current browser's `localStorage`. There is no server or teacher dashboard collecting progress. Progress stays on that browser and device; it does not follow a student between computers. Clearing browser data can remove it.

When new instructions are added to an existing lesson, a previously completed lesson returns to incomplete if those new instructions have not been checked. Its existing checked actions remain available. This makes the added badge instructions visible as unfinished work for returning students.

Use the tutorial's **Reset progress** action to clear completed lessons and checked instructions and return to the project overview in that browser. This does not change the website files or any Photopea artwork students have saved. Photopea work must be saved separately as an editable PSD.

## Included images

| File | Purpose |
| --- | --- |
| `assets/turkey-source.webp` | Source turkey artwork for selection and copying |
| `assets/turkey-escape-goal-rated.png` | Current Turkey Escape layout reference with the Everyone badge; used on the overview and in lessons |
| `assets/turkey-escape-goal.png` | Original layout reference preserved separately from the updated version |
| `assets/e-for-everyone.png` | Everyone badge students place on a separate Rating badge layer |
| `assets/falling-leaves.png` | Lasso-selection practice |
| `assets/selection-tools.png` | Labeled selection tools and modes |
| `assets/toolbar-reference.png` | Labeled toolbar reference |
| `assets/birds-selected.png` | Selection example |
| `assets/workspace.png` | Workspace reference |
| `assets/oval-before-shift.png`, `assets/ellipse-selection.png` | Before-and-after views for the Shift discovery |
| `assets/centered-circle.png`, `assets/alignment-tools-labeled.png` | Filled-circle and alignment references |
| `assets/layer-order.png` | Layer order reference |
| `assets/type-tool.png`, `assets/text-size.png`, `assets/text-color.png` | Text creation, size, and color references |
| `assets/stroke-menu.png`, `assets/stroke-settings.png` | Title-outline menu and maroon 13 px stroke settings |

The site can be hosted by another static web host as well. Keep its file structure intact when uploading it.
