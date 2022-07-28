"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_service_1 = require("../services/user/create.user.service");
class UserController {
    handle(req, res) {
        const { body } = req;
        try {
            const createUserService = new create_user_service_1.CreateUseService();
            const result = createUserService.execute(body);
            res.status(201).json({ data: result });
            return;
        }
        catch (err) {
            res.status(400).json({ error: err.message });
            return;
        }
    }
}
exports.UserController = UserController;
