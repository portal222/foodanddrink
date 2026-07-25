const { defineConfig } = require('@rsbuild/core');
const { pluginSass } = require('@rsbuild/plugin-sass');

module.exports = defineConfig({
  plugins: [pluginSass()],
});