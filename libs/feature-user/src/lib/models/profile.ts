export interface Profile {
  id: number,
  nickname: string,
  picture_path: string, //TODO moment.js
  birthday: string
  is_private: boolean
  created_at: string //TODO moment.js
  updated_at: string //TODO moment.js
}
