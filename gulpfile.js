import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sassCompiler from 'sass';
import concat from 'gulp-concat';

const sassPlugin = sass(sassCompiler);

// Компиляция SCSS в CSS
function styles() {
  return gulp.src('src/sass/**/*.scss') // Следим за всеми SCSS файлами
    .pipe(sourcemaps.init()) // Инициализация sourcemaps
    .pipe(sassPlugin().on('error', sassPlugin.logError)) // Компиляция SCSS в CSS
    .pipe(concat('styles.css')) // Объединение всех CSS файлов
    .pipe(sourcemaps.write('.')) // Запись sourcemaps
    .pipe(gulp.dest('dist/css')); // Вывод в папку dist/css
}

// Копирование HTML файлов
function copyFiles() {
  return gulp.src("src/*.html")
      .pipe(gulp.dest("dist"));
}

// Следим за изменениями
function watchFiles() {
  gulp.watch("src/sass/**/*.scss", styles); // Следим за SCSS
  gulp.watch("src/*.html", copyFiles); // Следим за HTML
}

// Экспорт задач
export { styles, copyFiles as copy, watchFiles as watch };
