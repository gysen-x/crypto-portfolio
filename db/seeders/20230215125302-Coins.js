/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const coinArr = ['Bitcoin', 'Ethereum', 'Tether', 'BNB', 'USD Coin', 'XRP', 'Binance USD', 'Cardano', 'Dogecoin', 'Polygon', 'OKB', 'Solana', 'Lido Staked Ether', 'Shiba Inu', 'Polkadot', 'Litecoin', 'TRON', 'Avalanche', 'Dai', 'Uniswap', 'Wrapped Bitcoin', 'Cosmos Hub', 'Toncoin', 'Chainlink', 'LEO Token', 'Ethereum Classic', 'Monero', 'Bitcoin Cash', 'Aptos', 'Lido DAO', 'Hedera', 'Stellar', 'Quant', 'Filecoin', 'NEAR Protocol', 'ApeCoin', 'Cronos', 'Algorand', 'VeChain', 'Internet Computer', 'The Graph', 'Fantom', 'The Sandbox', 'Decentraland', 'Aave', 'Axie Infinity', 'EOS', 'MultiversX', 'Flow', 'Theta Network'];
    const resArr = [];
    class CoinTable {
      constructor(name) {
        this.name = name;
        this.createdAt = new Date();
        this.updatedAt = new Date();
      }
    }
    coinArr.forEach((elem) => {
      resArr.push(new CoinTable(elem));
    });
    await queryInterface.bulkInsert('Coins', resArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Coins', null, {});
  },
};
