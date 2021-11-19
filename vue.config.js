module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_colors.scss";
          @import "@/scss/_breakpoint.scss";
        `,
      },
    },
  },
};
