//require gulp and gulp plugin
var gulp =require('gulp');
var concat = require('gulp-concat');
var cssclean = require('gulp-clean-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//default task
gulp.task('default',function(){


});
//script task
gulp.task('scripts',function(){
return gulp.src('./src/js/*.js')
.pipe(concat('app.js'))
.pipe(gulp.dest('./dist/js/'))
.pipe(uglify())
.pipe(rename({
	suffix: '.min'
}))
.pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles',function(){
return gulp.src('./src/sass/*.scss')
.pipe(sass())
.pipe(gulp.dest('./dist/css/'))
.pipe(cssclean())
.pipe(rename({
	suffix: '.min'
}))
.pipe(gulp.dest('./dist/css/'));
});