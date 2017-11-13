/*REQUIRED*/
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var scripts = require('./scripts');

/*SCSS TASKS*/
gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/main.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css'));
});

/*HTML TASKS*/
gulp.task('copyIndex', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('copyAppHtml', function(){
  return gulp.src('./src/app/**/*.html')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./build/templates'));
});

// gulp.task('copyJSComponents', function(){
//   return gulp.src('./src/app/**/*.component.js')
//         .pipe(rename({dirname: ''}))
//         .pipe(gulp.dest('./build/components'));
// });
//
// gulp.task('copyJSModules', function(){
//   return gulp.src('./src/app/modules/*.js')
//         .pipe(gulp.dest('./build/apps'));
// });
//
// gulp.task('copyJSServices', function(){
//   return gulp.src('./src/app/services/*.js')
//         .pipe(gulp.dest('./build/services'));
// });
//
// gulp.task('copyJSFiles', function(){
//   return gulp.src('./src/assets/js/*.js')
//         .pipe(gulp.dest('./build/assets/js'));
// });

gulp.task('copyJS', function(){
    return gulp.src(scripts)
          .pipe(concat('mainjs.js',  {newLine: ';'}))
          //.pipe(uglify())
          .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('copyImages', function(){
    return gulp.src('./src/assets/img/*.*')
            .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('html:watch', function () {
  gulp.watch('./src/**/*.html', ['copyIndex', 'copyAppHtml']);
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./src/**/*.js', ['copyIndex', 'copyAppHtml', 'copyJS' /*'copyJSComponents', 'copyJSModules','copyJSServices', 'copyJSFiles'*/]);
});


/*SERVER TASKS*/
gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      port: 8080,
      host: 'localhost',
      open: true
    }));
});

/*DEFAULT TASK*/
gulp.task('default', ['sass', 'sass:watch', 'copyIndex', 'copyAppHtml', /*'copyJSComponents', 'copyJSModules',  'copyJSServices','copyJSFiles',  */ 'copyJS', 'copyImages', 'html:watch', 'js:watch', 'webserver',]);
