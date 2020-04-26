---
title: "What Are the React Team Principles?"
date: "2020-01-11"
spoiler: Let clean code guide you. Then let it go.
heroImage: "../../assets/images/blog/test-1.png"
---

It was a late evening.

My colleague has just checked in the code that they've been writing all week. We were working on a graphics editor canvas, and they implemented the ability to resize shapes like rectangles and ovals by dragging small handles at their edges.

The code worked.

But it was repetitive. Each shape (such as a rectangle or an oval) had a different set of handles, and dragging each handle in different directions affected the shape's position and size in a different way. If the user held Shift, we'd also need to preserve proportions while resizing. There was a bunch of math.
