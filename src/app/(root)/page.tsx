'use client';

import SigninComponent from '@/components/SigninComponent';
import SignUpComponent from '@/components/SignupComponent';
import { ThemeBtnGroup } from '@/components/ThemeBtnGroup';
import { useState } from 'react';

export default function Home() {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeBtnGroup />
      {isSignup ? (
        <SignUpComponent onSignin={() => setIsSignup(false)} />
      ) : (
        <SigninComponent onSignup={() => setIsSignup(true)} />
      )}
    </main>
  );
}
