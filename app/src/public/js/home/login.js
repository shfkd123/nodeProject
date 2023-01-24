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
      .then((res) => console.log(res));


    
}