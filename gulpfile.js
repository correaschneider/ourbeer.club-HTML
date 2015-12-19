// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    config = require('build_config.json');

var cpJS = function () {
		gulp.src(config.files.vendor.js).pipe(gulp.dest(config.build.files.assets.vendor.js));
		gulp.src(config.files.assets.js).pipe(gulp.dest(config.build.files.assets.js));
	},
	cpCSS = function () {
		gulp.src(config.files.vendor.css).pipe(gulp.dest(config.build.files.assets.vendor.css));
		gulp.src(config.files.assets.css).pipe(gulp.dest(config.build.files.assets.css));
	},
	cpFonts = function () {
		gulp.src(config.files.vendor.fonts).pipe(gulp.dest(config.build.files.assets.vendor.fonts));
		gulp.src(config.files.assets.fonts).pipe(gulp.dest(config.build.files.assets.fonts));
	},
	cpImg = function () {
		gulp.src(config.files.vendor.img).pipe(gulp.dest(config.build.files.assets.vendor.img));
		gulp.src(config.files.assets.img).pipe(gulp.dest(config.build.files.assets.img));
	},
	cpHtml = function () {
		gulp.src(config.files.html).pipe(gulp.dest(config.build.dir));
	};

// create a default task and just log a message
gulp.task('default', function() {
	cpJS();
	cpCSS();
	cpFonts();
	cpImg();
	cpHtml();

	return gutil.log('Gulp is running!');
});

gulp.watch(config.files.assets.js, cpJS);
gulp.watch(config.files.assets.css, cpCSS);
gulp.watch(config.files.assets.fonts, cpFonts);
gulp.watch(config.files.assets.img, cpImg);
gulp.watch(config.files.html, cpHtml);