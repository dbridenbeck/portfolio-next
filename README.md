# Darren.fun
Meant to be a landing page to help future clients/employers gain a sense of who I am as a person and developer.

## Description
When the bottom-right link is clicked ("about -->" or "hello -->"), the view will toggle animated illustrations in/out of the colored circle, and update text to either describe my technical skill or my professional background.

## Specifications
### Text Specs
1. On page load: 
  - .title should contain "HELLO" in blue
  - .info-text should describe my web development experience
  - .linkText should contain "about" in blue

2. When "about -->" is clicked: 
  - .title should contain "ABOUT" in red
  - .info-text should describe my previous professional experience
  - .linkText should contain "hello" in red

3. When "hello -->" is clicked, text should switch back to case #1 above

### Animation Specs
1. On page load: images of computer, pinball, rollerskate and phone should slowly animate up and down the page, rotating slightly
2. When .link-container is clicked:
  - .title should have previous text animate up on Y axis and fade to zero opacity, and new text animate L->R on X axis and fade to 1 opacity
  - .info-text should transition from light grey to white creating a "flare" effect
  - previous .linkText text should animate L->R on X axis and to 0 opacity, new text should twirl up from below page fold.
  - images outside the circle should animate into the circle, and vice versa
  - images filter should animate, showing a flash of brightish purple before turning into it's final color (red if on "about" section, blue if on "hello" section).
  - Circle should animate to "jiggle" slightly bigger to slightly smaller, in a spring-like way, and change from blue/red

## Layout Specs
1. When on mobile: 
  - illustrations outside the circle should not be visible
  - .info-text and .linkText should always be above the fold of the screen
2. When on laptop+ resolution
  - All 4 illustrations should be visible, with 2 inside the circle and one on each side of the circle
  - All text should be visible on the screen and not below page fold

## Setup/Install Requirements

First install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Bugs
None known at the moment, validated to work correctly on the following:
- iOS Chrome, Firefox (1280 by 666 and 1920 x 946 resolutions)
- iPhone 6, 7, 8, 10 and 11 on Firefox Focus and Safari

## Support and contact details
Darren Bridenbeck: darren.bridenbeck@gmail.com

## Tech Used
- Next.js
- Next-optimized-images
- Framer Motion
- Styled JSX