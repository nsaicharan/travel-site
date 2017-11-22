const gulp = require('gulp'),
    postcss = require("gulp-postcss"),
    nested = require("postcss-nested"),
    autoprefixer = require("autoprefixer"),
    variables = require("postcss-simple-vars"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins");

gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, variables, nested, autoprefixer]))
    .on('error', function(errorInfo) {
        this.emit('end');
        console.log(errorInfo.toString());
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
