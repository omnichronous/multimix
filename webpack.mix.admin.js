let mix = require('laravel-mix');

mix
  .setPublicPath(path.normalize('public_html/assets/admin'))
  .options({
    processCssUrls: false
  })
  .js('resources/assets/admin/js/admin.js', 'js/global.js')
  .less('resources/assets/admin/less/admin.less', 'css/style.css')
;