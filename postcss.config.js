module.exports = {
  plugins: [
    "rfs",
    [
      "autoprefixer",
      {
        flexbox: "no-2009",
        grid: "autoplace",
      },
    ],
    "postcss-responsive-type",
    "postcss-flexbugs-fixes",
    [
      "cssnano",
      {
        preset: "default",
        zindex: false,
      },
    ],
  ],
};
