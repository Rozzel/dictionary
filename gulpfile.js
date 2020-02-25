const gulp = require('gulp');
const markdown = require('gulp-markdown');

exports.default = () => (
    gulp.src('*.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'))
);