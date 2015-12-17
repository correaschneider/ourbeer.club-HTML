// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

var config = {
	"build": {
		"dir": "public",
		"files": {
			"assets": {
				"js": "public/assets/js",
				"css": "public/assets/css",
				"fonts": "public/assets/fonts",
				"img": "public/assets/img",
				"vendor": {
					"js": "public/assets/vendor/js",
					"css": "public/assets/vendor/css",
					"fonts": "public/assets/vendor/fonts",
					"img": "public/assets/vendor/img"
				}
			}
		}
	},
	"files": {
		"vendor": {
			"js": [
				"node_modules/jquery/dist/jquery.min.js",
				"node_modules/bootstrap/dist/js/bootstrap.min.js",
				"node_modules/bootstrap-material-design/dist/js/material.min.js",
				"node_modules/bootstrap-material-design/dist/js/ripples.min.js"
			],
			"css": [
				"node_modules/bootstrap/dist/css/bootstrap.min.css",
				"node_modules/bootstrap-material-design/dist/css/material.min.css",
				"node_modules/bootstrap-material-design/dist/css/material-fullpalette.min.css",
				"node_modules/bootstrap-material-design/dist/css/ripples.min.css",
				"node_modules/bootstrap-material-design/dist/css/roboto.min.css"
			],
			"fonts": [
				"node_modules/bootstrap/dist/fonts/*",
				"node_modules/bootstrap-material-design/dist/fonts/*"
			]
		},
		"assets": {
			"js": 'source/assets/js/*.js',
			"css": 'source/assets/css/*.css',
			"fonts": 'source/assets/fonts/*',
			"img": 'source/assets/img/*'
		}
	}
};

// create a default task and just log a message
gulp.task('default', function() {
	gulp.src(config.files.vendor.js).pipe(gulp.dest(config.build.files.assets.vendor.js));
	gulp.src(config.files.vendor.css).pipe(gulp.dest(config.build.files.assets.vendor.css));
	gulp.src(config.files.vendor.fonts).pipe(gulp.dest(config.build.files.assets.vendor.fonts));

	return gutil.log('Gulp is running!');
});

gulp.watch('source/*.html', function() {
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});

gulp.watch(config.files.assets.js, function() {
	gulp.src(config.files.assets.js).pipe(gulp.dest(config.build.files.assets.js));
});

gulp.watch(config.files.assets.css, function() {
	gulp.src(config.files.assets.css).pipe(gulp.dest(config.build.files.assets.css));
});

gulp.watch(config.files.assets.fonts, function() {
	gulp.src(config.files.assets.fonts).pipe(gulp.dest(config.build.files.assets.fonts));
});

gulp.watch(config.files.assets.img, function() {
	gulp.src(config.files.assets.img).pipe(gulp.dest(config.build.files.assets.img));
});