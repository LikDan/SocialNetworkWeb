export interface LoginData {
  email: string
  password: string
}

export interface SignUpData {
  user: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }
  profile: {
    nickname: string,
    birthday: string,
    is_private: boolean
  }
}
