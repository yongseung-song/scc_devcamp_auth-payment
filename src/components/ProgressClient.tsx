'use client';
import { useStep } from '@/provider/stepProvider/StepProvider';
import { Progress } from './ui/progress';

export default function ProgressClient() {
  const { step } = useStep();
  return (
    <div>
      <Progress value={(step + 1) * 50} />
      <span className="text-sm text-right block mt-1 mr-1">
        {step + 1 + ' / 2'}
      </span>
    </div>
  );
}
