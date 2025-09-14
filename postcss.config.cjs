const tryRequire = (pkg) => {
  try {
    return require(pkg);
  } catch (e) {
    return null;
  }
};

const tailwindPlugin = tryRequire('@tailwindcss/postcss') || tryRequire('tailwindcss');

module.exports = {
  plugins: [
    tailwindPlugin,
    require('autoprefixer'),
  ].filter(Boolean),
};
