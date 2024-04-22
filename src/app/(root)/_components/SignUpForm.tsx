'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../components/ui/button';
import { Form, FormField } from '../../../components/ui/form';
import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_ROLE,
} from '../_constants/inputFieldsData';
import { formSchema } from '../utils/formSchema';
import { InputField } from './InputField';

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [SIGNUP_NAME.id]: '',
      [SIGNUP_EMAIL.id]: '',
      [SIGNUP_CONTACT.id]: '',
      [SIGNUP_ROLE.id]: '',
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <div>
              <InputField inputField={SIGNUP_NAME} />
              <InputField inputField={SIGNUP_EMAIL} />
              <InputField inputField={SIGNUP_CONTACT} />
              <InputField inputField={SIGNUP_ROLE} />
            </div>
          )}
        />
        <Button className="w-32">다음 단계로</Button>
      </form>
    </Form>
  );
}

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
