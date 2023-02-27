# Overview - feature/image-optimisation

This module provides a useful shortcode to automatically optimise, resize and serve images in next-gen formats. Images
are created with a <picture> element, with all accessibility/responsiveness features included (alt tags, widths and
heights, etc) This is essential if performance is a requirement for you, allowing you to cut down hours of work trying
to do this manually.

<!--  -->

# Setting up feature/image-optimisation

### Step 1 - Defining image widths

Navigate to ./src/\_11ty/shortcodes/optimiseImage.js and change the widths needed under the metadata variable. For
example, if the design calls for images at widths 300px, 700px and a hero image at 2000px, you would use widths: [300,
700, 2000]

Be careful with what 'sizes' value you use on the shortcode if a hero image is needed. The standard 100vw advice may
cause a 2000px image to load, hurting performance

### Step 2 - Using the shortcode

You can use the shortcode with the following syntax - {% image 'SOURCE', 'CLASS', 'ALT', 'SIZES', 'LOADING' %}

- SOURCE: The path of the image. By default, you should provide a value in /src/images/name.jpg or ./src/images/name.jpg
  format.
- CLASS: The class name to be applied to the <picture> element
- ALT: Apply alt text to the
- SIZES: A media query value to pass to the sizes attribute on the source tag.
- LOADING: Optional. If absent, lazy loading will be use. If the image is above the fold, use 'eager'

A complete example - {% image './src/images/example.jpg', 'cs-image', 'An example image', '(max-width: 64em) 500px,
100vw', 'eager' }
