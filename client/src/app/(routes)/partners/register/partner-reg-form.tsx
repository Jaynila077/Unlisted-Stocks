"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  date: string;
  companyType: [];
  companySize: [];
  companyDescription: string;
  companyLogo: string;
  industrySector: [];
  targetMarket: string;
  customerBase: string;
};

export default function PartnerRegistrationFrom() {
  const maxSteps = 3;

  const form = useForm<FormData>({
    mode: "all",
    shouldFocusError: false,
    resolver: zodResolver(schema),
    defaultValues: {
      step: 1,
      name: "",
      regNo: "",
      address: "",
      date: "",
      companyType: [],
      companySize: [],
      companyDescription: "",
      companyLogo: "",
      industrySector: [],
      targetMarket: "",
      customerBase: "",
    },
  });

  const { step, prevStep, nextStep } = useFormStep({ maxSteps, form });

  function onSubmit(values: FormData) {
    toast({
      title: "Form submitted!!",
    });
    console.log(values);
  }

   return (
        <div className="relative border-4 border-black border-solid rounded-lg h-[700px] w-[800px] m-5 p-8">
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
              title="Company Information"
              description={`${step}/${maxSteps} - Tell us about your company`}
              onPrevStepClick={prevStep}
             >
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Date</FormLabel>
                      <FormControl>
                        <PatternInput
                          placeholder="Company Date"
                          {...field}
                          format="##/##/####"
                          mask="_"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Type</FormLabel>
                      <FormControl>
                        <Select 
                        onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Company Type" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="1">Company Type 1</SelectItem>
                            <SelectItem value="2">Company Type 2</SelectItem>
                            <SelectItem value="3">Company Type 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Size</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Company Size" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="1">Company Size 1</SelectItem>
                            <SelectItem value="2">Company Size 2</SelectItem>
                            <SelectItem value="3">Company Size 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
        </div>
    )
  }