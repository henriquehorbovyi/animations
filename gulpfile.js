gulp        = require("gulp");
watch       = require("gulp-watch");
uglify      = require("gulp-uglify");
minifyhtml  = require("gulp-minify-html");
minifycss   = require("gulp-minify-css");

paths = {
  js: "src/scripts/*.js",
  css: "src/css/*.css",
  html: "src/view/*.html",
};

gulp.task("default",['compress-all']);
gulp.task("watch",function(){
    gulp.watch(paths.js,["compress-js"]);
    gulp.watch(paths.html,["compress-html"]);
    gulp.watch(paths.css,["compress-css"]);
});
gulp.task("compress-all", ["compress-js","compress-html","compress-css"]);

gulp.task("compress-js",function(){
  gulp.src(paths.js)
  .pipe(uglify())
  .pipe(gulp.dest("dist/js/"));
});
gulp.task("compress-html",function(){
  gulp.src(paths.html)
  .pipe(minifyhtml())
  .pipe(gulp.dest("dist/view/"));
});
gulp.task("compress-css",function(){
  gulp.src(paths.css)
  .pipe(minifycss())
  .pipe(gulp.dest("dist/css/"));
});
