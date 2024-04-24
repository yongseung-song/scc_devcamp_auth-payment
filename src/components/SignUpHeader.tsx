import ProgressClient from './ProgressClient';
import { CardDescription, CardHeader, CardTitle } from './ui/card';

export default function SignUpHeader() {
  return (
    <CardHeader>
      <ProgressClient />
      <CardTitle>계정을 생성합니다</CardTitle>
      <CardDescription>필수 정보를 입력해볼게요.</CardDescription>
    </CardHeader>
  );
}
