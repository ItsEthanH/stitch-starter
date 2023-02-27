# Overview - The Stitch Starter Kit

# Overview - The Stitch Starter Kit

To make things as easy as possible, all temporary files for setting up the kit can be found in the kit directory. In
here, you can find the instructions and temporary styles to help you get a project off the ground as quick as possible.

Whenever you merge a branch, a markdown file for that branch will be put in kit/instructions, outlining how to use that
branch. When all branches are merged, just go through the instruction files, follow them and delete them when you're
done. When the folder is empty, you're ready to go!

There is also a styles folder, giving some starting styles for the header, footer and branch-specific features. To make
it easier to get a project up and running, the styles are served with a Nunjucks "Includes". This stops the temporary
styles from interfering with your normal stylesheets. If you decide to use a style/ branch, it will come pre-equipped
with the starter-styles sheet incorporated into your language of choice. The branch-specific styles (CMS branch, 9-page
branch, etc) should be transferred from kit/styles into your styling system, however.

<!--  -->

# Setting up the main branch

### Step 1 - Merge all branches you want to use with this kit

Remember - you can use one style/, one page/, and as many feature/ branches as you want

### Step 2 - Handle conflicts

Whenever you merge a branch, a markdown file for that branch will be put in kit/instructions, outlining how to use that
branch. When all branches are merged, just go through the instruction files, follow them and delete them when you're
done. When the folder is empty, you're ready to go!

There is also a styles folder, giving some starting styles for the header, footer and branch-specific features. To make
it easier to get a project up and running, the styles are served with a Nunjucks "Includes". This stops the temporary
styles from interfering with your normal stylesheets. If you decide to use a style/ branch, it will come pre-equipped
with the starter-styles sheet incorporated into your language of choice. The branch-specific styles (CMS branch, 9-page
branch, etc) should be transferred from kit/styles into your styling system, however.

<!--  -->

# Setting up the main branch

### Step 1 - Merge all branches you want to use with this kit

Remember - you can use one style/, one page/, and as many feature/ branches as you want

### Step 2 - Handle conflicts

If you're using more than one branch, there's a chance that merge issues will appear. As long as all unique content is
merged into the kit, everything will work. Refer to the README.md file for more information

### Step 3 - Run npm install

### Step 3 - Run npm install

To prevent massive merge issues, there's no package-lock.json in the repo. This shouldn't cause an issue, however. To
prevent massive merge issues, there's no package-lock.json in the repo. This shouldn't cause an issue, however.

### Step 4 - Handle kit/styles folder

### Step 4 - Handle kit/styles folder

By standard, the main branch comes with some starting styles to give you a responsive header and footer. These are built
into the style/ branches for you, so if you're using one of them, the starter-styles.html won't be present. Other
branches may come with their own styles, which aren't included elsewhere, so these should be incorporated into your
normal setup. By standard, the main branch comes with some starting styles to give you a responsive header and footer.
These are built into the style/ branches for you, so if you're using one of them, the starter-styles.html won't be
present. Other branches may come with their own styles, which aren't included elsewhere, so these should be incorporated
into your normal setup.

### Step 5 - Handle base.html

### Step 5 - Handle base.html

If you're using a pages/ branch, you will see that there is a better-base.html (in the includes/layouts folder), which,
as the name suggests, improves upon the base of your project. To account for the cases where a pages/ branch is not
used, all import tags (script, link, includes etc) will be placed into the standard base.html. Placeholder styles should
be handled as per the last step, while the script or stylesheet imports under the "transfer" section should be
transferred to better-base.html

### Step 6 - Delete this file and move onto the next!

### Step 6 - Delete this file and move onto the next!

With this, the foundations of the kit are set up. You can delete this .md file and move onto the next one. With this,
the foundations of the kit are set up. You can delete this .md file and move onto the next one.
