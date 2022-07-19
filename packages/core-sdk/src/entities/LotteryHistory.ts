export class LotteryHistory {
    public closeTimestamp: number
    public participantCount: number
    public totalSupply: number
    public ticketLastId: number
    public sellerLastId: number

    public constructor(
        closeTimestamp: number,
        participantCount: number,
        totalSupply: number,
        ticketLastId: number,
        sellerLastId: number,
    ) {
        this.closeTimestamp = closeTimestamp;
        this.participantCount = participantCount;
        this.totalSupply = totalSupply
        this.ticketLastId = ticketLastId
        this.sellerLastId = sellerLastId
    }
}