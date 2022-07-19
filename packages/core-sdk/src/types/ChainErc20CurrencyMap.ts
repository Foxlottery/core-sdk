import { Erc20Currency } from '../entities'
import { ChainId } from '../enums'

export type ChainErc20CurrencyMap = {
  readonly [chainId in ChainId]?: Erc20Currency
}
