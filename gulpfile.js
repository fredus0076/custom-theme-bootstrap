var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('scss', function () {
  return gulp.src('./main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});
 
gulp.task('watch', function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch("scss/**/*.scss", gulp.series('scss'));
  gulp.watch("./*.html").on('change', browserSync.reload);
});
