import invariant from 'tiny-invariant'

import { WNATIVE } from '../../constants/erc20Currencies'
import { Currency } from '../Currency'
import { Erc20Currency } from '../Erc20Currency'
import { NativeCurrency } from '../NativeCurrency'

export class Avalanche extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'AVAX', 'Avalanche')
  }

  public get wrapped(): Erc20Currency {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: Avalanche } = {}

  public static onChain(chainId: number): Avalanche {
    return this._cache[chainId] ?? (this._cache[chainId] = new Avalanche(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
