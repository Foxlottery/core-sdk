import { TokenTimedRandomSendContract } from './TokenTimedRandomSendContract'

export class Ticket {
  public readonly tokenTimedRandomSendContract: TokenTimedRandomSendContract
  public readonly isActive: boolean
  public readonly numbers: number
  public readonly tokenAmount: number

  public constructor(tokenTimedRandomSendContract: TokenTimedRandomSendContract, isActive: boolean, numbers: number, tokenAmount: number) {
    this.tokenTimedRandomSendContract = tokenTimedRandomSendContract
    this.isActive = isActive
    this.numbers = numbers
    this.tokenAmount = tokenAmount
  }
}
