export interface IUser {
  id: number;
  name: string;
  firstname: string;
  genre: string;
  age: number;
  weight: number;
}

export interface IUserList {
  userList: IUser[];
}
