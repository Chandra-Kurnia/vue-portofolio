module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_colors.scss";
          @import "@/scss/_breakpoint.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_fonts.scss";
        `,
      },
    },
  },
};
