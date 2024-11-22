export type UserDTO = {
  name: string;
  surname: string;
  email: string;
  username: string;
};

export type ResponseUser = {
  code: string;
  data: UserDTO;
};

export type UserData = {
  fullName: string;
  email: string;
  message: string;
};
