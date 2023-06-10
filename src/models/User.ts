export interface UserFromSearch {
  username: string;
  full_name: string;
  level: number;
  avatar?: ImageBitmap;
}

export interface PublicUser extends UserFromSearch {
  xp: number;
  collections?: any[];
}

export interface PrivateUser extends PublicUser {
  email: string;
}

export interface UserLoginFormValues {
  username: string;
  password: string;
}

export interface UserLoginResponse extends PrivateUser {
  access_token: string;
}

export interface UserRegisterFormValues {
  full_name: string;
  username: string;
  email: string;
  password: string;
}
