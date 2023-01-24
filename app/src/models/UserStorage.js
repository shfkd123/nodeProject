"use strict"

class UserStorage {
    static #users = {
        id: ["1234", "김하나", "김둘"],
        psword: ["1234", "1234", "1234"],
        name: ["김별", "이별", "감별"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;