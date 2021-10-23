const {src, dest, series, watch, parallel} = require('gulp');
const concat = require('gulp-concat');

const htmlMin = require('gulp-htmlmin');
const autoprefixes = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')

}


const styles = () => {
  return src(['src/styles/normalize.css','src/styles/style.css'])
  // src(['src/styles/normalize.css','src/styles/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
    .pipe(concat('main.css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())

}


const html = () => {
  return src('src/**/*.html')
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())

}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
}

const scripts = () => {
  return src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(concat('app.js'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const fonts = () => {
  return src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
  .pipe(dest('dist/fonts'))
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png',
    'src/images/**/*.svg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

const prebuild = function () {
  const ind = src('src/**/*.html')
    .pipe(dest('dist'))
  const resource = src('src/resources/**')
  //   .pipe(dest('dist'))
  const css = src(['src/styles/normalize.css','src/styles/**/style.css'])
    //src(['src/styles/normalize.css','src/styles/**/*.scss'])
    // .pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist/css'))
  
}

const buildM = function () {
  const js = src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
    .pipe(concat('app.js'))
    .pipe(dest('dist/js'))
  const spritesSvg = src('src/images/svg/**/*.svg')
    .pipe(dest('dist/images'))
  const fnt = src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(dest('dist/fonts'))
    // return src(['src/fonts/**/*.woff'])
    // .pipe(dest('dist/fonts'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/styles/**/*.css', styles)
// watch('src/styles/**/*.scss', styles)
watch('src/**/*.html', htmlMinify)
watch('src/**/*.html', html)
watch([
  'src/images/**/*.jpg',
  'src/images/**/*.jpeg',
  'src/images/**/*.png',
  'src/images/*.svg',
], images)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.dev = series(resources, parallel(styles, scripts, html, fonts, images), svgSprites, watchFiles)
exports.build = series(clean, htmlMinify, fonts, images, parallel(prebuild, buildM))
