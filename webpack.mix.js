let mix = require('laravel-mix');
require('laravel-mix-merge-manifest');


if (process.env.section) {
  require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}

if (process.env.npm_config_unique_manifest) {
  mix.mergeManifest();
}

