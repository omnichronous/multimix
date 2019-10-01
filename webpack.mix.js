let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath(path.normalize('public_html/assets'))

if (process.env.section) {
  require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}

mix.mergeManifest();
