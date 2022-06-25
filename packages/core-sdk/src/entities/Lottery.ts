import { Token } from './Token';

export class Lottery {
    public readonly currency: Token
    public readonly contractAddress: string
    public readonly name: string
    public readonly symbol: string
    public readonly cycle: number
    public readonly closeTimestamp: number
    public readonly eventCount: number
    public readonly participantCount: number
    public readonly totalSupply: number
    public readonly firstPrizeCount: number

    public constructor(currency: Token, contractAddress: string, name: string, symbol: string, cycle: number, closeTimestamp: number,
        eventCount: number, participantCount: number, totalSupply: number, firstPrizeCount: number) {
        this.currency = currency
        this.contractAddress = contractAddress
        this.name = name
        this.symbol = symbol
        this.cycle = cycle
        this.closeTimestamp = closeTimestamp
        this.eventCount = eventCount
        this.participantCount = participantCount
        this.totalSupply = totalSupply
        this.firstPrizeCount = firstPrizeCount
    }

    public closeTimestampDate(): Date {
      return new Date(this.closeTimestamp * 1000);
    }
}