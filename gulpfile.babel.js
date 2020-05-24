import gulp from 'gulp'
import sass from 'gulp-sass'

const PATHS = {
    styles: {
        src: 'assets/scss/styles.scss',
        dest: 'src/static/styles',
    },
}

export const styles = () => gulp
    .src(PATHS.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(PATHS.styles.dest))
