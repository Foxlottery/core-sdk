import { Erc20Currency } from './Erc20Currency'
import { NativeCurrency } from './NativeCurrency'

export type Currency = NativeCurrency | Erc20Currency
