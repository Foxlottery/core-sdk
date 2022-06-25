import { Erc20CurrencyMap } from '../types'
import { USDC_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Erc20Currency } from '../entities/Erc20Currency'

export const USDC: Erc20CurrencyMap = {
  [ChainId.ETHEREUM]: new Erc20Currency(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC]: new Erc20Currency(ChainId.MATIC, USDC_ADDRESS[ChainId.MATIC], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC]: new Erc20Currency(ChainId.BSC, USDC_ADDRESS[ChainId.BSC], 18, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE]: new Erc20Currency(ChainId.AVALANCHE, USDC_ADDRESS[ChainId.AVALANCHE], 6, 'USDC', 'USD Coin'),
  [ChainId.RINKEBY]: new Erc20Currency(ChainId.RINKEBY, USDC_ADDRESS[ChainId.RINKEBY], 6, 'USDC', 'USD Coin'),
  [ChainId.GÖRLI]: new Erc20Currency(ChainId.GÖRLI, USDC_ADDRESS[ChainId.GÖRLI], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC_TESTNET]:  new Erc20Currency(ChainId.MATIC_TESTNET, USDC_ADDRESS[ChainId.MATIC_TESTNET], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC_TESTNET]: new Erc20Currency(ChainId.BSC_TESTNET, USDC_ADDRESS[ChainId.BSC_TESTNET], 6, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE_TESTNET]: new Erc20Currency(ChainId.AVALANCHE_TESTNET, USDC_ADDRESS[ChainId.AVALANCHE_TESTNET], 6, 'USDC', 'USD Coin'),
}

export const USD: Erc20CurrencyMap = {
  ...USDC,
}

export const WNATIVE: Erc20CurrencyMap = {
  [ChainId.ETHEREUM]: new Erc20Currency(ChainId.ETHEREUM, WNATIVE_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.RINKEBY]: new Erc20Currency(ChainId.RINKEBY, WNATIVE_ADDRESS[ChainId.RINKEBY], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.GÖRLI]: new Erc20Currency(ChainId.GÖRLI, WNATIVE_ADDRESS[ChainId.GÖRLI], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATIC]: new Erc20Currency(ChainId.MATIC, WNATIVE_ADDRESS[ChainId.MATIC], 18, 'WMATIC', 'Wrapped Matic'),
  [ChainId.MATIC_TESTNET]: new Erc20Currency(
    ChainId.MATIC_TESTNET,
    WNATIVE_ADDRESS[ChainId.MATIC_TESTNET],
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.BSC]: new Erc20Currency(ChainId.BSC, WNATIVE_ADDRESS[ChainId.BSC], 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Erc20Currency(
    ChainId.BSC_TESTNET,
    WNATIVE_ADDRESS[ChainId.BSC_TESTNET],
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.AVALANCHE]: new Erc20Currency(ChainId.AVALANCHE, WNATIVE_ADDRESS[ChainId.AVALANCHE], 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.AVALANCHE_TESTNET]: new Erc20Currency(
    ChainId.AVALANCHE_TESTNET,
    WNATIVE_ADDRESS[ChainId.AVALANCHE_TESTNET],
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
}

