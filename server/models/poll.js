'use strict';
import seq from "sequelize";
const {
  Model
} = seq;
module.exports = (sequelize, DataTypes) => {
  class Poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Poll.init({
    question: DataTypes.STRING,
    sugest1: DataTypes.STRING,
    sugest2: DataTypes.STRING,
    sugest3: DataTypes.STRING,
    sugest4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Poll',
  });
  return Poll;
};