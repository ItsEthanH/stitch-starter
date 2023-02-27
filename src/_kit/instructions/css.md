# Overview - styles/sass

This branch includes a CSS styling setup for those who don't want to use a preprocessor. All styles are held in
./src/css and are just transferred over to /public without modification. In the css folder, you can see:

- critical.css - For all above-the-fold styles
- styles.css - For all shared, below-the-fold styles
- home.css - For all page-specific styles.

<!--  -->

# Setting up the styles/sass branch

### Step 1 - Set up variables

If you use CodeStitch, you'll know each Stitch comes with a :root with some CSS Custom Properties. Every CodeStitch
property can be found in the css/critical.css file. Set these up with the values you want for this project.

### Step 2 - Styling new pages

New pages should have their own CSS file made and entered into the stylesheet block, like shown in index.html. This will
pass the styles import the the <head> of the file, keeping file sizes low.

<!--  -->

# Considerations with other branches

### pages/

If you're using a pages/ branch, don't forget to move the style import over to the better-base.html
