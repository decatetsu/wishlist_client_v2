import type {
  PrivateUser,
  PublicUser,
  UserFromSearch,
  UserLoginFormValues,
  UserLoginResponse,
  UserRegisterFormValues
} from '@/models/User';
import axios, { type AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: {}) => axios.patch<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Users = {
  list: () => requests.get<UserFromSearch[]>('/users'),
  one: (username: string) => requests.get<PublicUser>(`/users/${username}`),
  current: () => requests.get<PrivateUser>('/profile'),
  login: (user: UserLoginFormValues) => requests.post<UserLoginResponse>('/auth/login', user),
  register: (user: UserRegisterFormValues) => requests.post<UserLoginResponse>('/auth/registration', user),
};

const Availability = {
  checkEmail: (email: string) => requests.get<boolean>(`/users/availability/checkEmail/${email}`),
  checkUsername: async (username: string) => requests.get<boolean>(`/users/availability/checkUsername/${username}`),
};

const agent = {
  Users, Availability,
};

export default agent;