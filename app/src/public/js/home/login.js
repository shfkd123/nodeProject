"use strict"

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginbtn = document.querySelector("button");

//console.log(id);

loginbtn.addEventListener("click", login);

function login() {
    //console.log(id.value);
    const req = {
        id: id.value,
        psword: pwd.value,
    };
    console.log(req);
}