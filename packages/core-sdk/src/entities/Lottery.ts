import { Contract } from '@ethersproject/contracts'

import { LotteryStatus } from '../enums'
import { LotteryHistoryMap } from '../types'
import { DefinitelySendingRule } from '../types/DefinitelySendingRule'
import { RandomSendingRule } from '../types/RandomSendingRule'
import { Erc20Currency } from './Erc20Currency'
export class Lottery {
  public contract?: Contract
  public erc20Currency: Erc20Currency
  public address: string
  public name: string
  public symbol: string
  public cycle: number
  public closeTimestamp: number
  public index: number
  public participantCount: number
  public totalSupply: number
  public firstPrizeCount: number

  // status
  public status: LotteryStatus

  // ticket
  public ticketLastId: number
  public ticketPrice: number

  // rules
  public definitelySendingRules?: DefinitelySendingRule[]
  public randomSendingRules?: RandomSendingRule[]

  // seller
  public sellerLastId: number
  public sellerCommissionRatio?: number

  public LotteryHistories: LotteryHistoryMap = {}

  public constructor(
    erc20Currency: Erc20Currency,
    address: string,
    name: string,
    symbol: string,
    cycle: number,
    closeTimestamp: number,
    index: number,
    participantCount: number,
    totalSupply: number,
    firstPrizeCount: number,
    status: LotteryStatus,
    ticketLastId: number,
    ticketPrice: number,
    definitelySendingRules: DefinitelySendingRule[],
    randomSendingRules: RandomSendingRule[],
    sellerLastId: number,
    sellerCommissionRatio: number
  ) {
    this.erc20Currency = erc20Currency
    this.address = address
    this.name = name
    this.symbol = symbol
    this.cycle = cycle
    this.closeTimestamp = closeTimestamp
    this.index = index
    this.participantCount = participantCount
    this.totalSupply = totalSupply
    this.firstPrizeCount = firstPrizeCount
    this.status = status
    this.ticketLastId = ticketLastId
    this.ticketPrice = ticketPrice
    this.definitelySendingRules = definitelySendingRules
    this.randomSendingRules = randomSendingRules
    this.sellerLastId = sellerLastId
    this.sellerCommissionRatio = sellerCommissionRatio
  }

  public closeTimestampDate(): Date {
    return new Date(this.closeTimestamp * 1000)
  }
}
