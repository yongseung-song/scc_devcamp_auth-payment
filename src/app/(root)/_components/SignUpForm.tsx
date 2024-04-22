'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../../components/ui/form';
import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_ROLE,
} from '../_constants/inputFieldsData';
import { formSchema } from '../utils/formSchema';
import { InputField } from './InputField';

export default function SignUpForm() {
  const [step, setStep] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [SIGNUP_NAME.id]: '',
      [SIGNUP_EMAIL.id]: '',
      [SIGNUP_CONTACT.id]: '',
      [SIGNUP_ROLE.id]: '',
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onClickNextStep = () => {
    const values = form.getValues();
    const { errors } = form.formState;
    if (errors.password || errors.passwordConfirm) {
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <InputField inputField={SIGNUP_NAME} />
          <InputField inputField={SIGNUP_EMAIL} />
          <InputField inputField={SIGNUP_CONTACT} />
          <InputField inputField={SIGNUP_ROLE} />
        </div>
        <Button className="w-32 m-12" onClick={onClickNextStep}>
          제출
        </Button>
      </form>
    </Form>
  );
}
