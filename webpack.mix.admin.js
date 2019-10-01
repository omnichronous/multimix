let mix = require('laravel-mix');

mix
  .options({
    processCssUrls: false
  })
  .js('resources/assets/admin/js/admin.js', 'admin/js/index.js')
  .less('resources/assets/admin/less/admin.less', 'admin/css/style.css')
;