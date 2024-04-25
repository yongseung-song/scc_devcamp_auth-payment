'use client';

import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { useStep } from '@/provider/stepProvider/StepProvider';
import { RegisterInput } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_PASSWORD,
  SIGNUP_PASSWORD_CONFIRM,
  SIGNUP_ROLE,
} from '../constants/inputFieldsData';
import { signupSchema } from '../utils/formSchema';
import FormBtnGroup from './FormBtnGroup';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { Form } from './ui/form';

export default function SignUpForm() {
  const { step, setStep } = useStep();
  const { registerUser } = useAuth();

  useEffect(() => {
    step === 0
      ? form.setFocus(SIGNUP_NAME.id)
      : form.setFocus(SIGNUP_PASSWORD.id);
  }, [step]);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      [SIGNUP_NAME.id]: '',
      [SIGNUP_EMAIL.id]: '',
      [SIGNUP_CONTACT.id]: '',
      [SIGNUP_ROLE.id]: '',
      [SIGNUP_PASSWORD.id]: '',
      [SIGNUP_PASSWORD_CONFIRM.id]: '',
    },
  });

  const onSubmit = (data: RegisterInput) => {
    const { password, passwordConfirm } = data;
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    const userData = {
      name: data[SIGNUP_NAME.id],
      email: data[SIGNUP_EMAIL.id],
      contact: data[SIGNUP_CONTACT.id],
      role: data[SIGNUP_ROLE.id],
      password: data[SIGNUP_PASSWORD.id],
    };
    registerUser(userData);
    form.reset();
    setStep(0);
  };

  const onClickNextStep = () => {
    form.trigger([
      SIGNUP_NAME.id,
      SIGNUP_EMAIL.id,
      SIGNUP_CONTACT.id,
      SIGNUP_ROLE.id,
    ]);
    const nameState = form.getFieldState(SIGNUP_NAME.id);
    const emailState = form.getFieldState(SIGNUP_EMAIL.id);
    const contactState = form.getFieldState(SIGNUP_CONTACT.id);
    const roleState = form.getFieldState(SIGNUP_ROLE.id);

    if (!nameState.isDirty || nameState.invalid) return;
    if (!emailState.isDirty || emailState.invalid) return;
    if (!contactState.isDirty || contactState.invalid) return;
    if (!roleState.isDirty || roleState.invalid) return;

    setStep(1);
  };

  const onClickPrevStep = () => {
    setStep(0);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn({ hidden: step === 1 })}>
          <FormInput inputField={SIGNUP_NAME} control={form.control} />
          <FormInput inputField={SIGNUP_EMAIL} control={form.control} />
          <FormInput inputField={SIGNUP_CONTACT} control={form.control} />
          <FormSelect inputField={SIGNUP_ROLE} control={form.control} />
        </div>
        <div className={cn({ hidden: step === 0 })}>
          <FormInput inputField={SIGNUP_PASSWORD} control={form.control} />
          <FormInput
            inputField={SIGNUP_PASSWORD_CONFIRM}
            control={form.control}
          />
        </div>
        <FormBtnGroup
          onClickNextStep={onClickNextStep}
          onClickPrevStep={onClickPrevStep}
        />
      </form>
    </Form>
  );
}
