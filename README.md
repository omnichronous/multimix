This is an example of a front-end build system based on [__Laravel Mix__](https://github.com/JeffreyWay/laravel-mix) which handles admin panel and website concerns separately. It works with different mix configs and outputs separate Mix manifests. The build scripts are defined in `package.json`. It is as simple as possible so that it can be easily adapted to an existing Laravel project.

1. Run `npm install` to set up the dependencies.
2. Modify `webpack.mix.admin.js` or `webpack.mix.website.js` if you want to change sources and destinations, or to play around with the build process of course.
3. Run one of the build scripts and check out the output (for example `npm run dev`)

I put this together after reading through many excellent replies to various Laravel Mix issues. Feel free to fork this repo and add to it.