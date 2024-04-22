export type InputFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  inputType?: string;
};

export const SIGNUP_NAME: InputFieldProps = {
  id: 'username',
  label: '이름',
  placeholder: '홍길동',
  inputType: 'text',
};

export const SIGNUP_EMAIL: InputFieldProps = {
  id: 'email',
  label: '이메일',
  placeholder: 'hello@sparta-devcamp.com',
  inputType: 'text',
};

export const SIGNUP_CONTACT: InputFieldProps = {
  id: 'contact',
  label: '연락처',
  placeholder: '01000000000',
  inputType: 'text',
};

export const SIGNUP_ROLE: InputFieldProps = {
  id: 'role',
  label: '역할',
};

export const SIGNUP_PASSWORD: InputFieldProps = {
  id: 'password',
  label: '비밀번호',
  inputType: 'password',
};

export const SIGNUP_PASSWORD_CONFIRM: InputFieldProps = {
  id: 'passwordConfirm',
  label: '비밀번호 확인',
  inputType: 'password',
};
