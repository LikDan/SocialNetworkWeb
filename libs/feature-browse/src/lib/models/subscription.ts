export interface Subscription {
  id: string,
  from_profile_id: string,
  to_profile_id: string,
  created_at: string,
  updated_at: string,
  status: SubscriptionStatus
}

type SubscriptionStatus = ("APPROVED" | "PENDING" | "DECLINED")
