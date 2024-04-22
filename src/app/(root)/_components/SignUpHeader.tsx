import {
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

export default function SignUpHeader() {
  return (
    <CardHeader>
      <CardTitle>계정을 생성합니다</CardTitle>
      <CardDescription>필수 정보를 입력해볼게요.</CardDescription>
    </CardHeader>
  );
}
