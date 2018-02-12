var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task('run', shell.task('NODE_PATH=./commonJS node commonJS/main-matrix.js'));

// npm install -g node-static
gulp.task("server", shell.task("static -p 8080"));

gulp.task("run-browser", shell.task("open http://localhost:8080"));

// Starting with version 8.5.0, Node.js supports ES modules natively, behind a command line option
gulp.task("e6mod", shell.task("node --experimental-modules es6/main-matrix.mjs"))
