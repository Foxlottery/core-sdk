import { ChainId } from '../enums'
import { Erc20Currency } from '../entities'

export type ChainErc20CurrencyMap = {
  readonly [chainId in ChainId]?: Erc20Currency
}
