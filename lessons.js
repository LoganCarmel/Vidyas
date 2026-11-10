export const lessons = [
  {
    "id": "create-canvas",
    "shortTitle": "Create the canvas",
    "title": "Start your Free Birds cover",
    "eyebrow": "CANVAS + FILES",
    "goal": "Create a portrait document that can become a printed game cover.",
    "time": "5 min",
    "tools": [
      "File → New",
      "New Project settings",
      "Zoom"
    ],
    "steps": [
      "In Photopea, choose File → New. Name the project Free Birds.",
      "Set the resolution to 300 Pixels / Inch first.",
      "Choose Millimeters. Set Width to 129.5 and Height to 183.",
      "Check that the resolution still reads 300 and the dimensions still read 129.5 × 183 mm.",
      "Keep the background White, the mode RGB, and the depth 8 bit. Leave Artboards unchecked, then choose Create.",
      "Choose the Zoom tool, the magnifying glass near the bottom of the toolbar. Hold Alt (Option on Mac) and click to zoom out until the whole canvas fits. Click without Alt to zoom in. When zoomed in, hold Space and drag to move your view.",
      "Choose File → Save as PSD and save a working copy named Lastname_FreeBirds.psd. Save again as you add to your cover."
    ],
    "checkpoint": "You have a tall white canvas named Free Birds.",
    "help": [
      {
        "question": "Why did my width and height shrink?",
        "answer": "Changing the resolution can change the physical measurements. Set 300 first, then enter 129.5 mm and 183 mm again."
      },
      {
        "question": "Should my cover match the example exactly?",
        "answer": "The finished example uses the same source images, colors, font, and techniques as this lesson. Use it to check your progress. Your leaf angles and exact placement can vary."
      }
    ],
    "curious": {
      "question": "Why use 300 pixels per inch?",
      "answer": "It gives this small printed cover enough pixels for detailed artwork and text. It does not add missing detail to a small source image."
    },
    "image": {
      "src": "assets/free-birds-final-goal.png",
      "alt": "Finished Free Birds cover with the original turkey cutouts, pale yellow circle, orange background, three added leaves, and Everyone badge.",
      "caption": "Finished example made from the lesson’s original birds and leaf sheet, with Anton text, the specified colors, and the Everyone badge."
    },
    "sections": [
      {
        "title": "Create your project and enter the canvas settings",
        "steps": [
          0,
          1,
          2,
          3,
          4
        ],
        "images": [
          {
            "src": "assets/free-birds-final-goal.png",
            "alt": "Finished Free Birds cover with a cream Anton title outlined in maroon above the original turkeys.",
            "caption": "This is the finished Free Birds cover, made using the same images and techniques you will use."
          }
        ]
      },
      {
        "title": "See the whole canvas and save",
        "steps": [
          5,
          6
        ],
        "images": []
      }
    ]
  },
  {
    "id": "orange-background",
    "shortTitle": "Fill the background",
    "title": "Give the cover an orange background",
    "eyebrow": "LAYERS + COLOR",
    "goal": "Fill the background while keeping it separate from the artwork you will add.",
    "time": "5 min",
    "tools": [
      "Layers panel",
      "Foreground color",
      "Paint Bucket"
    ],
    "steps": [
      "In the Layers panel, click the Background layer so it is highlighted.",
      "Click the foreground color swatch: the front square of the two overlapping color squares near the bottom of the toolbar.",
      "In the color picker, find the field beside #. Replace its code with F25A00, then click OK to choose orange.",
      "Choose the Paint Bucket. If you see the Gradient tool instead, press and hold its toolbar button to find the bucket.",
      "Click once on the white canvas. The whole background should become orange."
    ],
    "checkpoint": "The canvas is orange, and Background is still a separate layer.",
    "help": [
      {
        "question": "Only part of my canvas filled. What happened?",
        "answer": "A selection may be limiting the fill. Choose Select → Deselect, check that Background is selected, then try the bucket again."
      },
      {
        "question": "My bucket makes a gradient instead.",
        "answer": "The Gradient and Paint Bucket tools share a toolbar group. Press and hold that button and choose Paint Bucket."
      }
    ],
    "curious": {
      "question": "What does selecting a layer do?",
      "answer": "The highlighted layer receives your edit. An outlined selection limits where an edit happens on that layer. Those are two different kinds of selection."
    },
    "image": {
      "src": "assets/toolbar-reference.png",
      "alt": "Photopea toolbar reference.",
      "caption": "Find the foreground color swatch and the Paint Bucket tool in your toolbar."
    },
    "sections": [
      {
        "title": "Choose the layer you will paint",
        "steps": [
          0
        ],
        "images": []
      },
      {
        "title": "Choose orange and fill the background",
        "steps": [
          1,
          2,
          3,
          4
        ],
        "images": [
          {
            "src": "assets/toolbar-reference.png",
            "alt": "Labeled Photopea toolbar identifying the foreground color swatch and Paint Bucket.",
            "caption": "Find the foreground color swatch and Paint Bucket in the toolbar."
          }
        ]
      }
    ]
  },
  {
    "id": "select-first-turkey",
    "shortTitle": "Place and select",
    "title": "Place the source poster and select one bird",
    "eyebrow": "IMPORTING + SELECTIONS",
    "goal": "Put the source poster into your cover, then select the first bird.",
    "time": "8 min",
    "tools": [
      "File → Open & Place",
      "Layers panel",
      "Polygonal Lasso Select",
      "Replace selection"
    ],
    "steps": [
      "Download the turkey source using the link at the top of this lesson. Keep your Free Birds cover open in Photopea.",
      "Choose File → Open & Place and select the source image. It should appear as a new layer inside your cover.",
      "If a transformation box appears, confirm it with the check mark or Enter. In the Layers panel, double-click the imported layer’s name, type Source poster, and press Enter. Double-click the name, rather than the small image thumbnail.",
      "Click Source poster in the Layers panel. Right-click the selection tool near the top of the left toolbar and choose Polygonal Lasso Select. The group may currently show a rectangle, ellipse, or lasso icon.",
      "Choose Replace in the selection controls at the top to start a new selection.",
      "Zoom in, then return to Polygonal Lasso Select. Click once on the first bird’s edge to begin. Keep clicking nearby points around its visible outline; use shorter gaps around curves. When you reach the start again, double-click to finish. A moving dotted outline should appear."
    ],
    "checkpoint": "Source poster is a layer inside your Free Birds document, and one bird has a moving dotted selection around it.",
    "help": [
      {
        "question": "My source opened in another document tab.",
        "answer": "That happens with File → Open. Return to the Free Birds cover and use File → Open & Place to add the image as a layer inside the cover."
      },
      {
        "question": "The lasso caught a large piece of background.",
        "answer": "If you are still placing points, press Delete to remove the last point, then click a better one. If the selection is finished, choose Select → Deselect and start again. Use more closely spaced clicks around curves."
      },
      {
        "question": "The lasso will not start drawing.",
        "answer": "Confirm any open transformation first. Then select Source poster in the Layers panel and choose the selection tool again."
      },
      {
        "question": "Do I hold the mouse button down?",
        "answer": "Polygonal Lasso Select uses separate clicks: click, release, move, then click again. Ordinary Lasso Select works differently: hold the mouse button, draw a closed loop, and release. You will use that for small repairs next."
      }
    ],
    "curious": {
      "question": "What is the difference between Open and Open & Place?",
      "answer": "Open creates another document tab. Open & Place adds the image as a layer in the document you are already working on."
    },
    "image": {
      "src": "assets/turkey-source.webp",
      "alt": "Source image containing the two turkey characters used in the tutorial.",
      "caption": "Place this source poster inside your cover. Select the visible bird shapes; you do not need to draw missing body parts."
    },
    "downloads": [
      {
        "href": "assets/turkey-source.webp",
        "label": "Download the turkey source"
      }
    ],
    "sections": [
      {
        "title": "Place the source poster inside your cover",
        "steps": [
          0,
          1,
          2
        ],
        "images": [
          {
            "src": "assets/turkey-source.webp",
            "alt": "The source poster containing the two turkey characters.",
            "caption": "Use Open & Place to add this image as a layer inside your cover."
          }
        ]
      },
      {
        "title": "Select the first bird",
        "steps": [
          3,
          4,
          5
        ],
        "images": [
          {
            "src": "assets/selection-tools.png",
            "alt": "Labeled selection tools and modes, including Polygonal Lasso Select, Lasso Select, and Replace.",
            "caption": "Choose Polygonal Lasso Select and Replace. Click points around the first bird, then double-click to finish."
          }
        ]
      }
    ]
  },
  {
    "id": "refine-bird-selection",
    "shortTitle": "Add and subtract",
    "title": "Add the second turkey and repair the selection",
    "eyebrow": "SELECTION CONTROLS",
    "goal": "Select both turkeys while leaving unwanted background outside the selection.",
    "time": "8 min",
    "tools": [
      "Polygonal Lasso Select",
      "Lasso Select",
      "Unite",
      "Subtract",
      "Replace",
      "Intersect"
    ],
    "steps": [
      "Keep the first turkey selected and change the selection mode to Unite.",
      "With Polygonal Lasso Select, click points around the second turkey’s visible outline, then double-click to finish. Unite adds it to the selection you already have.",
      "Look for background trapped inside the selection, especially gaps between the characters.",
      "Right-click the selection tool and choose ordinary Lasso Select. Choose Subtract at the top. Hold the mouse button and draw a small loop around unwanted background, returning to the start before releasing. This removes that area from your selection.",
      "If you missed part of a turkey, switch back to Unite. With Lasso Select, hold the mouse button, draw a small closed loop around the missing part, and release to add it.",
      "Check both outlines before copying. Avoid using Replace now, because it starts a new selection."
    ],
    "checkpoint": "Both turkeys are selected, with obvious extra background removed.",
    "help": [
      {
        "question": "My first turkey stopped being selected.",
        "answer": "You probably used Replace. Choose Edit → Step Backward to undo that selection, choose Unite, and add the second turkey again."
      },
      {
        "question": "Subtract removed part of the turkey.",
        "answer": "Choose Edit → Step Backward to undo the last selection. Use a smaller loop around only the unwanted background, or switch to Unite to add the missing turkey part back."
      }
    ],
    "curious": {
      "question": "What do all four selection modes mean?",
      "answer": "Replace starts over. Unite adds an area. Subtract removes an area. Intersect keeps only the overlap between the old selection and a new one. You do not need Intersect to finish this cover."
    },
    "image": {
      "src": "assets/selection-tools.png",
      "alt": "Selection controls showing Replace, Unite, Subtract, and Intersect.",
      "caption": "Check the active selection mode before drawing another outline."
    },
    "sections": [
      {
        "title": "Add the second bird to your selection",
        "steps": [
          0,
          1
        ],
        "images": [
          {
            "src": "assets/selection-tools.png",
            "alt": "Selection mode reference identifying Unite, Subtract, Replace, and Intersect.",
            "caption": "Unite adds another area to the selection you already have."
          }
        ]
      },
      {
        "title": "Remove unwanted background and restore missed parts",
        "steps": [
          2,
          3,
          4
        ],
        "images": [
          {
            "src": "assets/birds-selected.png",
            "alt": "Both turkey characters outlined by a selection on the source poster.",
            "caption": "Inspect the gaps between wings, bodies, and legs. Subtract background areas and Unite any missed parts."
          }
        ]
      },
      {
        "title": "Check before copying",
        "steps": [
          5
        ],
        "images": []
      }
    ]
  },
  {
    "id": "copy-into-cover",
    "shortTitle": "Make the Birds layer",
    "title": "Copy the selected birds onto their own layer",
    "eyebrow": "COPY + PASTE + VISIBILITY",
    "goal": "Separate the birds from the source poster inside the same cover document.",
    "time": "4 min",
    "tools": [
      "Edit → Copy",
      "Edit → Paste",
      "Layer names",
      "Visibility icons"
    ],
    "steps": [
      "Keep both birds selected and click Source poster in the Layers panel if it is not already selected.",
      "Choose Edit → Copy, then immediately choose Edit → Paste. Stay in the same Free Birds document.",
      "Double-click the pasted layer’s name in the Layers panel, type Birds, and press Enter. Choose Select → Deselect if a dotted selection remains.",
      "Click the eye icon beside Source poster to hide the original poster. Leave the orange Background layer visible.",
      "Hide and show Birds once to check that the bird cutouts are separate from the orange background. Finish with Birds visible."
    ],
    "checkpoint": "The Birds layer shows the cutout characters over orange. Source poster is hidden, and Background is visible.",
    "help": [
      {
        "question": "Paste brought in a color code or text.",
        "answer": "The clipboard changed. Select Source poster, restore the bird selection if needed, then use Copy immediately followed by Paste."
      },
      {
        "question": "I still see the original poster behind the birds.",
        "answer": "Turn off the eye beside Source poster. Keep the eye beside the orange Background layer on."
      },
      {
        "question": "Hiding Source poster makes everything disappear.",
        "answer": "Check that you have a separate Birds layer and that its eye icon is on. If needed, show Source poster again, select the birds, and copy then paste them onto a new layer."
      }
    ],
    "curious": {
      "question": "Why hide the source instead of deleting it?",
      "answer": "Keeping it hidden preserves a reference you can return to. Your new Birds layer can now move independently from that source image."
    },
    "image": {
      "src": "assets/birds-selected.png",
      "alt": "Both bird shapes selected in the source poster.",
      "caption": "With both birds selected on Source poster, copy and paste inside the same document to make Birds."
    },
    "sections": [
      {
        "title": "Make a separate Birds layer",
        "steps": [
          0,
          1,
          2
        ],
        "images": [
          {
            "src": "assets/birds-selected.png",
            "alt": "The selected bird shapes on the source poster before copying.",
            "caption": "Copy these selected pixels, then paste immediately inside the same cover document."
          }
        ]
      },
      {
        "title": "Hide the original poster and check the cutouts",
        "steps": [
          3,
          4
        ],
        "images": []
      }
    ]
  },
  {
    "id": "resize-turkeys",
    "shortTitle": "Resize the turkeys",
    "title": "Size and position the main characters",
    "eyebrow": "MOVE + FREE TRANSFORM",
    "goal": "Make the turkeys the main image while leaving room for the title.",
    "time": "5 min",
    "tools": [
      "Move tool",
      "Edit → Free Transform",
      "Proportions link",
      "Layers panel"
    ],
    "steps": [
      "Select the Birds layer in the Layers panel.",
      "Choose Edit → Free Transform.",
      "In the top bar, turn on Keep Aspect Ratio, the chain icon between W and H. This links width and height so the characters keep their shape; both percentages should change together as you resize.",
      "Drag a corner to change the size. Keep both characters inside the canvas and leave open space near the top.",
      "Confirm the transformation with the check mark or Enter.",
      "Choose the Move tool, the arrow at the top of the toolbar (V). Turn off Auto-Select in the top bar so Birds stays selected. Drag the turkeys into the lower middle of the cover."
    ],
    "checkpoint": "The turkeys are large enough to notice first, keep their original proportions, and leave space for a title.",
    "help": [
      {
        "question": "My turkeys look stretched.",
        "answer": "If the transformation is still open, press Escape to cancel it. If you already confirmed it, choose Edit → Step Backward. Turn on the chain icon between W and H before dragging a corner again."
      },
      {
        "question": "I cannot choose another tool.",
        "answer": "You may still be transforming. Confirm with the check mark or Enter, or cancel with Escape."
      },
      {
        "question": "The whole background moved.",
        "answer": "Choose Edit → Step Backward to undo the move. With the Move tool active, turn off Auto-Select at the top, then select Birds in the Layers panel before dragging again."
      }
    ],
    "curious": {
      "question": "Why leave empty space above the characters?",
      "answer": "That space gives the title room to stand out. Size and placement guide the viewer toward the most important parts of the cover."
    },
    "image": {
      "src": "assets/workspace.png",
      "alt": "Photopea workspace reference.",
      "caption": "Check the highlighted layer before you move, resize, or paint."
    },
    "sections": [
      {
        "title": "Check the selected layer",
        "steps": [
          0
        ],
        "images": [
          {
            "src": "assets/workspace.png",
            "alt": "Photopea workspace with the Layers panel on the right.",
            "caption": "Find the Layers panel on the right. Select Birds in your own document before transforming."
          }
        ]
      },
      {
        "title": "Resize without stretching",
        "steps": [
          1,
          2,
          3,
          4
        ],
        "images": []
      },
      {
        "title": "Place the characters and leave room for the title",
        "steps": [
          5
        ],
        "images": [
          {
            "src": "assets/free-birds-final-goal.png",
            "alt": "Layout reference with large characters below the title.",
            "caption": "Use this layout as a placement guide: large characters below, with room for the title above."
          }
        ]
      }
    ]
  },
  {
    "id": "gold-circle",
    "shortTitle": "Draw a circle selection",
    "title": "Discover how Shift changes an oval",
    "eyebrow": "ELLIPSE SELECT + SHIFT",
    "goal": "Make a circular selection on a new blank layer using Ellipse Select.",
    "time": "6 min",
    "tools": [
      "New layer",
      "Ellipse Select",
      "Replace selection",
      "Shift"
    ],
    "steps": [
      "Make sure Birds is the highlighted layer in the Layers panel.",
      "Click the page-shaped New Layer button at the bottom of the Layers panel, beside the trash can. Double-click the new layer’s name, type Yellow circle, and press Enter. Its checkerboard thumbnail means it is empty and transparent.",
      "Right-click the current selection tool in the toolbar and choose Ellipse Select from its menu. Use the selection tool, not the vector Ellipse shape tool.",
      "Choose Replace in the selection controls at the top. Each new outline will replace the previous one.",
      "Click and drag to start an oval. Keep the mouse button held down.",
      "While you are still dragging, hold Shift. What happens to the oval? Release the mouse first, then release Shift. You should now have a large dotted circle."
    ],
    "checkpoint": "A dotted circle is visible on the empty Yellow circle layer. It has not been filled yet.",
    "help": [
      {
        "question": "I made a solid shape instead of a dotted selection.",
        "answer": "You chose the vector Ellipse shape tool. Undo that shape, then open the selection tool menu and choose Ellipse Select."
      },
      {
        "question": "My new circle added to an old selection.",
        "answer": "Click Replace in the selection controls at the top, then draw again. The new outline will replace the old one."
      },
      {
        "question": "It still looks like an oval.",
        "answer": "Hold Shift while dragging. Keep Shift held until after you release the mouse."
      }
    ],
    "curious": {
      "question": "What changes when you hold Shift?",
      "answer": "Ellipse Select normally allows different width and height. Shift constrains them equally, producing a circle. Try the difference before you fill your final selection."
    },
    "images": [
      {
        "src": "assets/ellipse-selection.png",
        "alt": "Selection tool menu with Ellipse Select available.",
        "caption": "Choose Ellipse Select from the selection tool menu."
      },
      {
        "src": "assets/oval-before-shift.png",
        "alt": "An oval selection drawn before constraining it with Shift.",
        "caption": "Start an oval, then hold Shift while you are still dragging to turn it into a circle."
      }
    ],
    "sections": [
      {
        "title": "Choose Ellipse Select on a new layer",
        "steps": [
          0,
          1,
          2,
          3
        ],
        "images": [
          {
            "src": "assets/ellipse-selection.png",
            "alt": "Selection tool menu with Ellipse Select available.",
            "caption": "Choose Ellipse Select from the selection tool menu."
          }
        ]
      },
      {
        "title": "Try an oval, then hold Shift for a circle",
        "steps": [
          4,
          5
        ],
        "images": [
          {
            "src": "assets/oval-before-shift.png",
            "alt": "An oval selection drawn before constraining it with Shift.",
            "caption": "Start an oval, then hold Shift while you are still dragging to turn it into a circle."
          }
        ]
      }
    ]
  },
  {
    "id": "fill-center-circle",
    "shortTitle": "Fill and center it",
    "title": "Fill and center the yellow circle",
    "eyebrow": "PAINT BUCKET + ALIGNMENT",
    "goal": "Fill the circle with pale yellow and place it in the center of your cover.",
    "time": "6 min",
    "tools": [
      "Paint Bucket",
      "Select → Deselect",
      "Move tool",
      "Select → All",
      "Alignment buttons"
    ],
    "steps": [
      "Keep the circle selection active and select the empty Yellow circle layer.",
      "Click the foreground color swatch. In the color picker’s # field, enter F3EF9B and click OK for pale yellow. Choose Paint Bucket and click inside the circle to fill it.",
      "Choose the Move tool, the arrow at the top of the toolbar (V), and check that Yellow circle is still the highlighted layer.",
      "Open the Select menu and click All. A dotted outline should now run around the whole canvas, so the buttons will center the circle within the cover.",
      "Click Center Horizontally, the second alignment button, then Center Vertically, the sixth alignment button.",
      "Remove the dotted border: open the Select menu at the top of Photopea and click Deselect. Your yellow circle stays in place."
    ],
    "checkpoint": "A solid pale yellow circle is centered on the cover. It may cover the birds until you fix the layer order next.",
    "help": [
      {
        "question": "The alignment buttons do nothing.",
        "answer": "Fill the circle first. Then choose Move, highlight Yellow circle, open the Select menu and click All, and use the alignment buttons."
      },
      {
        "question": "The birds moved instead of the circle.",
        "answer": "Undo the move. In the Layers panel, select Yellow circle before clicking the alignment buttons."
      },
      {
        "question": "A dotted box surrounds the whole cover.",
        "answer": "That is the Select All reference. After centering, choose Select → Deselect to remove the box."
      }
    ],
    "curious": {
      "question": "Why select the entire canvas before aligning?",
      "answer": "The canvas selection provides the reference area. The alignment buttons then center the selected layer’s painted content within that area."
    },
    "images": [
      {
        "src": "assets/alignment-tools-labeled.png",
        "alt": "Move tool alignment buttons with the second and sixth buttons labeled.",
        "caption": "Use Center Horizontally second, then Center Vertically sixth."
      },
      {
        "src": "assets/centered-circle.png",
        "alt": "A filled pale yellow circle centered on the orange canvas.",
        "caption": "Fill first, center the painted circle, then deselect."
      }
    ],
    "sections": [
      {
        "title": "Fill the circular selection pale yellow",
        "steps": [
          0,
          1
        ],
        "images": []
      },
      {
        "title": "Center the painted circle on the canvas",
        "steps": [
          2,
          3,
          4,
          5
        ],
        "images": [
          {
            "src": "assets/alignment-tools-labeled.png",
            "alt": "Move tool alignment buttons with the second and sixth buttons labeled.",
            "caption": "Use Center Horizontally second, then Center Vertically sixth."
          },
          {
            "src": "assets/centered-circle.png",
            "alt": "A filled pale yellow circle centered on the orange canvas.",
            "caption": "Fill first, center the painted circle, then deselect."
          }
        ]
      }
    ]
  },
  {
    "id": "circle-layer-order",
    "shortTitle": "Put Birds in front",
    "title": "Move the circle behind the birds",
    "eyebrow": "LAYER ORDER + VISIBILITY",
    "goal": "Keep Birds in front of the pale yellow circle and hide only the original poster.",
    "time": "4 min",
    "tools": [
      "Layers panel",
      "Drag to reorder",
      "Visibility icons"
    ],
    "steps": [
      "Find Birds, Yellow circle, Source poster, and Background in the Layers panel.",
      "In the Layers panel, drag the Yellow circle layer’s name downward. Release when the insertion line appears just below Birds. Keep Yellow circle above the orange Background layer.",
      "Turn off the eye beside Source poster. This hides the original poster, not the orange background.",
      "Leave Birds, Yellow circle, and Background visible.",
      "Check the canvas: the cutout birds should appear in front of the circle, surrounded by orange."
    ],
    "checkpoint": "Birds is above Yellow circle. Source poster is hidden, and the orange Background stays visible.",
    "help": [
      {
        "question": "The circle is hiding the birds.",
        "answer": "Drag the Yellow circle layer underneath Birds in the Layers panel."
      },
      {
        "question": "My orange background disappeared.",
        "answer": "Turn the eye beside Background back on. Hide Source poster instead; that is the original imported picture."
      },
      {
        "question": "My layer names do not match the screenshot.",
        "answer": "The example may call the original poster Layer 1 and the circle Layer 2. Rename them Source poster and Yellow circle so you can identify them easily."
      }
    ],
    "curious": {
      "question": "How can one drag change what appears in front?",
      "answer": "Layers higher in the list cover layers beneath them. Reordering changes the stack without moving the artwork’s position on the canvas."
    },
    "image": {
      "src": "assets/layer-order.png",
      "alt": "Layers panel showing Birds above the circle, the original poster hidden, and orange Background visible.",
      "caption": "The example uses Layer 2 for the circle and Layer 1 for the hidden poster. Keep the orange Background visible."
    },
    "sections": [
      {
        "title": "Order the layers and hide the source poster",
        "steps": [
          0,
          1,
          2,
          3,
          4
        ],
        "images": [
          {
            "src": "assets/layer-order.png",
            "alt": "Layers panel showing Birds above the circle, the original poster hidden, and orange Background visible.",
            "caption": "The example uses Layer 2 for the circle and Layer 1 for the hidden poster. Keep the orange Background visible."
          }
        ]
      }
    ]
  },
  {
    "id": "cream-title",
    "shortTitle": "Type Free Birds",
    "title": "Write the Free Birds title",
    "eyebrow": "TYPE TOOL + EDITABLE TEXT",
    "goal": "Create an editable title that says Free Birds.",
    "time": "4 min",
    "tools": [
      "Type tool",
      "Text caret",
      "Layers panel"
    ],
    "steps": [
      "In the Layers panel on the right, click Birds. Your new title layer will be created above it.",
      "Choose the Type tool, shown as T in the toolbar on the left.",
      "Click once near the top of the cover—do not drag a box—then type Free Birds.",
      "Find the new text layer with a T thumbnail in the Layers panel. Leave the text edit open; you will highlight and style the words next.",
      "The words may be tiny if the default size is 24 px. That is expected; you will select and enlarge them next."
    ],
    "checkpoint": "The words Free Birds exist on their own editable text layer, even if they look small.",
    "help": [
      {
        "question": "I typed, but the title looks almost invisible.",
        "answer": "Check the top toolbar’s font size. A default 24 px title is very small on this large canvas. The next step increases it."
      },
      {
        "question": "The title is behind the circle or birds.",
        "answer": "Click the check mark in the top options bar to finish editing the text, then drag its layer above Birds in the Layers panel."
      }
    ],
    "curious": {
      "question": "Why keep the title as text?",
      "answer": "An editable text layer lets you change the words, font, size, and color later. You do not have to paint the letters again."
    },
    "image": {
      "src": "assets/type-tool.png",
      "alt": "Photopea toolbar with the Type tool indicated.",
      "caption": "Choose T, click once near the top of the cover, and type Free Birds."
    },
    "sections": [
      {
        "title": "Use the Type tool to create the title",
        "steps": [
          0,
          1,
          2,
          3
        ],
        "images": [
          {
            "src": "assets/type-tool.png",
            "alt": "Photopea toolbar with the Type tool indicated.",
            "caption": "Choose T, click once near the top of the cover, and type Free Birds."
          }
        ]
      },
      {
        "title": "Notice the default text size",
        "steps": [
          4
        ],
        "images": [
          {
            "src": "assets/text-size.png",
            "alt": "The text size field showing a default size of 24 pixels.",
            "caption": "At 24 px, the title can look tiny on this large canvas. You will highlight and enlarge the words in the next step."
          }
        ]
      }
    ]
  },
  {
    "id": "title-font-size",
    "shortTitle": "Choose font and size",
    "title": "Select the words before styling them",
    "eyebrow": "TEXT SELECTION + FONT SIZE",
    "goal": "Highlight Free Birds, choose Anton, and enlarge the title.",
    "time": "5 min",
    "tools": [
      "Type tool",
      "Text selection",
      "Font family",
      "Font size"
    ],
    "steps": [
      "With the Type tool active, click inside Free Birds so the blinking text caret is inside the words.",
      "Press Ctrl+A on Windows or Cmd+A on Mac. The letters should be highlighted, not the whole canvas.",
      "In the Type options across the top, click the current font name. Type Anton in the font list’s search box, then click Anton in the results.",
      "Click the number beside Size in the top options bar. Select the old number, type 300, and press Enter. The finished example uses 300 px on this canvas.",
      "Aim for one line that fills most of the cover’s width, with space at both sides. Increase or decrease the size if needed."
    ],
    "checkpoint": "Free Birds is large, uses Anton, and remains editable text.",
    "help": [
      {
        "question": "Ctrl+A or Cmd+A selected my whole canvas.",
        "answer": "The text caret was not inside the title. Deselect the canvas, choose Type, click inside the words, and use the shortcut again. The letters should become highlighted."
      },
      {
        "question": "Only new letters use my font settings.",
        "answer": "Highlight the existing words before changing the font or size. Settings apply to the selected text."
      },
      {
        "question": "The title grew beyond the cover edges.",
        "answer": "Keep the words highlighted and reduce the font size. The 300 px example is a starting point; adjust it to fit your title."
      }
    ],
    "curious": {
      "question": "Why does 24 px look so tiny here?",
      "answer": "This cover is about 1530 pixels wide. Font size is measured in pixels, so 24 px takes up only a small part of that canvas."
    },
    "image": {
      "src": "assets/text-size.png",
      "alt": "The text size field showing a default size of 24 pixels.",
      "caption": "Highlight the words first, then change the font family and size. The finished example uses 300 px; adjust to fit."
    },
    "sections": [
      {
        "title": "Highlight the existing words",
        "steps": [
          0,
          1
        ],
        "images": []
      },
      {
        "title": "Choose the Anton font",
        "steps": [
          2
        ],
        "images": []
      },
      {
        "title": "Enlarge the title and adjust it to fit",
        "steps": [
          3,
          4
        ],
        "images": [
          {
            "src": "assets/text-size.png",
            "alt": "The text size field showing a default size of 24 pixels.",
            "caption": "Highlight the words first, then change the font family and size. The finished example uses 300 px; adjust to fit."
          }
        ]
      }
    ]
  },
  {
    "id": "title-color-position",
    "shortTitle": "Color and place it",
    "title": "Make the title cream and position it",
    "eyebrow": "TEXT COLOR + PLACEMENT",
    "goal": "Give Free Birds a cream color and a clear position above the characters.",
    "time": "4 min",
    "tools": [
      "Type tool",
      "Text color",
      "Move tool",
      "Layers panel"
    ],
    "steps": [
      "Keep the title text highlighted. If needed, click inside the words with Type and select the text again.",
      "Click the text color swatch in the Type tool’s top bar.",
      "Enter #FFF0C2 and confirm the cream color.",
      "Click the check mark in the top options bar to finish editing the text, then choose the Move tool in the left toolbar.",
      "Select the title layer and position Free Birds above the characters. Keep the whole title inside the cover.",
      "Zoom out and check that the words are easy to read."
    ],
    "checkpoint": "The cream Free Birds title is readable near the top, and the title layer stays above the artwork.",
    "help": [
      {
        "question": "Changing the color did not change the title.",
        "answer": "Highlight the existing title text before choosing its text color. Use the color swatch in the Type tool options."
      },
      {
        "question": "The screenshot shows a different font size.",
        "answer": "Use the size that fits your own title. The screenshot illustrates the color controls; you do not need to copy every setting."
      },
      {
        "question": "I moved the circle instead of the title.",
        "answer": "Select the title layer by name in the Layers panel before using Move."
      }
    ],
    "curious": {
      "question": "Why use cream against orange and yellow?",
      "answer": "The light letters can stand apart from the warmer artwork. Check the cover at a small size to decide whether the title needs an outline too."
    },
    "image": {
      "src": "assets/text-color.png",
      "alt": "Text toolbar and color controls for changing highlighted text.",
      "caption": "With the title highlighted, change its text color. Adjust the size to fit your own cover."
    },
    "sections": [
      {
        "title": "Change the highlighted title to cream",
        "steps": [
          0,
          1,
          2
        ],
        "images": [
          {
            "src": "assets/text-color.png",
            "alt": "Text toolbar and color controls for changing highlighted text.",
            "caption": "With the title highlighted, change its text color. Adjust the size to fit your own cover."
          }
        ]
      },
      {
        "title": "Finish editing and position the title",
        "steps": [
          3,
          4,
          5
        ],
        "images": []
      }
    ]
  },
  {
    "id": "title-stroke",
    "shortTitle": "Outline and save",
    "title": "Add a maroon outline to the title",
    "eyebrow": "STROKE + SAVE",
    "goal": "Add a maroon border around the title text, then save your PSD before continuing.",
    "time": "6 min",
    "tools": [
      "Free Birds text layer",
      "eff → Stroke",
      "File → Save as PSD"
    ],
    "steps": [
      "A stroke is a border around the text. If you are still editing the words, click the check mark in the top options bar first. Then click the Free Birds text layer in the Layers panel.",
      "Click eff, the effect button at the bottom of the Layers panel, and choose Stroke.",
      "In the Stroke settings, click the color swatch and choose maroon, #701818. Confirm the color picker.",
      "Set Size to 13 px, Position to Outside, and Opacity to 100%.",
      "Click OK to apply the stroke. Zoom out and check that the cream letters have a clear maroon outline.",
      "SAVE YOUR WORK BEFORE WE CONTINUE: choose File → Save as PSD and save your latest changes before adding leaves."
    ],
    "checkpoint": "The Free Birds title has a maroon stroke, and your latest changes are saved in a PSD before you continue.",
    "saveCheckpoint": true,
    "help": [
      {
        "question": "I cannot find eff or open the stroke settings.",
        "answer": "Select the Free Birds text layer and look along the bottom of the Layers panel for eff. You can also right-click the title layer, choose Blending Options, then enable Stroke and click its name."
      },
      {
        "question": "The title did not change, or a different object gained an outline.",
        "answer": "Check the selected layer. The stroke belongs on the Free Birds text layer, marked with a T, rather than Birds, Yellow circle, or Background. Select the text layer and apply the stroke there."
      },
      {
        "question": "The outline is hard to see or is hiding the letters.",
        "answer": "Check that Stroke is enabled, the color is #701818, Size is 13 px, Position is Outside, and Opacity is 100%. The maroon edge should separate the cream letters from the warm background."
      }
    ],
    "curious": {
      "question": "What is the difference between a stroke and a shadow?",
      "answer": "A stroke follows the edge of the letters like a border. A shadow is offset from them and suggests depth or light. Our maroon stroke improves the contrast around the cream title."
    },
    "images": [
      {
        "src": "assets/stroke-menu.png",
        "alt": "The eff menu in the Layers panel with Stroke highlighted.",
        "caption": "Select the Free Birds text layer, click eff, and choose Stroke."
      },
      {
        "src": "assets/stroke-settings.png",
        "alt": "Stroke settings showing a maroon color, 13 pixel size, Outside position, and 100 percent opacity.",
        "caption": "Use maroon #701818, 13 px, Outside, and 100% opacity. Click OK, then save your PSD before continuing."
      }
    ],
    "sections": [
      {
        "title": "Open the Stroke effect for the title layer",
        "steps": [
          0,
          1
        ],
        "images": [
          {
            "src": "assets/stroke-menu.png",
            "alt": "The eff menu in the Layers panel with Stroke highlighted.",
            "caption": "Select the Free Birds text layer, click eff, and choose Stroke."
          }
        ]
      },
      {
        "title": "Set the maroon color and border size",
        "steps": [
          2,
          3,
          4
        ],
        "images": [
          {
            "src": "assets/stroke-settings.png",
            "alt": "Stroke settings showing a maroon color, 13 pixel size, Outside position, and 100 percent opacity.",
            "caption": "Use maroon #701818, 13 px, Outside, and 100% opacity. Click OK, then save your PSD before continuing."
          }
        ]
      },
      {
        "title": "Save your work before continuing",
        "steps": [
          5
        ],
        "images": []
      }
    ]
  },
  {
    "id": "autumn-leaves",
    "shortTitle": "Leaves & final details",
    "title": "Add leaves and the rating badge",
    "eyebrow": "LEAVES + FINAL DETAILS",
    "goal": "Arrange three autumn leaves, then place the Everyone badge on its own layer.",
    "time": "16 min",
    "tools": [
      "Lasso Select",
      "Polygonal Lasso Select",
      "Unite and Subtract",
      "Copy and paste",
      "Free Transform",
      "File → Open & Place"
    ],
    "steps": [
      "Download the leaf sheet using the link at the top of this lesson, then open it with File → Open. Keep your cover open in its own tab.",
      "Right-click the selection tool and choose Lasso Select, then choose Replace at the top. Hold the mouse button down, trace one leaf, and release at the starting point. For Polygonal Lasso instead, click points around the leaf and double-click to finish.",
      "Check that you selected the leaf shape, not a rectangle of white background. Use Subtract to remove selected white areas or Unite to restore missed leaf parts.",
      "Choose Edit → Copy. Click the Free Birds document tab above the canvas, then choose Edit → Paste. The leaf appears on a new layer.",
      "With the leaf layer selected, choose Edit → Free Transform. Click the chain icon between W and H at the top if it is off, to keep the proportions linked. Drag a corner to resize, drag just outside the box to rotate, and drag inside it to position the leaf away from the title and faces. Press Enter to confirm.",
      "Return to the leaf-source tab, select another leaf, and copy it. Switch back to Free Birds to paste and transform it. Repeat until you have three leaves. Rename their layers Leaf 1, Leaf 2, and Leaf 3, and try different sizes or angles.",
      "Download the Everyone badge using the link at the top of this lesson. In your Free Birds cover, choose File → Open & Place and select the badge. Confirm with the check mark or Enter, then name its layer Rating badge.",
      "Select Rating badge and choose Edit → Free Transform. Click the chain icon between W and H at the top if it is off, to keep the proportions linked. Drag a corner until the badge is about one-tenth as wide as the cover. Keep it upright and avoid stretching it.",
      "Drag inside the transformation box to place the badge in the bottom-left corner, leaving a small margin from both edges. Keep the title and important character details clear.",
      "Confirm the transformation with the check mark or Enter. Leave Rating badge visible on its own layer above the background."
    ],
    "checkpoint": "Three separate leaves frame the artwork, and the Everyone badge sits upright in the bottom-left corner on its own layer. The title and important character details remain clear.",
    "help": [
      {
        "question": "My leaf has a white rectangle around it.",
        "answer": "The copied selection included the background. Undo the paste, return to the leaf sheet, and select the leaf boundary before copying again."
      },
      {
        "question": "Why is there already a leaf touching the birds?",
        "answer": "That orange leaf is part of the original poster. You can keep it with the bird cutout. Add three separate leaves from the leaf sheet, each on its own layer."
      },
      {
        "question": "Copy brought in a leaf I selected earlier.",
        "answer": "Return to the leaf source tab, select the current leaf, and copy it again immediately before switching to the cover and pasting."
      },
      {
        "question": "I keep moving the turkey instead of a leaf.",
        "answer": "Click the correct Leaf layer in the Layers panel before using Move or Free Transform."
      },
      {
        "question": "My badge looks stretched or covers too much of the artwork.",
        "answer": "Undo or cancel the transformation. Select Rating badge, link width and height, and resize again from a corner. Aim for about one-tenth of the cover’s width and leave a small margin at the bottom-left."
      }
    ],
    "curious": {
      "question": "Why use different leaf sizes and angles?",
      "answer": "Repeating a shape with a little variation can suggest movement. Leave enough space for the main characters and title to stay clear."
    },
    "image": {
      "src": "assets/falling-leaves.png",
      "alt": "Autumn leaf source sheet.",
      "caption": "Select each leaf along its boundary so you leave the surrounding white background behind."
    },
    "downloads": [
      {
        "href": "assets/falling-leaves.png",
        "label": "Download the leaf sheet"
      },
      {
        "href": "assets/e-for-everyone.png",
        "label": "Download the Everyone badge"
      }
    ],
    "sections": [
      {
        "title": "Open the leaf source beside your cover",
        "steps": [
          0
        ],
        "images": [
          {
            "src": "assets/falling-leaves.png",
            "alt": "Autumn leaf source sheet.",
            "caption": "Select each leaf along its boundary so you leave the surrounding white background behind."
          }
        ]
      },
      {
        "title": "Select a leaf and clean up its edges",
        "steps": [
          1,
          2
        ],
        "images": [
          {
            "src": "assets/selection-tools.png",
            "alt": "Labeled selection tools and the Replace, Unite, Subtract, and Intersect modes.",
            "caption": "Use Replace to start the leaf selection. Subtract removes selected white background; Unite restores a missed part of the leaf."
          }
        ]
      },
      {
        "title": "Paste, transform, and arrange three leaves",
        "steps": [
          3,
          4,
          5
        ],
        "images": [
          {
            "src": "assets/free-birds-final-goal.png",
            "alt": "Layout reference with three autumn leaves arranged around the characters and title.",
            "caption": "Use the finished example to check leaf size and placement. Keep the title and character faces clear."
          }
        ]
      },
      {
        "title": "Add the Everyone rating badge",
        "steps": [
          6,
          7,
          8,
          9
        ],
        "images": [
          {
            "src": "assets/e-for-everyone.png",
            "alt": "Black-and-white Everyone ESRB badge with a large letter E.",
            "caption": "Place the badge upright in the bottom-left corner. Keep its proportions linked when resizing, and leave it on its own Rating badge layer."
          }
        ]
      }
    ]
  },
  {
    "id": "save-psd",
    "shortTitle": "Save the editable file",
    "title": "Check your layers and save the PSD",
    "eyebrow": "REVIEW + SAVING",
    "goal": "Keep an editable copy of the cover so you can revise it later.",
    "time": "5 min",
    "tools": [
      "Layers panel",
      "Visibility icons",
      "File → Save as PSD"
    ],
    "steps": [
      "Zoom out to see the whole cover. Check the title, character placement, circle, leaf edges, and Everyone badge in the bottom-left corner.",
      "Use the eye icons to hide and show one leaf, the turkeys, and Rating badge. Each should be separate from the background. Finish with them visible.",
      "Check the stack: the title, leaves, and Rating badge are visible, Birds is above Yellow circle, Source poster is hidden, and the orange Background is visible at the bottom.",
      "Choose File → Save as PSD. This downloads an editable copy of your project to your computer.",
      "Wait for the download to finish. Find the .psd file in your browser’s download list or Downloads folder. If needed, rename it Lastname_FreeBirds.psd.",
      "Use Save as PSD again whenever you make later changes. Next lesson, open Photopea, choose File → Open, and select your latest .psd file to continue editing."
    ],
    "checkpoint": "You have a saved .psd file containing separate birds, leaves, Rating badge, painted circle, background, and editable text layers.",
    "help": [
      {
        "question": "I saved a PNG. Is that enough?",
        "answer": "A PNG is useful for viewing, but it does not preserve your editable layers. Save a PSD too."
      },
      {
        "question": "Where did my PSD go?",
        "answer": "Check the browser download list and your Downloads folder. Opening or completing this tutorial does not save the artwork inside Photopea for you."
      }
    ],
    "curious": {
      "question": "Why keep all these layers?",
      "answer": "Separate layers let you edit one part later: move a leaf, change the title, or resize the circle without rebuilding the whole cover."
    },
    "sections": [
      {
        "title": "Review the artwork and layer stack",
        "steps": [
          0,
          1,
          2
        ],
        "images": [
          {
            "src": "assets/layer-order.png",
            "alt": "Layers panel showing Birds above the circle, the original poster hidden, and orange Background visible.",
            "caption": "Check this relationship in your file: Birds above Yellow circle, Source poster hidden, and Background visible. Your finished file also has a title layer, three leaf layers, and a Rating badge layer."
          }
        ]
      },
      {
        "title": "Save and locate the editable PSD",
        "steps": [
          3,
          4,
          5
        ],
        "images": []
      }
    ]
  },
  {
    "id": "export-cover",
    "shortTitle": "Export the cover",
    "title": "Export a picture and explain your choices",
    "eyebrow": "EXPORT + REFLECTION",
    "goal": "Make a shareable image while keeping the PSD as your editable original.",
    "time": "4 min",
    "tools": [
      "File → Export As → PNG",
      "Zoom",
      "Saved PSD"
    ],
    "steps": [
      "Save your latest changes as a PSD and wait for its download to finish before exporting.",
      "Choose File → Export As → PNG.",
      "In the export window, keep Width and Height unchanged and click Save. Find the downloaded .png file and, if needed, rename it Lastname_FreeBirds.png.",
      "Open the exported picture and check that Free Birds, both bird cutouts, the pale yellow circle, three leaves, and the Everyone badge are visible.",
      "Be ready to explain how you used a selection, how layer order changed the cover, and why the title is readable.",
      "Keep both files. Next week, use these same techniques to build a cover for your own Halloween game."
    ],
    "checkpoint": "Your PNG opens correctly with the Everyone badge visible, and your separate PSD is saved for future edits.",
    "help": [
      {
        "question": "Why can I not edit the title in the exported PNG?",
        "answer": "The PNG combines the visible artwork into one picture. Open your PSD to edit text and other separate layers."
      },
      {
        "question": "My export is missing something.",
        "answer": "Return to Photopea and check the layer eye icons and the canvas edges. Fix the cover, save the PSD again, then export a new PNG."
      }
    ],
    "curious": {
      "question": "What transfers to my own game cover?",
      "answer": "You can reuse the process: plan the canvas, select source artwork, combine layers, resize carefully, add readable text, then save an editable file and export a picture."
    },
    "image": {
      "src": "assets/free-birds-final-goal.png",
      "alt": "Finished Free Birds cover with the original turkey cutouts, pale yellow circle, orange background, three added leaves, and Everyone badge.",
      "caption": "Finished example made from the lesson’s original birds and leaf sheet, with Anton text, the specified colors, and the Everyone badge."
    },
    "sections": [
      {
        "title": "Save the PSD, then export a PNG",
        "steps": [
          0,
          1,
          2
        ],
        "images": []
      },
      {
        "title": "Open the exported picture and check the result",
        "steps": [
          3
        ],
        "images": [
          {
            "src": "assets/free-birds-final-goal.png",
            "alt": "Finished Free Birds cover with the original turkey cutouts, pale yellow circle, orange background, three added leaves, and Everyone badge.",
            "caption": "Finished example made from the lesson’s original birds and leaf sheet, with Anton text, the specified colors, and the Everyone badge."
          }
        ]
      },
      {
        "title": "Keep both files and explain your choices",
        "steps": [
          4,
          5
        ],
        "images": []
      }
    ]
  }
];
