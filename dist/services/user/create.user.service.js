"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUseService = void 0;
const user_repository_1 = __importDefault(require("../../repositories/user.repository"));
class CreateUseService {
    execute(data) {
        if (!data.username) {
            throw new Error('Username é obrigatório.');
        }
        if (!data.name) {
            throw new Error('name é obrigatório.');
        }
        const existUser = user_repository_1.default.findByUsername(data.username);
        if (existUser) {
            throw new Error('Username já existe.');
        }
        return user_repository_1.default.save(data);
    }
}
exports.CreateUseService = CreateUseService;
