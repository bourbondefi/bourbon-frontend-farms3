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
]

export default farms
