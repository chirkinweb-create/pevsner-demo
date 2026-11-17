# Figma source

Source: https://www.figma.com/design/bh2B3GkhJSCiAptWX06U6m/Pevsner.ru-Dev?node-id=5003-7447

Node: 5003:7447. Reference width: 1920 px. Content: 1218 px.
Design context and screenshot retrieved through Figma MCP.

## Structure

- Header: 5003:7973, 1218 × 140 at (351, 20).
- Hero: 5003:7944; heading y=240, gallery y=544, height=430.
- Tables: 5003:7910; background y=1054, height=1164, radius=80.
- Table grid: 5003:7921; y=1378, 1218 × 670, gap=30.
- Menu formats: 5003:7876; heading badge y=2298, cards y=2542.

## Tokens

Manrope: 400, 600, 700. Headings: 40px. Card titles: 20px and 24px.
Body: 16px. Line height: normal (implemented as 1.375).
Black #212529, teal #1D8B8A, pale #F3F9F9, border #BDDEDE,
body green #607474, grey #7B8181, yellow #F8BA07.

## Assets

All Figma images and SVG layers are stored in public/assets.
src/assets.ts maps original Figma code names to local files.
The logo preserves the original exported vector layer composition.
Manrope is bundled locally from @fontsource-variable/manrope.

## Interaction scope

Menu format selection and mobile table pagination use local React state.
Table selection scrolls to menu formats. Contact controls show the supplied phone number.
Reviews show only the rating provided in the design.
No ordering, authentication, callback service, or review feed is connected.
