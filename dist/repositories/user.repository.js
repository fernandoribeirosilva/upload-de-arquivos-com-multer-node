"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepository {
    constructor() {
        this.users = [];
    }
    findByUsername(username) {
        const userExists = this.users.find(user => user.username === username);
        return userExists;
    }
    save(user) {
        const id = Math.random().toString();
        user.id = id;
        const userWithId = Object.assign({}, user);
        this.users.push(userWithId);
        return userWithId;
    }
}
exports.default = new UserRepository;
