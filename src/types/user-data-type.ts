export type AuthorizedUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

//для тестов
export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
//для тестов
export type UserData = {
  id: number;
  email: string;
  token: string;
};
