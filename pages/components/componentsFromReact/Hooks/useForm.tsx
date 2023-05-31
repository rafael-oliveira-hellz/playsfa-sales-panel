import React, { FormEvent, useState } from 'react';

export const useForm = (steps: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const changeStep = (i?: number, e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (i === undefined || i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  };
  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep + 1 === steps.length ? true : false
  };
};
