import {ShortProfile} from "./profile"

export interface Subscription {
  id: string,
  from_profile_id: string,
  to_profile_id: string,
  created_at: string,
  updated_at: string,
  from_profile?: ShortProfile,
  to_profile?: ShortProfile
  status: SubscriptionStatus
}

export type SubscriptionStatus = ("APPROVED" | "PENDING" | "DECLINED")
