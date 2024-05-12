import { Request, Response } from 'express';
import  Aluno from '../models/aluno.model';
import  Curso from '../models/curso.model';


export const AlunoController = {
    
    async create(req: Request, res: Response): Promise<Response> {
        const { nome, email } = req.body;
        const aluno = await Aluno.create({ nome, email });
        return res.status(201).json(aluno);
    },

    async getAll(req: Request, res: Response): Promise<Response> {
        const alunos = await Aluno.findAll({ include: [Curso] });
        return res.status(200).json(alunos);
    },

    async getById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const aluno = await Aluno.findByPk(id, { include: [Curso] });
        if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        return res.status(200).json(aluno);
    },

    async update(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const { nome, email } = req.body;
        const aluno = await Aluno.findByPk(id);
        if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        await aluno.update({ nome, email });
        return res.status(200).json(aluno);
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        await Aluno.destroy({ where: { id } });
        return res.status(204).send();
    },
};