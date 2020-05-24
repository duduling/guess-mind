import gulp from 'gulp'
import sass from 'gulp-sass'
import nodeSass from 'node-sass'
import autoPrefixer from 'gulp-autoprefixer'

sass.compiler = nodeSass

const PATH = {
    styles: {
        src: 'assets/scss/styles.scss',
        dest: 'src/static/styles',
        watch: 'assets/scss/**/*.scss',
    },
}

const styles = () => gulp
    .src(PATH.styles.src)
    .pipe(sass())
    .pipe(
        autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })
    )
    .pipe(gulp.dest(PATH.styles.dest))

const watchFiles = () => gulp
    .watch(PATH.styles.watch, styles)

const dev = gulp.series([styles, watchFiles])

export default dev
