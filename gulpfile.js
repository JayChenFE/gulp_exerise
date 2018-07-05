var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
});

gulp.task('serve2', ['sass'], function () {

    browserSync.init({
        server: "./app",
        index:"index2.html",
        port:9001
    });

    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
    return gulp.src("app/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/styles"))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);

gulp.task('default2', ['serve2']);