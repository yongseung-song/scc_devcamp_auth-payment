import SignUpForm from '@/components/SignUpForm';
import { ThemeBtnGroup } from '@/components/ThemeBtnGroup';
import { Card, CardContent } from '@/components/ui/card';
import { StepProvider } from '@/provider/stepProvider/StepProvider';
import SignUpHeader from '../../components/SignUpHeader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeBtnGroup />
      <StepProvider>
        <Card className="w-full max-w-md">
          <SignUpHeader />
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </StepProvider>
    </main>
  );
}
