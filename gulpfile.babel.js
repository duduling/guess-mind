import gulp from 'gulp'
import sass from 'gulp-sass'
import nodeSass from 'node-sass'
import autoPrefixer from 'gulp-autoprefixer'
import del from 'del'
import bro from 'gulp-browserify'

sass.compiler = nodeSass

const PATH = {
    styles: {
        src: 'assets/scss/styles.scss',
        dest: 'src/static/styles',
        watch: 'assets/scss/**/*.scss',
    },
    js: {
        src: 'assets/js/main.js',
        dest: 'src/static/js',
        watch: 'assets/js/**/*.js',
    },
}

const clean = () => del(['src/static'])

const styles = () => gulp
    .src(PATH.styles.src)
    .pipe(sass())
    .pipe(
        autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }),
    )
    .pipe(gulp.dest(PATH.styles.dest))

const js = () => gulp
    .src(PATH.js.src)
    .pipe(bro())
    .pipe(gulp.dest(PATH.js.dest))

const watchFiles = () => gulp
    .watch(PATH.styles.watch, styles)
    .watch(PATH.js.watch, js)

const dev = gulp.series(clean, styles, js, watchFiles)

export default dev
