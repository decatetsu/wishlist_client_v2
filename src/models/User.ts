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
  id: string;
  email: string;
}

export interface UserLoginFormValues {
  username: string;
  password: string;
}

export interface UserLoginResponse extends PrivateUser {
  accessToken: string;
  refreshToken: string;
}

export interface UserRegisterFormValues {
  full_name: string;
  username: string;
  email: string;
  password: string;
}
