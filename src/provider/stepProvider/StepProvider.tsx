'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface StepContextType {
  step: number;
  setStep: (step: number) => void;
}

const StepContext = createContext<StepContextType>({
  step: 0,
  setStep: () => {},
});

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};

export const StepProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0);

  const value = useMemo(() => ({ step, setStep }), [step]);
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
