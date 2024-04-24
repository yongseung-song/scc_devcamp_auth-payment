'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../../components/ui/form';
import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_PASSWORD,
  SIGNUP_PASSWORD_CONFIRM,
  SIGNUP_ROLE,
} from '../_constants/inputFieldsData';
import { formSchema } from '../utils/formSchema';
import { InputField } from './InputField';

type RegisterInput = z.infer<typeof formSchema>;

export default function SignUpForm() {
  const [step, setStep] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    alert(JSON.stringify(data, null, 4));
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
        {step === 0 ? (
          <div>
            <InputField inputField={SIGNUP_NAME} control={form.control} />
            <InputField inputField={SIGNUP_EMAIL} control={form.control} />
            <InputField inputField={SIGNUP_CONTACT} control={form.control} />
            <InputField inputField={SIGNUP_ROLE} control={form.control} />
          </div>
        ) : (
          <div>
            <InputField inputField={SIGNUP_PASSWORD} control={form.control} />
            <InputField
              inputField={SIGNUP_PASSWORD_CONFIRM}
              control={form.control}
            />
          </div>
        )}
        <Button className={cn({ hidden: step === 0 })} type="submit">
          계정 등록하기
        </Button>
        <Button
          type="button"
          className={cn({ hidden: step === 1 })}
          onClick={onClickNextStep}
        >
          다음 단계로
        </Button>
        <Button
          type="button"
          className={cn({ hidden: step === 0 })}
          onClick={onClickPrevStep}
        >
          이전 단계로
        </Button>
      </form>
    </Form>
  );
}
