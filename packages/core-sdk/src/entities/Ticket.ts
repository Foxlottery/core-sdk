import { Lottery } from './Lottery'

export class Ticket {
  public readonly address: string
  public readonly lottery: Lottery
  public readonly isActive: boolean
  public readonly numbers: number
  public readonly tokenAmount: number
  public readonly buyDate: number // 購入した時間ではなく、入手時間にする必要がある, getDateのようにする

  public constructor(address: string, lottery: Lottery, isActive: boolean, numbers: number, tokenAmount: number, buyDate: number) {
    this.address = address
    this.lottery = lottery
    this.isActive = isActive
    this.numbers = numbers
    this.tokenAmount = tokenAmount
    this.buyDate = buyDate
  }
}
