gulp        = require("gulp");
uglify      = require("gulp-uglify");
minifyhtml  = require("gulp-minify-html");
minifycss   = require("gulp-minify-css");


gulp.task("default",function(){
  console.log("gulp it's ok");
});

gulp.task("compress-all", ["compress-js","compress-html","compress-css"]);

gulp.task("compress-js",function(){
  gulp.src("src/scripts/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js/"));
});
gulp.task("compress-html",function(){
  gulp.src("src/view/*.html")
  .pipe(minifyhtml())
  .pipe(gulp.dest("dist/view/"));
});
gulp.task("compress-css",function(){
  gulp.src("src/css/*.css")
  .pipe(minifycss())
  .pipe(gulp.dest("dist/css/"));
});
