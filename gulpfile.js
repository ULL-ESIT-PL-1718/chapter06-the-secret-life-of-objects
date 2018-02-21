var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("preinstall", shell.task([
      "npm install -g static-server",
      "sudo gem install asciidoctor"
]));

gulp.task("server", shell.task("static -p 8080"));

gulp.task("doc", shell.task("asciidoctor summary.adoc -o index.html"));

gulp.task("deploy", ["doc"], shell.task("git ci -am deploy; git push origin master"));
