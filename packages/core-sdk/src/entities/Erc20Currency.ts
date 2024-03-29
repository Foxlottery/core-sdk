import { Contract } from '@ethersproject/contracts'
import invariant from 'tiny-invariant'

import { validateAndParseAddress } from '../functions/validateAndParseAddress'
import { AbstractCurrency } from './AbstractCurrency'
import { Currency } from './Currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Erc20Currency extends AbstractCurrency {
  public contract?: Contract
  public readonly chainId: number
  public readonly address: string

  public readonly isNative: false = false
  public readonly isErc20: true = true

  public constructor(chainId: number, address: string, decimals: number, symbol?: string, name?: string) {
    super(chainId, decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Currency): boolean {
    return other.isErc20 && this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Erc20Currency): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  /**
   * Return this token, which does not need to be wrapped
   */
  public get wrapped(): Erc20Currency {
    return this
  }

  /**
   * Return logo
   */
  // public get logo(): string | null {
  //   return this.chainId in CHAIN_KEY ? `https://raw.githubusercontent.com/sushiswap/logos/main/network/${CHAIN_KEY[this.chainId]}/.jpg` : undefined
  // }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Erc20Currency && currencyB instanceof Erc20Currency) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Erc20Currency) {
    return false
  } else if (currencyB instanceof Erc20Currency) {
    return false
  } else {
    return currencyA === currencyB
  }
}
