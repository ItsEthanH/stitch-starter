const Image = require('@11ty/eleventy-img');
const path = require('path');

async function optimiseImage(rawSrc, classes, alt, sizes, loading = 'lazy') {
  // allows support of ./src and /src paths - needed for the CMS feature
  const src = rawSrc[0] === '.' ? rawSrc : `.${rawSrc}`;

  // generates metadata for the images. takes the image src, optimises it, resizes it based on the widths and moves it to public as per the outputDir
  let metadata = await Image(src, {
    outputDir: './public/images',
    urlPath: '/images',
    widths: [300, 500, 750], // change based on image widths needed
    formats: ['webp', 'jpeg'],
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let lowsrc = metadata.jpeg[0];

  // generates responsive image html with all the good things. alt, height/widths and sources.
  return `<picture class="${classes}">
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}
      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="${loading}"
        decoding="async">
    </picture>`;
}

module.exports = { optimiseImage };
