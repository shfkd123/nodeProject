"use strict"

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
    loginbtn = document.querySelector("button");

//console.log(id);

loginbtn.addEventListener("click", login);

function login() {
    //console.log(id.value);
    const req = {
        id: id.value,
        psword: psword.value,
    };
    //console.log(req);
    //console.log(JSON.stringify(req)); //문자열
    

    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/";
        }else{
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
      });
}