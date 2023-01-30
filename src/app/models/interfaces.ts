export interface IUser {
  id: number;
  name: string;
  firstname: string;
  genre: string;
  age: number;
  weight: number;
  idmom?: number;
  iddad?: number;
  death?: boolean;
}

export interface IUserList {
  userList: IUser[];
}
