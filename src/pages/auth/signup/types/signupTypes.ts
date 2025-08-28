export type SignupFormType = 'email' | 'emailVerification' | 'password' | 'name' | 'studentNumber' | 'phone';

export interface SignupFormConfig {
  title: string;
  placeholder: string;
  inputType: 'email' | 'text' | 'password';
  disabled?: boolean;
  buttonText?: string;
}

export const SIGNUP_FORM_CONFIGS: Record<SignupFormType, SignupFormConfig> = {
  email: {
    title: '이메일',
    placeholder: '건국이메일(konkuk.ac.kr)을 입력하세요',
    inputType: 'email',
    buttonText: '인증',
  },
  emailVerification: {
    title: '이메일 인증',
    placeholder: '인증번호를 입력하세요',
    inputType: 'text',
    disabled: true,
    buttonText: '확인',
  },
  password: {
    title: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    inputType: 'password',
  },
  name: {
    title: '이름',
    placeholder: '이름을 입력하세요',
    inputType: 'text',
  },
  studentNumber: {
    title: '학번',
    placeholder: '학번을 입력하세요',
    inputType: 'text',
  },
  phone: {
    title: '전화번호',
    placeholder: '전화번호를 입력하세요',
    inputType: 'text',
  },
};
