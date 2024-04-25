import { CardDescription, CardHeader, CardTitle } from './ui/card';

interface Props {
  stage: 'signin' | 'signup';
}

export default function Header({ stage }: Props) {
  return (
    <CardHeader>
      <CardTitle>
        {stage === 'signin' ? '로그인' : '계정을 생성합니다'}
      </CardTitle>
      <CardDescription>
        {stage === 'signin'
          ? '계정 정보를 입력해주세요.'
          : '필수 정보를 입력해볼게요.'}
      </CardDescription>
    </CardHeader>
  );
}
