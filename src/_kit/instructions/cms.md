# Overview - feature/cms

This module adds Netlify CMS to the project. By default, it's set up in a blog-style format however, this can be
expanded for a whole range of use cases, including menus, vacancy boards or anything which would require modification
from a non-technical client. The admin panel can be accessed via the /admin route, with the posts controlled by the CMS
accessible by the /posts route. All setup for the CMS is controlled by the admin/config.yaml file. Consult the NetlfyCMS
Docs for more information

<!--  -->

# Setting up feature/cms

### Step 1 - Add link to /posts to the header.

To keep the project open to a range of branch combinations, there's no link to the posts page in the navigation. Either
add this manually or, if you're using a pages/ branch, add the frontmatter to the pages/posts.html file.

<!--  -->

# Considerations with other branches

### pages/

If you're choose to use the better-base.html file, make sure this is defined in pages/posts.html and
includes/layouts/post.html. Also make sure to add the frontmatter to the posts.html file.
