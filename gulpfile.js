/**
 * Created by wensheng on 2016/2/22.
 */
var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("scripts",function(){
    return gulp.src("src/calendar.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});






/*
gulp使用教程

第一:
gulp必须在nodejs环境下运行，所以要先搭建nodejs环境。
测试nodejs是否安装正常。命令：node -v 如果返回版本号说明安装正常

然后再 npm init 会自动生成一个package.json文件。这个文件保存项目的相关信息

第二:
npm install gulp -g 安装全局gulp
然后在项目里的根目录再安装一遍 npm install gulp --save-dev

第三:
新建一个gulpfile.js文件
然后安装js代码检测插件，压缩文件插件，重名名插件(这里只讲一下这三个插件的使用，当然gulp还有很多强大的插件)
js代码检测插件：
npm install gulp-jslint --save-dev
压缩文件插件：
npm install gulp-uglify --save-dev
重名名插件：
npm install gulp-rename --save-dev
再安装一下npm install jslint

然后在gulpfile.js文件里面编写gulp任务代码

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("scripts",function(){
    return gulp.src("src/calendar.js")
        .pipe(jshint())  //检查代码
        .pipe(jshint.reporter('default'))
        .pipe(rename({suffix:".min"}))  //重命名
        .pipe(uglify())  //压缩文件
        .pipe(gulp.dest("dist")); //压缩存放的路径
});
    */