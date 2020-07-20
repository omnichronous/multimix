let mix = require('laravel-mix');

let path = '';

if (process.env.npm_config_unique_manifest) {
  path = `${process.env.section}/`;
  mix.setPublicPath('public_html/assets');
} else {
  mix.setPublicPath('public_html/assets/admin');
}

mix
  .options({
    processCssUrls: false
  })
  .js('resources/assets/admin/js/admin.js', `${path}js/global.js`)
  .less('resources/assets/admin/less/admin.less', `${path}css/style.css`);