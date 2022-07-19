import invariant from 'tiny-invariant'

import { WNATIVE } from '../../constants/erc20Currencies'
import { Currency } from '../Currency'
import { Erc20Currency } from '../Erc20Currency'
import { NativeCurrency } from '../NativeCurrency'

export class Binance extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'BNB', 'Binance Coin')
  }

  public get wrapped(): Erc20Currency {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: Binance } = {}

  public static onChain(chainId: number): Binance {
    return this._cache[chainId] ?? (this._cache[chainId] = new Binance(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
