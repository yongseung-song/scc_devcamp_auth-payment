'use client';

import { cn } from '@/lib/utils';
import { useStep } from '@/provider/stepProvider/StepProvider';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  onClickPrevStep: () => void;
  onClickNextStep: () => void;
}

export default function FormBtnGroup({
  onClickPrevStep,
  onClickNextStep,
}: Props) {
  const { step, setStep } = useStep();
  return (
    <div className="flex gap-4 mt-6">
      <Button className={cn({ hidden: step === 0 })} type="submit">
        계정 등록하기
      </Button>
      <Button
        type="button"
        className={cn({ hidden: step === 1 })}
        onClick={onClickNextStep}
      >
        다음 단계로
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        className={cn({ hidden: step === 0 })}
        onClick={onClickPrevStep}
      >
        이전 단계로
      </Button>
    </div>
  );
}
