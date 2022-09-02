// https://eth-rinkeby.alchemyapi.io/v2/ZdPBoQtDmprZKIH7yCh14GA1SEX6NfLT

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JfDmjcU--PcA_yvkYwgroMvjTFPEJJCV',
      accounts: [ '06b91f40bafe25bb97844ca576675d475ad4c197a4acab0f00a7dabf8326d480' ]
    }
  }
}