const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

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



mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/scss/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js')]
    })
    .version()

