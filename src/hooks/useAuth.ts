import { User } from '@/types/types';
import axiosInstance from '@/utils/api';

interface AuthResponse {
  user?: User;
  message?: string;
}

export function useAuth() {
  const registerUser = async (userData: User): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.post<User>('/users', userData);
      return { user: response.data };
    } catch (error) {
      return { message: '회원 가입 실패' };
    }
  };

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axiosInstance.get<User[]>(`/users`);
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user);
      return user ? { user } : { message: '로그인 실패' };
    } catch (error) {
      return { message: '로그인 실패' };
    }
  };
  return {
    registerUser,
    loginUser,
  };
}
