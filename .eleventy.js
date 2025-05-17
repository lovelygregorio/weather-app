module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("weather_data.js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");


  return {
    templateFormats: ["njk", "html", "md"],
    dir: {
      input: ".",         
      output: "_site",    
    }
  };
};
