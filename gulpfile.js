var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

/* **************************************************
 * PATH object contains the filepaths to site assets.
 *
 * NOTES:
 * APP and LIBS use arrays to maintain order when
 * concatenating mulitiple files into one.
 * **************************************************/

var path = {};

// Backbone App
path.APP_DIR = './client/js/';
path.APP = [
  path.APP_DIR + 'models/Subreddit.js',
  path.APP_DIR + 'views/LogoView.js',
  path.APP_DIR + 'views/RedditInputView.js',
  path.APP_DIR + 'views/CreditsView.js',
  path.APP_DIR + 'views/CenterBoxView.js',
  path.APP_DIR + 'AppRouter.js',
  path.APP_DIR + 'app.js'
];

// 3rd party libraries
path.LIBS_DIR = 'client/lib/';
path.LIBS = [
  path.LIBS_DIR + 'underscore-min.js',
  path.LIBS_DIR + 'jquery-min.js',
  path.LIBS_DIR + 'backbone-min.js'
];

// Distribution assets
path.CLIENT_DIST = 'client/dist/';
path.APP_MIN = 'app.min.js';
path.LIBS_MIN = 'lib.min.js';

/* **************************************************
 * UGLIFY AND CONCATENATE task compresses JavaScript
 * files then combines them into one file that gets
 * served to the client.
 * **************************************************/

gulp.task('js', function() {

  // backbone app
  gulp.src(path.APP)
    .pipe(uglify())
    .pipe(concat(path.APP_MIN))
    .pipe(gulp.dest(path.CLIENT_DIST));

  // 3rd party libraries
  gulp.src(path.LIBS)
    .pipe(concat(path.LIBS_MIN))
    .pipe(gulp.dest(path.CLIENT_DIST));
});

/* **************************************************
 * DEFAULT task runs the necessary gulp tasks in the
 * correct order to build distribution code that gets
 * served to the client.
 * **************************************************/

gulp.task('default', ['js']);
