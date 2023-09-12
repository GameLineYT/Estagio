import { Request, Response } from 'express';
import { connect } from '../database';
import {Post} from '../interface/Post.interface';

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM usuarios');
    return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO usuarios SET ?', [newPost]);
    return res.json({
        message: "Usuário cadastrado",
        code: 200,
        message_code: "Solicitação Realizada com sucesso",
    });
}

export async function getPostOneId(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return res.json({
            Usuário: posts[0],
            message: "Mostrando dados do usuários",
            message_code: "Solicitação Realizada com sucesso",
            code: 200
        });
}

export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return res.json({
        message: "Usuário excluído",
        code: 200,
        message_code: "Exclusão realizada com sucesso",
    });
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE usuarios SET ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: "Usuário atualizado",
        code: 200,
        message_code: "Dados do usuário foram atualizados!"
    });
}