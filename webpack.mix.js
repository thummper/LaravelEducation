const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 function findFiles(dir) {
    const fs = require('fs');
    return fs.readdirSync(dir).filter( file => {
        return fs.statSync(`${dir}/${file}`).isFile();
    });
 }

 function buildSass(dir, dest) {
    // Find all files in dir, compile sass and place them in dest
    findFiles(dir).forEach(function(file) {
        if(!file.startsWith('_')) {
            mix.sass(dir + '/' + file, dest);
        }
    })
    
 }



mix.js('resources/js/app.js', 'public/js');
buildSass('resources/scss', 'public/css');
