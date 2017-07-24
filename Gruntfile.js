module.exports = function (grunt) {
    grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),

         watch: {
            browserify:{
                files:['./js/source/**/*.js',
                        './js/source/app.js'],
                tasks: ['browserify','uglify']
            },
            sass:{
                files:['./scss/components/*.scss',
                      './scss/app.scss'
                ],
                tasks:['sass']
            }
         },
         browserify:{
             dist:{
                 options:{
                     transform: [['babelify', {presets: ['es2015', 'react']}]]
                 },
                 src:['./js/source/**/*.js',
                     './js/source/app.js'],
                 dest:'./bundle.js'
             }
         },
         uglify:{
             my_target:{
                 files:{
                     './bundle-min.js':['./bundle.js']
                 }
             }
         },
         sass:{
             dist: {
                 options:{
                     style:'compressed'
                 },
                 files:{
                     './app.css':'./scss/app.scss'
                 }
             }
         },
        browserSync: {
            dev: {
                bsFiles:{
                    src: [
                        './index.html',
                        './app.css',
                        './bundle-min.js',
                    ]
                },
                options:{
                    watchTask: true,
                    server: './'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-browserify');


    grunt.registerTask('default', ['browserSync','watch']);
};