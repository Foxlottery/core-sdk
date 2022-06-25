import { ChainId } from '../enums'
import { ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
  [ChainId.RINKEBY]: ChainKey.RINKEBY,
  [ChainId.GÖRLI]: ChainKey.GÖRLI,
  [ChainId.MATIC]: ChainKey.MATIC,
  [ChainId.MATIC_TESTNET]: ChainKey.MATIC_TESTNET,
  [ChainId.BSC]: ChainKey.BSC,
  [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
  [ChainId.AVALANCHE]: ChainKey.AVALANCHE,
  [ChainId.AVALANCHE_TESTNET]: ChainKey.AVALANCHE_TESTNET,
}
