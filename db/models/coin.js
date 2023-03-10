const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Transaction, { foreignKey: 'coin_id' });
    }
  }
  Coin.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Coin',
  });
  return Coin;
};
