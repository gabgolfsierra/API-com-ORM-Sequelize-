import express from 'express';
import { AlunoController } from './controllers/aluno.controller';
import { CursoController } from './controllers/curso.controller';

const app = express();
app.use(express.json());


app.get('/alunos', AlunoController.getAll);
app.post('/alunos', AlunoController.create);
app.get('/alunos/:id', AlunoController.getById);
app.put('/alunos/:id', AlunoController.update);
app.delete('/alunos/:id', AlunoController.delete);

app.get('/cursos', CursoController.getAll);
app.post('/cursos', CursoController.create);
app.get('/cursos/:id', CursoController.getById);
app.put('/cursos/:id', CursoController.update);
app.delete('/cursos/:id', CursoController.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
