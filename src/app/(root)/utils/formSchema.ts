import { z } from 'zod';

import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_PASSWORD,
  SIGNUP_PASSWORD_CONFIRM,
  SIGNUP_ROLE,
} from '../_constants/inputFieldsData';

export const formSchema = z.object({
  [SIGNUP_NAME.id]: z
    .string()
    .min(3, { message: '이름은 두 글자 이상이어야 합니다.' }),
  [SIGNUP_EMAIL.id]: z
    .string()
    .email({ message: '올바른 이메일을 입력해주세요' }),
  [SIGNUP_CONTACT.id]: z
    .string()
    .min(11, { message: '연락처는 11자리여야 합니다.' }),
  [SIGNUP_ROLE.id]: z.string().min(1, { message: '역할을 선택해주세요' }),
  [SIGNUP_PASSWORD.id]: z
    .string()
    .min(6, { message: '비밀번호는 최소 6자리 이상이어야 합니다' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/, {
      message:
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
    }),
  [SIGNUP_PASSWORD_CONFIRM.id]: z
    .string()
    .min(6, {
      message: '비밀번호는 최소 6자리 이상이어야 합니다.',
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/, {
      message:
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
    }),
});
