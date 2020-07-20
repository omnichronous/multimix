let { mix } = require('laravel-mix');

let path = '';

if (process.env.npm_config_unique_manifest) {
  path = `${process.env.section}/`;
  mix.setPublicPath('public_html/assets');
} else {
  mix.setPublicPath('public_html/assets/website');
}

mix
  .options({
    processCssUrls: false
  })
  .less('resources/assets/website/less/website.less', `${path}css/style.css`)
  .js('resources/assets/website/js/website.js', `${path}js/global.js`);
;