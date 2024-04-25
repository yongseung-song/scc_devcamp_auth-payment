import { z } from 'zod';

import {
  SIGNUP_CONTACT,
  SIGNUP_EMAIL,
  SIGNUP_NAME,
  SIGNUP_PASSWORD,
  SIGNUP_PASSWORD_CONFIRM,
  SIGNUP_ROLE,
} from '../constants/inputFieldsData';

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const phoneRegex = /^010\d{8}$/;

export const signupSchema = z.object({
  [SIGNUP_NAME.id]: z
    .string()
    .min(2, { message: '이름은 2글자 이상이어야 합니다.' })
    .max(100, { message: '이름은 100글자 이하이어야 합니다.' }),
  [SIGNUP_EMAIL.id]: z
    .string()
    .email({ message: '올바른 이메일을 입력해주세요' }),
  [SIGNUP_CONTACT.id]: z
    .string()
    .min(11, '연락처는 11자리여야 합니다.')
    .max(11, '연락처는 11자리여야 합니다.')
    .refine(
      (value) => phoneRegex.test(value),
      '010으로 시작하는 11자리 숫자를 입력해주세요'
    ),
  [SIGNUP_ROLE.id]: z.string().min(1, {
    message: '관리자, 또는 일반 유저 중에서 한 가지를 선택해야 합니다',
  }),
  [SIGNUP_PASSWORD.id]: z
    .string()
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
  [SIGNUP_PASSWORD_CONFIRM.id]: z
    .string()
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
});

export const loginSchema = z.object({
  [SIGNUP_EMAIL.id]: z
    .string()
    .email({ message: '올바른 이메일을 입력해주세요' }),
  [SIGNUP_PASSWORD.id]: z
    .string()
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
});
