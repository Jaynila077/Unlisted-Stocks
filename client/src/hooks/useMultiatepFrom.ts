import { FieldValues, UseFormWatch } from 'react-hook-form';

interface FormStepProps {
  maxSteps: number;
  form: any; 
}

interface FormStepResult {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}

const useFormStep = ({ maxSteps, form }: FormStepProps): FormStepResult => {
  const watch: UseFormWatch<FieldValues> = form.watch;

  const step = watch("step") || 1; 

  const prevStep = () => {
    if (step > 1) {
      form.setValue("step", step - 1, { shouldValidate: true });
    }
  };

  const nextStep = () => {
    if (step < maxSteps) {
      form.setValue("step", step + 1, { shouldValidate: true });
    }
  };

  return { step, prevStep, nextStep };
};

export default useFormStep;
