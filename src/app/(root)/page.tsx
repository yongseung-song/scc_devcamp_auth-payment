import SignUpForm from '@/app/(root)/_components/SignUpForm';
import { Card, CardContent } from '@/components/ui/card';
import SignUpHeader from './_components/SignUpHeader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-md">
        <SignUpHeader />
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </main>
  );
}
