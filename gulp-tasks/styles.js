'use strict'

import browsersync from 'browser-sync'
import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import mincss from 'gulp-clean-css'
import debug from 'gulp-debug'
import groupmedia from 'gulp-group-css-media-queries'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import gulpsass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import dartsass from 'sass'
import yargs from 'yargs'
import { paths } from '../gulpfile.babel'

const sass = gulpsass(dartsass)
const argv = yargs.argv,
	production = !!argv.production

gulp.task('styles', () => {
	return gulp
		.src(paths.styles.src)
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(
			plumber(function (error) {
				console.error(error.messageFormatted)
				this.emit('end')
			})
		)
		.pipe(sass())
		.pipe(groupmedia())
		.pipe(
			gulpif(
				production,
				autoprefixer({
					cascade: false,
					grid: true,
				})
			)
		)
		.pipe(
			gulpif(
				production,
				mincss({
					compatibility: 'ie8',
					level: {
						1: {
							specialComments: 0,
							removeEmpty: true,
							removeWhitespace: true,
						},
						2: {
							mergeMedia: true,
							removeEmpty: true,
							removeDuplicateFontRules: true,
							removeDuplicateMediaBlocks: true,
							removeDuplicateRules: true,
							removeUnusedAtRules: false,
						},
					},
				})
			)
		)
		.pipe(
			gulpif(
				production,
				rename({
					suffix: '.min',
				})
			)
		)
		.pipe(gulpif(!production, sourcemaps.write('./maps/')))
		.pipe(gulp.dest(paths.styles.dist))
		.pipe(
			debug({
				title: 'CSS files',
			})
		)
		.on('end', browsersync.reload)
})
