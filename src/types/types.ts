import { signupSchema } from '@/utils/formSchema';
import { z } from 'zod';

export interface User {
  name: string;
  email: string;
  contact: string;
  role: string;
  password: string;
}

export type RegisterInput = z.infer<typeof signupSchema>;
