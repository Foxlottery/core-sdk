
import { DefinitelySendingRule } from '../types/DefinitelySendingRule'
import { RandomSendingRule } from '../types/RandomSendingRule'
import { Erc20Currency } from './Erc20Currency'

export class Lottery {
  public erc20Currency: Erc20Currency
  public address: string
  public name: string
  public symbol: string
  public cycle: number
  public closeTimestamp: number
  public index: number
  public isOnlyOwner?: boolean
  public participantCount: number
  public totalSupply: number
  public firstPrizeCount: number
  public ticketPrice: number
  public definitelySendingRules?: DefinitelySendingRule[]
  public randomSendingRules?: RandomSendingRule[]
  public sellerCommissionRatio?: number

  // ticket
  // public ticketLastId
  // public ticketCount

  public constructor(
    erc20Currency: Erc20Currency,
    address: string,
    name: string,
    symbol: string,
    cycle: number,
    closeTimestamp: number,
    index: number,
    isOnlyOwner: boolean,
    participantCount: number,
    totalSupply: number,
    firstPrizeCount: number,
    ticketPrice: number,
    definitelySendingRules: DefinitelySendingRule[],
    randomSendingRules: RandomSendingRule[],
    sellerCommissionRatio: number
  ) {
    this.erc20Currency = erc20Currency
    this.address = address
    this.name = name
    this.symbol = symbol
    this.cycle = cycle
    this.closeTimestamp = closeTimestamp
    this.index = index
    this.isOnlyOwner = isOnlyOwner
    this.participantCount = participantCount
    this.totalSupply = totalSupply
    this.firstPrizeCount = firstPrizeCount
    this.ticketPrice = ticketPrice
    this.definitelySendingRules = definitelySendingRules
    this.randomSendingRules = randomSendingRules
    this.sellerCommissionRatio = sellerCommissionRatio
  }

  public closeTimestampDate(): Date | undefined {
    if (this.closeTimestamp) {
      return new Date(this.closeTimestamp * 1000)
    } else {
      return
    }
  }
}
