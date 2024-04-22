import SignUpHeader from '@/components/ui/SignUpHeader';
import { Button } from '@/components/ui/shadcn/button';
import { Card } from '@/components/ui/shadcn/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-md">
        <SignUpHeader />
        <Button className="w-32">다음 단계로</Button>
      </Card>
    </main>
  );
}
