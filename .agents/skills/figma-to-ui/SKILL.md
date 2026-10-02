---
name: figma-to-ui
description: Implements Figma designs as production frontend UI with strict visual fidelity. Use when converting a Figma frame, component, page, or design into code.
---

# Figma → UI Implementation Skill

## Objective

Convert the supplied Figma design into production frontend code with maximum visual fidelity.

Figma is the source of truth.

Do not begin implementation by guessing what the design means.

Inspect the Figma source first.

---

# Phase 1 — Discover

Identify the target Figma frame or selection.

Use the Figma MCP Bridge to inspect the design.

Start with the highest-level relevant context and progressively inspect important nodes.

Use the available Figma MCP capabilities such as:

- get_selection
- get_document
- get_design_context
- get_node
- get_styles
- get_variable_defs
- get_screenshot

Do not rely only on a screenshot when structural information is available.

---

# Phase 2 — Build the Design Inventory

Before implementation, identify:

## Structure

- page/frame
- sections
- containers
- components
- nested components
- layout relationships

## Content

Identify every visible text node.

Record the exact text.

No additional visible copy is allowed.

## Assets

Identify every:

- image
- SVG
- vector
- logo
- illustration
- icon

Determine the exact asset associated with each visual element.

## Typography

Identify:

- font family
- size
- weight
- line height
- letter spacing
- alignment

## Visual Properties

Identify:

- colors
- borders
- radii
- shadows
- opacity
- gradients

## Geometry

Identify:

- width
- height
- spacing
- padding
- gaps
- alignment
- positioning

---

# Phase 3 — Create Design Locks

Before writing UI code, establish three internal locks.

## Content Lock

Every visible text element must map to Figma.

Example:

Figma node → exact text

No invention.

## Asset Lock

Every visual asset must map to its exact Figma asset.

Example:

Figma node → exact asset → UI location

If an exact asset exists, substitution is forbidden.

## Geometry Lock

Important dimensions and relationships must map to Figma.

Example:

Header → 72px
Sidebar → 240px
Main padding → 32px

Do not replace these with guessed framework defaults.

---

# Phase 4 — Inspect Existing Application

Before creating components:

1. Inspect the existing project structure.
2. Identify the frontend framework.
3. Identify the styling system.
4. Identify existing reusable components.
5. Identify the existing asset directory.
6. Determine where Figma assets should live.

Reuse existing infrastructure when it does not change the visual result.

Do not force the Figma design into an existing component if that component produces a different result.

---

# Phase 5 — Implement

Implement in this order:

1. Page/frame structure
2. Major containers
3. Layout relationships
4. Exact dimensions
5. Assets and images
6. Icons and vectors
7. Typography
8. Colors
9. Borders and radii
10. Shadows and effects
11. Fine spacing and alignment

Do not add functionality or UI that is not required by the supplied design.

---

# Phase 6 — Asset Verification

Before moving to validation, inspect the implementation for asset substitution.

Ask:

- Is the exact Figma logo being used?
- Is the exact Figma icon being used?
- Is the exact Figma image being used?
- Did the implementation introduce an icon library?
- Did the implementation create a replacement SVG?
- Did the implementation use a placeholder?

If yes, correct it.

---

# Phase 7 — Content Verification

Compare the implementation against the Figma content.

Check:

- Every Figma text exists.
- No additional visible text exists.
- Text matches exactly.
- Buttons match.
- Labels match.
- Navigation items match.
- Headings match.

If content was invented, remove it.

---

# Phase 8 — Visual Validation

Use the Figma screenshot capability to obtain a visual reference when appropriate.

Run the application.

Render the target page at the same viewport dimensions as the Figma frame.

Capture the implementation.

Compare:

Figma reference

against

Browser implementation.

Look specifically for:

- layout differences
- incorrect dimensions
- incorrect spacing
- incorrect typography
- incorrect text wrapping
- incorrect icons
- incorrect assets
- incorrect colors
- incorrect borders
- incorrect shadows
- incorrect alignment
- missing elements
- extra elements

---

# Phase 9 — Correction Loop

Do not stop at the first implementation.

If visual discrepancies exist:

1. Identify the discrepancy.
2. Determine whether the source is Figma data, CSS, typography, asset selection, or layout.
3. Correct the implementation.
4. Render again.
5. Compare again.

Repeat until meaningful discrepancies are resolved.

---

# Phase 10 — Completion

Only declare the task complete when:

- Figma content is represented correctly.
- No unauthorized content was added.
- Exact assets are used.
- Exact icons are used.
- Layout is faithful.
- Typography is faithful.
- Colors are faithful.
- Spacing is faithful.
- Visual validation has been performed.

When uncertain:

Inspect Figma again.

Do not guess.
