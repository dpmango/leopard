var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync');

// Scripts concat & minify

gulp.task('js', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/slick-master/slick/slick.min.js',
		// 'app/libs/compiled-with-examples/parallax.min.js',
		// 'app/libs/fullPage.js-master/dist/jquery.fullpage.min.js',
		// 'app/libs/Inputmask-4.x/dist/jquery.inputmask.bundle.js',
		// 'app/libs/jquery-spincrement-master/jquery.spincrement.min.js',
		// 'app/libs/selectize.js-master/dist/js/standalone/selectize.min.js',
		// 'app/libs/fancybox-master/dist/jquery.fancybox.min.js',
		// 'app/libs/Magnific-Popup-master/dist/jquery.magnific-popup.min.js',
		'app/libs/anchor.js',
		// 'app/libs/jQuery-viewport-checker-master/dist/jquery.viewportchecker.min.js',
		// 'app/libs/greensock-js/src/minified/TweenMax.min.js',
		// 'app/libs/greensock-js/src/minified/TimelineMax.min.js',
		// 'app/libs/timeTo/jquery.time-to.js',
		'app/libs/malihu-custom-scrollbar-plugin-3.1.5/jquery.mCustomScrollbar.concat.min.js',
		// 'app/libs/instafeed.min.js',
		'app/libs/fancybox-master/dist/jquery.fancybox.min.js',
		'app/libs/svgxuse-master/svgxuse.min.js',
		'app/libs/aos-master/dist/aos.js',
		// 'app/libs/priority-navigation-master/dist/priority-nav.min.js',
		// 'app/libs/baron-master/baron.min.js',
		// 'app/libs/lib-head.pack.min.js',
		// 'app/libs/lib-body.pack.min.js',
		// 'app/libs/index.min.js',
		'app/js/common.js', // Always at the end
		]) 
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	})
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('default', ['watch']);
