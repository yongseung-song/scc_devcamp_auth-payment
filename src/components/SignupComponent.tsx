import { StepProvider } from '@/provider/stepProvider/StepProvider';
import Header from './AuthHeader';
import ProgressClient from './ProgressClient';
import SignUpForm from './SignUpForm';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Props {
  onSignin: () => void;
}

export default function SignUpComponent({ onSignin }: Props) {
  return (
    <StepProvider>
      <Card className="w-full max-w-md">
        <Header stage={'signup'} />
        <CardContent>
          <ProgressClient />
          <SignUpForm />
          <div className="w-full flex justify-end">
            <Button variant={'link'} onClick={onSignin}>
              이미 계정이 있으신가요?
            </Button>
          </div>
        </CardContent>
      </Card>
    </StepProvider>
  );
}
