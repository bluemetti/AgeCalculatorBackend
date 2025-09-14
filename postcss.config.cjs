const tryRequire = (pkg) => {
  try {
    return require(pkg);
  } catch (e) {
    return null;
  }
};

const tailwindPlugin = tryRequire('@tailwindcss/postcss') || tryRequire('tailwindcss');

const autoprefixer = tryRequire('autoprefixer');

module.exports = {
  plugins: [
    tailwindPlugin,
    autoprefixer,
  ].filter(Boolean),
};
