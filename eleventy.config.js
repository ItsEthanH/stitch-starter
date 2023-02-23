const optimiseImage = require('./src/_11ty/shortcodes/optimiseImage').optimiseImage;

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add('./src/_kit/**/*');

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/images');

  // trigger a reload on the following filetypes
  eleventyConfig.setServerOptions({
    watch: ['**/*.js', '**/*.css', '**/*.sass', '**/*.less'],
  });

  eleventyConfig.addShortcode('image', optimiseImage);

  return {
    // default is to use nunjucks to render everything - feel free to change this to whatever you want
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      output: 'public',
    },
  };
};
