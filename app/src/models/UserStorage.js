"use strict";

class UserStorage {
    static #users = {
        id: ["ang", "kai", "lei"],
        pw: ["12", "34", "56"],
        name: ["kai", "jason", "leire"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;