import { LotteryStatus } from '../enums'
import { LotteryStatusIndex } from '../enums'

export const LOTTERY_STATUS: { [lotteryStatusIndex: number]: LotteryStatus } = {
  [LotteryStatusIndex.ACCEPTING]: LotteryStatus.ACCEPTING,
  [LotteryStatusIndex.RANDOM_VALUE_GETTING]: LotteryStatus.RANDOM_VALUE_GETTING,
  [LotteryStatusIndex.TOKEN_SENDING]: LotteryStatus.TOKEN_SENDING,
  [LotteryStatusIndex.DONE]: LotteryStatus.DONE,
  [LotteryStatusIndex.RULE_SETTING]: LotteryStatus.RULE_SETTING
}
