'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isTitleCased(value) {
          const words = value.split(" ");
          for (const word of words) {
            if (word.charAt(0) !== word.charAt(0).toUpperCase()) {
              throw new Error('Each word must be capitalized!');
            }
          }
        }
      }
    },
    description: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        len: [0, 240]
      }
    },
    territory: DataTypes.STRING,
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
