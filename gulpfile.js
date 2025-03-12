import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sassCompiler from 'sass';
import concat from 'gulp-concat';

const sassPlugin = sass(sassCompiler);

function styles() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassPlugin().on('error', sassPlugin.logError))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/dist/css'));
}

function copyFiles() {
  return gulp.src("src/*.html")
      .pipe(gulp.dest("dist"));
}

function watchFiles() {
  gulp.watch("src/sass/**/*.scss", styles);
}

export default gulp.series(styles, copyFiles, watchFiles);

