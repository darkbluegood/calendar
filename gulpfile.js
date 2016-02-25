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
gulpʹ�ý̳�

��һ:
gulp������nodejs���������У�����Ҫ�ȴnodejs������
����nodejs�Ƿ�װ���������node -v ������ذ汾��˵����װ����

Ȼ���� npm init ���Զ�����һ��package.json�ļ�������ļ�������Ŀ�������Ϣ

�ڶ�:
npm install gulp -g ��װȫ��gulp
Ȼ������Ŀ��ĸ�Ŀ¼�ٰ�װһ�� npm install gulp --save-dev

����:
�½�һ��gulpfile.js�ļ�
Ȼ��װjs����������ѹ���ļ���������������(����ֻ��һ�������������ʹ�ã���Ȼgulp���кܶ�ǿ��Ĳ��)
js����������
npm install gulp-jslint --save-dev
ѹ���ļ������
npm install gulp-uglify --save-dev
�����������
npm install gulp-rename --save-dev
�ٰ�װһ��npm install jslint

Ȼ����gulpfile.js�ļ������дgulp�������

var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("scripts",function(){
    return gulp.src("src/calendar.js")
        .pipe(jshint())  //������
        .pipe(jshint.reporter('default'))
        .pipe(rename({suffix:".min"}))  //������
        .pipe(uglify())  //ѹ���ļ�
        .pipe(gulp.dest("dist")); //ѹ����ŵ�·��
});
    */