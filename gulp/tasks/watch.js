const gulp = require("gulp"),
    browserSync = require("browser-sync").create();
    watch = require("gulp-watch");

gulp.task("watch", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", () => {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
    console.log("inject task running..");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
