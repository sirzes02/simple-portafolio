const isProd = (process.env.NODE_ENV || "production") === "production";

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
  assetPrefix: isProd ? "/sirzes02.github.io" : "",
};
