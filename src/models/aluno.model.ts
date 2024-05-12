import { Sequelize, DataType } from 'sequelize-typescript';
import database from '../database';

const Aluno = database.define('Aluno', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  },
});

export default Aluno;