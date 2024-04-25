import { SIGNUP_EMAIL, SIGNUP_PASSWORD } from '@/constants/inputFieldsData';
import { useAuth } from '@/hooks/useAuth';
import { RegisterInput } from '@/types/types';
import { loginSchema } from '@/utils/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormInput } from './FormInput';
import { Button } from './ui/button';
import { Form } from './ui/form';

export default function SignInForm() {
  const { loginUser } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      [SIGNUP_EMAIL.id]: '',
      [SIGNUP_PASSWORD.id]: '',
    },
  });

  const onSubmit = (data: RegisterInput) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    loginUser({ ...loginData });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormInput inputField={SIGNUP_EMAIL} control={form.control} />
          <FormInput inputField={SIGNUP_PASSWORD} control={form.control} />
        </div>
        <Button type="submit">로그인</Button>
      </form>
    </Form>
  );
}
