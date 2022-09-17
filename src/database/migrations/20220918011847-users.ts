import {
  QueryInterfaceType,
  SequelizeType,
} from '../../../types/sequelize-migration-cli';

module.exports = {
  up: async (
    queryInterface: QueryInterfaceType, //
    Sequelize: SequelizeType,
  ) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },
  down: async (
    queryInterface: QueryInterfaceType, //
    Sequelize: SequelizeType,
  ) => {
    await queryInterface.dropTable('users');
  },
};
