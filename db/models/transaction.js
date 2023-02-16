const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Coin, { foreignKey: 'coin_id' });
    }
  }
  Transaction.init({
    amount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    spent: DataTypes.FLOAT,
    date: DataTypes.DATEONLY,
    coin_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
