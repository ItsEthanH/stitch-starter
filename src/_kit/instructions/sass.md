# Overview - styles/sass

This branch includes a SASS setup for your project, bringing all the styles from the starter-styles.html file in the
main branch into a 7-1-esque setup. SASS compilation, transfer to /public and enhancements are all handled when you run
npm start.

The folder structure for the SASS branch is as follows:

- base - Global styles applied to the whole project. Includes a reset, global file and a place to put @font-faces
- components - Non-critical components for below-the-fold content
- critical - Above-the-fold content that is loaded first when a user navigates to a page
- pages - Page-specific, non-repeatable styles
- utilities - SASS features and variables. Set up with CodeStitch variables in mind.
- theme (sass-dark only) - For different page themes, normally just a dark mode.

<!--  -->

# Setting up the styles/sass branch

### Step 1 - Set up variables

If you use CodeStitch, you'll know each Stitch comes with a :root with some CSS Custom Properties. Every CodeStitch
property can be found in the utilities/variables file. Set these up with the values you want for this project.

<!--  -->

# Considerations with other branches

### pages/

If you're using a pages/ branch, don't forget to move the style import over to the better-base.html
