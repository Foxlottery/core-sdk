import invariant from 'tiny-invariant'

import { WNATIVE } from '../../constants/erc20Currencies'
import { Currency } from '../Currency'
import { Erc20Currency } from '../Erc20Currency'
import { NativeCurrency } from '../NativeCurrency'

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'ETH', 'Ether')
  }

  public get wrapped(): Erc20Currency {
    const wrapped = WNATIVE[this.chainId]
    invariant(!!wrapped, 'WRAPPED')
    return wrapped
  }

  private static _etherCache: { [chainId: number]: Ether } = {}

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
