const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add('./src/_kit/**/*');
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/images');

  // trigger a reload on the following filetypes
  eleventyConfig.setServerOptions({
    watch: ['**/*.js', '**/*.css', '**/*.sass', '**/*.less'],
  });

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
