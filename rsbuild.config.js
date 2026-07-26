const { defineConfig } = require('@rsbuild/core');
const { pluginSass } = require('@rsbuild/plugin-sass');

const path = require('path');

module.exports = defineConfig({
  plugins: [pluginSass()],
  output: {
    // Kopiraj statičke fajlove iz public u dist
    copy: [
      { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
    ],
  },
});



