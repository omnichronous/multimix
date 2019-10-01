let { mix } = require('laravel-mix');

mix
  .less('resources/assets/website/less/website.less', 'website/css/style.css')
  .options({
    processCssUrls: false
  })
  .js('resources/assets/website/js/website.js', 'website/js/all.js')
;