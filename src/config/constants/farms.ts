import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RBT-BRRL LP',
    lpAddresses: {
      97: '',
      56: '0x77a6024Ce12C94A326Ba87eA66E7f2dfDFC8bc1e',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34Bf391C3de0a6878A36D06223b2BFd404',
    },
    quoteTokenSymbol: QuoteToken.BRRL,
    quoteTokenAdresses: contracts.brrl,
  },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BRRL',
    lpAddresses: {
      97: '',
      56: '0x1b30e60130b364DDfC0267525d7D8039d795FB33',     // BRRL-BUSD LP
    },
    tokenSymbol: 'BRRL',
    tokenAddresses: {
      97: '',
      56: '0xcbe73dd7E8FC74011136b837a59205801c45e6A1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'RBT',
    lpAddresses: {
      97: '',
      56: '0x3F8F14Dd4Ef2a2DBD3C1B87f96EdD028663c76b1',
    },
    tokenSymbol: 'RBT',
    tokenAddresses: {
      97: '',
      56: '0x7595bb34bf391c3de0a6878a36d06223b2bfd404',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'TSB-BUSD',
    lpAddresses: {
      97: '',
      56: '0xe336b16B7d26B94F3E86Fe124Be5207162C22d90', // TSB-BUSD LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'TSB-BNB',
    lpAddresses: {
      97: '',
      56: '0x14f18e33c9e4551578cc4ce5243184288f13fe67', // TSB-BNB LP
    },
    tokenSymbol: 'TSB',
    tokenAddresses: {
      97: '',
      56: '0xA37F71f092F891757d23Dd350f57C78E8469c026',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
