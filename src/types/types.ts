export interface User {
  name: string;
  email: string;
  contact: string;
  role: 'admin' | 'user';
  password: string;
}
