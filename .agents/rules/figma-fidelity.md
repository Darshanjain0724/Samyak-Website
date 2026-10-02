---
trigger: always_on
---

# Figma Fidelity Rules

## Purpose

When implementing a UI from Figma, Figma is the authoritative visual source of truth.

The objective is to reproduce the design, not reinterpret or redesign it.

## Absolute Rules

1. Never invent visible text.
2. Never remove visible text from Figma.
3. Never modify Figma text unless explicitly requested.
4. Never substitute a Figma asset.
5. Never substitute a Figma icon with Lucide, Material Icons, Font Awesome, Heroicons, emoji, CSS shapes, or another icon.
6. Never recreate a Figma logo manually.
7. Never replace a supplied image with another image.
8. Never approximate dimensions when Figma provides the dimensions.
9. Never redesign or "improve" the UI.
10. Never add UI elements that are not present in Figma.
11. Never remove UI elements that are present in Figma.
12. When information is missing or ambiguous, inspect Figma again instead of guessing.

## Assets

Every Figma image, SVG, vector, logo, illustration, and icon must be traced to its Figma source.

If an exact asset is available:

Figma asset → exact asset → implementation

Substitution is forbidden.

Semantic equivalence is not visual equivalence.

For example:

Figma search icon ≠ any generic search icon.

Figma logo ≠ another logo.

Figma illustration ≠ a similar illustration.

## Text

Visible text must match Figma exactly.

Preserve:

- wording
- spelling
- capitalization
- punctuation
- line breaks when visually relevant
- text hierarchy

Do not add:

- helper text
- descriptions
- placeholder copy
- labels
- explanations
- marketing copy
- additional buttons

unless they exist in Figma.

## Layout

Match the Figma geometry as closely as technically possible.

Pay attention to:

- width
- height
- x/y position
- padding
- margin
- gap
- alignment
- positioning
- border radius
- border width
- shadows
- opacity
- rotation
- overflow
- layering

Do not normalize unusual values to framework defaults.

If Figma uses 18px, do not change it to 16px because 16px is more conventional.

## Typography

Match:

- font family
- font size
- font weight
- line height
- letter spacing
- text alignment
- text transformation
- color
- opacity

Do not silently substitute a different font.

## Colors

Use the actual Figma values whenever available.

Do not approximate Figma colors using generic Tailwind or framework color names.

## Existing Components

Existing application components may be reused only when they produce the same visual result.

Do not allow an existing component's defaults to override Figma.

Visual fidelity takes priority over existing component defaults.

## Validation

Never consider a Figma implementation complete immediately after writing the code.

Before completion:

1. Run the application.
2. Render the implementation at the Figma viewport size.
3. Capture the rendered result.
4. Compare it against the Figma reference.
5. Identify visual discrepancies.
6. Correct them.
7. Repeat until meaningful discrepancies are resolved.

## Final Check

Before declaring completion, verify:

- No extra visible text exists.
- No Figma text is missing.
- No asset has been substituted.
- No icon has been substituted.
- The correct logo is used.
- The correct images are used.
- Layout dimensions match.
- Spacing matches.
- Typography matches.
- Colors match.
- Borders match.
- Radius matches.
- Shadows match.
- Alignment matches.

If Figma and your assumptions disagree:

FIGMA WINS.
