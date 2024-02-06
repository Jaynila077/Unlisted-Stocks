"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormStep,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input, PatternInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";  

import useFormStep from "@/hooks/useMultiatepFrom";
import { schema } from "@/validators/schema-form-cr";

type FormData = {
  step: number;
  name: string;
  regNo: string;
  address: string;
  companyDescription: string;
  comapanyType: string;
};

export default function PartnerRegistrationForm() {
  const maxSteps = 2;

  const form = useForm<FormData>({
    mode: "all",
    shouldFocusError: false,
    resolver: zodResolver(schema),
    defaultValues: {
      step: 1,
      name: "",
      regNo: "",
      address: "",
      companyDescription: "",
    },  
  });

  const { step, prevStep, nextStep } = useFormStep({ maxSteps, form });

  function onSubmit(values: FormData) {
    toast({
      title: "Form submitted!!"
    });
    console.log(values);
  }

   return (
        <div className="relative border-4 border-black border-solid rounded-lg h-[700px] w-[800px] m-5 p-8">
          <Card className="w-[600px]">
            <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
             <FormStep
             step={1}
             currentStep={step}
             title="Company Information"
             description={`${step}/${maxSteps} - Tell us about your company`}
             onPrevStepClick={prevStep}
             >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="regNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Registration Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company Registration Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </FormStep>
             <FormStep
              step={2}
              currentStep={step}
              title="Business Overview"
              description={`${step}/${maxSteps} - Tell us about your business`}
              onPrevStepClick={prevStep}
             >
                <FormField
                  control={form.control}
                  name="companyDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </FormStep>
             <Button
                key={step === maxSteps ? "submit-btn" : "next-step-btn"}
                type={step === maxSteps ? "submit" : "button"}
                className="w-full"
                variant={step === maxSteps ? "default" : "secondary"}
                disabled={!form.formState.isValid}
                onClick={step === maxSteps ? undefined : nextStep}
              >
                {step === maxSteps ? "Submit" : "Next step"}
              </Button>
            </form>
          </Form>
            </CardContent>
          </Card>
        </div>
    )
  }