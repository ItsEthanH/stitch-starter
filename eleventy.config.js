module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addWatchTarget('./src/assets/*');

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
