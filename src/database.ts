import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost', 
  database: 'sua_database',
  username: 'localhost', 
  password: 'gg22445', 
  logging: false, 
});

export default sequelize;