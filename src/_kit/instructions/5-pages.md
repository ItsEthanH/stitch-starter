# Overview - pages/9-pages

The 9-pages branch comes with a centralised data directory, an improved base.html and some predefined pages with front
matter all set up. They also incorporate the eleventyNavigation plugin to make it easier to add new pages. As long as
the correct format in the front matter is followed, the base.html will adapt to that page, improving performance and
SEO. All data in the \_data directory is accessible throughout the project, providing a central point of change across
the website

<!--  -->

# Setting up the 9-pages branch

### Step 1 - Incorporating Client Data

Fill out the data/client.json file with the project information.

- Name: Name of the business the website is for
- Email: Main point of contact for the website
- Phone: The most supported phone number format, for use in href="tel:"
- Phone Formatted: The prettiest phone format, for display on the page
- Address: For display on the website. Include a Google Map link for a clickable Address
- Social: Boilerplate social media links
- Domain: The domain the project will be hosted on upon completion

### Step 2 - Transfering Necessary Imports

In includes/base.html, bring everything under the transfer comment into better-base.html, to ensure all branches work
correctly. Also transfer the contents of kit/styles/dropdown.html into your styling system

## Step 3 - Adding New Pages

Follow the front matter template for all new pages. Extend from layouts/better-base.html

- title: Name of the page that will appear in base.html and the search results\
- description: For the meta description tag\
- preload: For above-fold images. Preload them for a performance boost\
- permalink: Filepath for the page. Otherwise, it will render as /pages/page-slug\
- eleventyNavigation:\
  key: How you want the page to appear in the navigation\
  order: The order, from lowest to highest, that the pages will appear\

<!--  -->

# OTHER USEFUL THINGS TO ADD TO better-base.html

### Favicons

Use https://realfavicongenerator.net. Best served in ./src/assets. You can also use the below code to account for
light/dark browser themes

<link rel="icon" type="image/png" href="/assets/favicons/favicon-light-16x16.png" sizes="16x16" media="(prefers-color-scheme: light)" />
<link rel="icon" type="image/png" href="/assets/favicons/favicon-light-32x32.png" sizes="32x32" media="(prefers-color-scheme: light)" />
<link rel="icon" type="image/png" href="/assets/favicons/favicon-dark-16x16.png" sizes="16x16" media="(prefers-color-scheme: dark)" />
<link rel="icon" type="image/png" href="/assets/favicons/favicon-dark-32x32.png" sizes="32x32" media="(prefers-color-scheme: dark)" />

### Fonts

Use https://gwfh.mranftl.com/fonts to self host fonts You can also use the below code to preload custom fonts

<link rel="preload" as="font" type="font/woff2" href="fonts/roboto-v29-latin-regular.woff2" crossorigin/>
<link rel="preload" as="font" type="font/woff2" href="fonts/roboto-v29-latin-700.woff2" crossorigin/>

### Preload Google Analytics

<link href="https://www.googletagmanager.com/gtag/js?id=YOUR-ID-HERE" rel="preload" as="script" />

<!--  -->

# Considerations with other branches

### feature/cms

The pages/posts and layouts/post files both use the base.html file as a layout. Be sure to use the better-base.html
instead
