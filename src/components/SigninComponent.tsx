import SignInForm from './SignInForm';
import Header from './SignUpHeader';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Props {
  onSignup: () => void;
}

export default function SigninComponent({ onSignup }: Props) {
  return (
    <Card className="w-full max-w-md">
      <Header stage={'signin'} />
      <CardContent>
        <SignInForm />
        <div className="w-full flex justify-end">
          <Button variant={'link'} onClick={onSignup}>
            아직 계정이 없으신가요?
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
