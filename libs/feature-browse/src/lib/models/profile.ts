import {Subscription} from "./subscription"

export interface ShortProfile {
  id: string,
  nickname: string,
  picture_path: string,
  is_private: boolean
}

export interface BrowseShortProfile {
  profile: ShortProfile,
  subscription: Subscription
}
