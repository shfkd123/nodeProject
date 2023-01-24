"use strict";

const output = {
    hello: (req, res)=>{
        res.render("home/index");
    },
    login:(req, res)=>{
        res.render("home/login");
    }
}

const users = {
    id: ["1234", "김하나", "김둘"],
    psword: ["1234", "1234", "1234"],
};


const process = {
    login:(req, res)=>{
        const id = req.body.id,
            psword = req.body.psword
        
        console.log(id, psword);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
}

module.exports = {
    output,
    process
};