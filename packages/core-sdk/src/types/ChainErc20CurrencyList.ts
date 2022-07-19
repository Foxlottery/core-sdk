import { Erc20Currency } from '../entities/Erc20Currency'

export type ChainErc20CurrencyList = {
  readonly [chainId: number]: Erc20Currency[]
}
