import { Request, Response } from 'express';
import  Curso from '../models/curso.model';
import Aluno from '../models/aluno.model';

export const CursoController = {

    async create(req: Request, res: Response): Promise<Response> {
        const { nome, descricao } = req.body;
        const curso = await Curso.create({ nome, descricao });
        return res.status(201).json(curso);
    },

    async getAll(req: Request, res: Response): Promise<Response> {
        const cursos = await Curso.findAll({ include: [Aluno] });
        return res.status(200).json(cursos);
    },

    async getById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const curso = await Curso.findByPk(id, { include: [Aluno] });
        if (!curso) {
        return res.status(404).json({ message: 'Curso não encontrado' });
        }
        return res.status(200).json(curso);
    },

    async update(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        const { nome, descricao } = req.body;
        const curso = await Curso.findByPk(id);
        if (!curso) {
        return res.status(404).json({ message: 'Curso não encontrado' });
        }
        await curso.update({ nome, descricao });
        return res.status(200).json(curso);
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id);
        await Curso.destroy({ where: { id } });
        return res.status(204).send();
    },
    
};