module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/Erika-L-Debelis-Portfolio/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
      "/ap-highlight": { page: "/ap-highlight" },
    }
  },

  assetPrefix: !debug ? 'https://erikadebelis.github.io/Erika-L-Debelis-Portfolio/' : '',
}