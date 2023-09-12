"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPostOneId = exports.createPost = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM usuarios');
        return res.json(posts[0]);
    });
}
exports.getPosts = getPosts;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO usuarios SET ?', [newPost]);
        return res.json({
            message: "Usuário cadastrado",
            code: 200,
            message_code: "Solicitação Realizada com sucesso",
        });
    });
}
exports.createPost = createPost;
function getPostOneId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return res.json({
            Usuário: posts[0],
            message: "Mostrando dados do usuários",
            message_code: "Solicitação Realizada com sucesso",
            code: 200
        });
    });
}
exports.getPostOneId = getPostOneId;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM usuarios WHERE id = ?', [id]);
        return res.json({
            message: "Usuário excluído",
            code: 200,
            message_code: "Exclusão realizada com sucesso",
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE usuarios SET ? WHERE id = ?', [updatePost, id]);
        return res.json({
            message: "Usuário atualizado",
            code: 200,
            message_code: "Dados do usuário foram atualizados!"
        });
    });
}
exports.updatePost = updatePost;
