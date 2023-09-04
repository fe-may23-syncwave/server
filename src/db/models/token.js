'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      Token.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Token.init(
    {
      refreshToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Token',
    },
  );
  return Token;
};
