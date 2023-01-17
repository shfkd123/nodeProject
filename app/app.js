"use strict";

// express없이 서버 띄우기 (바닐라 자바스크립트)
// const http = require("http");
// const app = http.createServer((req, res)=>{
//    //console.log(req.url);

//    res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
//    if(req.url === '/'){
//     res.end("여기는 루트 입니다.");
//    }else if(req.url === '/login'){
//     res.end("여기는 로그인 화면입니다.");
//    }
// });

// app.listen(3001,()=>{
//     console.log("http로 개발한 서버입니다.");
// });

/* express 사용하여 서버 띄우기*/

//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
