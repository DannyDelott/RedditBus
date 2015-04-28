var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var path = {
  ENTRY_POINT_JS:'./client/js/**/*.js',
  MINIFIED_OUT: './client/dist/'
};

gulp.task('js', function() {

      // main app js file
      gulp.src(path.ENTRY_POINT_JS)
      .pipe(uglify())
      .pipe(concat("app.min.js"))
      .pipe(gulp.dest(path.MINIFIED_OUT));

      // create 1 vendor.js file from all vendor plugin code
      // gulp.src('./assets/js/vendor/**/*.js')
      // .pipe(uglify())
      // .pipe(concat("vendor.js"))
      // .pipe(gulp.dest('./assets/js'))
      // .pipe( notify({ message: "Javascript is now ugly!"}) );
    });
