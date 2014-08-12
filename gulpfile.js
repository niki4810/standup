var gulp = require("gulp"),
	browserify = require("gulp-browserify"),
	concat = require("gulp-concat"),
	bower = require('gulp-bower'),
	changed = require('gulp-changed'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	react = require('gulp-react'),
	jscs = require('gulp-jscs'),
	exec = require('child_process').exec;


gulp.task("jest", function(cb){
	exec('npm test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });	
});

gulp.task("jscs", function(){
return gulp.src('src/js/**/*.js')
	.pipe(react())
	.pipe(jscs());
});

gulp.task("lint", function(){
return gulp.src('src/js/**/*.js')
	.pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

/* global linting, jscs and test verify */
gulp.task("verify",["lint","jscs","jest"]);

gulp.task("bower", function() {
  return bower()
    .pipe(gulp.dest("src/libs"))
});


gulp.task("browserify", function(){
	gulp.src("src/js/main.js")
	.pipe(browserify({transform:'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest("chrome-extension/dist/js"));
});

/*TODO: find a better way to copy css, assets and html :)*/
gulp.task("copy-libs",function(){
	gulp.src("src/libs/**/*.*")
		.pipe(changed("chrome-extension/dist/libs"))
		.pipe(gulp.dest("chrome-extension/dist/libs"));
});

gulp.task("copy-assets",function(){
	gulp.src("src/assets/*.*")
		.pipe(changed("chrome-extension/dist/assets"))
		.pipe(gulp.dest("chrome-extension/dist/assets"));
});

gulp.task("copy-css",function(){
	gulp.src("src/css/*.css")
		.pipe(changed("chrome-extension/dist/css", {extension: ".css"}))
		.pipe(gulp.dest("chrome-extension/dist/css"));
});

gulp.task("copy-html",function(){
	gulp.src("src/index.html")
		.pipe(changed("chrome-extension/dist", {extension: ".html"}))
		.pipe(gulp.dest("chrome-extension/dist"));
});

gulp.task("default", ["build"]);

/* everything except bower */
gulp.task("build", ["browserify",
	"copy-html","copy-assets","copy-css","copy-libs"]);

/* watch for new file change and build*/
/* TODO: ignore libs */
gulp.task("watch",function(){
	gulp.watch("src/**/*.*",["build"]);
});

