import { Request, Response } from 'express';

export function indexWelcome(req: Request, res: Response): Response {
    return res.json('Bem vindo à API do Projeto de Estágio') 
};