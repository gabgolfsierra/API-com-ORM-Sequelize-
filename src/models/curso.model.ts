import { Sequelize, DataType } from 'sequelize-typescript';
import database from '../database';
import Aluno from './aluno.model';

const Curso = database.define('Curso', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataType.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataType.TEXT,
  },
});

Curso.belongsToMany(Aluno, { through: 'AlunoCurso' });
Aluno.belongsToMany(Curso, { through: 'AlunoCurso' });

export default Curso;
