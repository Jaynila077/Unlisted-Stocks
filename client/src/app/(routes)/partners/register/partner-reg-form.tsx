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
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  step: number;
  name: string;
  regNo: string;
  doi: string;
  address: string;
  companyDescription: string;
  comapanyType: string;
  industrySector: string;
  targetMarket: string;
  recentFinancialStatements: File | null;
  auditedReportsAvailable: boolean; 
  auditedReport: File | null;
  revenuePreviousYear: string;
  revenueCurrentYear: string; 
  revenueGrowthTrend: string; 
  yearsInOperation: number;   
  operationalMilestones: string;
  productsServicesOffered: string; 
  ownershipStructure: string;
  managementPersonnel: ManagementPersonnel[];
  keyManagementPersonnel: string;
  boardComposition: string;
  fundingOverview: string;
  investor1Stake: string;
  investor2Stake: string;
  legalStatus: string; 
  regulatoryCompliance: string; 
  pendingLegalIssues: string;
  intellectualPropertyDetails: {
    patents: string[]; 
    trademarks: string[]; 
    copyrights: string[]; 
  };
  licensingAgreements: string;
  marketPresenceOverview: string;
  customerTestimonials: string;
  marketShareAndLandscape: string;
  growthStrategy: string; 
  expansionStrategies: string;
  investmentProposalDocument: File | null;
  valuationDetailsDocument: File | null;
};

type ManagementPersonnel = {
  name: string;
  background: string;
  role: string;
};

export default function PartnerRegistrationForm() {
  const maxSteps = 11;

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
             description={`${step}/${maxSteps} - Company Information`}
             onPrevStepClick={prevStep}
             >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Legal Name of the Company" {...field} />
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
                  name="doi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Incorporation</FormLabel>
                      <FormControl>
                        <Input placeholder="DD-MM-YYYY" {...field} />
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
                      <FormLabel>Registered Office Address</FormLabel>
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
                      <FormLabel>Description of the Company's Business Model</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="ABC Enterprises operates as an e-commerce platform connecting local artisans  
                          with a global customer base. Our business model focuses on empowering independent  
                          creators and providing a seamless online marketplace."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industrySector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry Sector</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Retail"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetMarket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Market</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Global"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </FormStep>
             <FormStep
             step={3}
             currentStep={step}
             title="Financial Information"
             description={`${step}/${maxSteps} - Financial Information`}
             onPrevStepClick={prevStep}
           >
             {/* <FormField
               control={form.control}
               name="recentFinancialStatements"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Recent Financial Statements</FormLabel>
                   <FormControl>
                     <PatternInput
                       type="file"
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             /> */}
             {/* <FormField
               control={form.control}
               name="auditedReportsAvailable"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Audited Financial Reports Available</FormLabel>
                   <FormControl>
                     <Select {...field}>
                       <SelectTrigger />
                       <SelectContent>
                         <SelectItem value="true">Yes</SelectItem>
                         <SelectItem value="false">No</SelectItem>
                       </SelectContent>
                       <SelectValue />
                     </Select>
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             /> */}
             {/* {form.watch("auditedReportsAvailable") && (
               <FormField
                 control={form.control}
                 name="auditedReport"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Audited Report</FormLabel>
                     <FormControl>
                       <Input
                         type="file"
                         accept=".pdf,.xls,.xlsx"
                         {...field}
                       />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
             )} */}
             <FormField
               control={form.control}
               name="revenuePreviousYear"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Annual Revenue (Previous Year)</FormLabel>
                   <FormControl>
                     <Input type="number" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <FormField
               control={form.control}
               name="revenueCurrentYear"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Annual Revenue (Current Year)</FormLabel>
                   <FormControl>
                     <Input type="number" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <FormField
               control={form.control}
               name="revenueGrowthTrend"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Growth Trend</FormLabel>
                   <FormControl>
                     <Textarea placeholder="15% year-over-year growth in the last two fiscal years" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
            </FormStep>
            <FormStep
             step={4}
             currentStep={step}
             title="Operational Details"
             description={`${step}/${maxSteps} - Operational Details`}
             onPrevStepClick={prevStep}
           >
             <FormField
               control={form.control}
               name="yearsInOperation"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Number of Years in Operation</FormLabel>
                   <FormControl>
                     <Input type="number" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <FormField
               control={form.control}
               name="operationalMilestones"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Key Operational Milestones</FormLabel>
                   <FormControl>
                     <Textarea
                       placeholder="Enter key operational milestones..."
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <FormField
               control={form.control}
               name="productsServicesOffered"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Overview of Products or Services Offered</FormLabel>
                   <FormControl>
                     <Textarea
                       placeholder="Enter overview of products or services offered..."
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
           </FormStep>
           <FormStep 
            step={5}
            currentStep={step}
            title="Ownership and Management"
            description={`${step}/${maxSteps} - Ownership and Management`}
            onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Details of Company Ownership Structure</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter details of company ownership structure..."
                  {...form.register("ownershipStructure")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          
            <FormItem>
              <FormLabel>Bios of Key Management Personnel</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter bios of key management personnel..."
                  {...form.register("keyManagementPersonnel")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          
            <FormItem>
              <FormLabel>Board Composition and Key Decision-Makers</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter board composition and key decision-makers..."
                  {...form.register("boardComposition")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormStep>
          <FormStep
           step={6}
           currentStep={step}
           title="Funding History"
           description={`${step}/${maxSteps} - Funding History`}
           onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Overview of past funding rounds, if applicable</FormLabel>
              <FormControl>
                <Textarea
                placeholder="Enter overview of past funding rounds"
                {...form.register("fundingOverview")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Details of existing investors and their stakes</FormLabel>
              <FormControl>
                <table>
                  <thead>
                    <tr>
                      <th>Investor</th>
                      <th>Type</th>
                      <th>Stake</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Investor 1</td>
                      <td>Venture Capitalist</td>
                      <td>
                        <input
                          type="text"
                          {...form.register("investor1Stake")}
                          placeholder="Percentage"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormStep>
          <FormStep 
           step={7}
           currentStep={step}
           title="Legal and Compliance"
           description={`${step}/${maxSteps} - Legal and Compliance`}
           onPrevStepClick={prevStep}
          >
           <FormItem>
             <FormLabel>Confirmation of legal status (private limited company)</FormLabel>
             <FormControl>
              <Select {...form.register("legalStatus")}>
                <SelectTrigger />
                <SelectContent>
                  <SelectItem value="yes">Yes, the company is registered as a private limited company.</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
                <SelectValue />
              </Select>
             </FormControl>
             <FormMessage />
           </FormItem>

           <FormItem>
            <FormLabel>Compliance with regulatory requirements</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter details about compliance with regulatory requirements..."
                {...form.register("regulatoryCompliance")}
              />
            </FormControl>
            <FormMessage />
           </FormItem>

             <FormItem>
              <FormLabel>Any pending legal issues or disputes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter details about pending legal issues or disputes..."
                  {...form.register("pendingLegalIssues")}
                />
              </FormControl>
              <FormMessage />
             </FormItem>
          </FormStep>
          <FormStep 
            step={8}
            currentStep={step}
            title="Intellectual Property"
            description={`${step}/${maxSteps} - Intellectual Property`}
            onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Details of intellectual property assets</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter details of intellectual property assets..."
                  {...form.register("intellectualPropertyDetails")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Licensing agreements or partnerships related to intellectual property</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter details about licensing agreements or partnerships..."
                  {...form.register("licensingAgreements")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormStep>
          <FormStep 
            step={9}
            currentStep={step}
            title="Market Presence"
            description={`${step}/${maxSteps} - Market Presence`}
            onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Overview of the company's market presence</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter overview of the company's market presence..."
                  {...form.register("marketPresenceOverview")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Customer testimonials or case studies</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter customer testimonials or case studies..."
                  {...form.register("customerTestimonials")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Market share and competitive landscape</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter market share and competitive landscape details..."
                  {...form.register("marketShareAndLandscape")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormStep>
          <FormStep
            step={10}
            currentStep={step}
            title="Future Growth Plans"
            description={`${step}/${maxSteps} - Future Growth Plans`}
            onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Outline of Growth Strategy</FormLabel>
              <Textarea
                placeholder="Enter detailed overview of the company's growth strategy..."
                {...form.register("growthStrategy")}
              />
            </FormItem>
  
            <FormItem>
              <FormLabel>Expansion Plans and Market Penetration Strategies</FormLabel>
              <Textarea
                placeholder="Enter expansion plans and market penetration strategies..."
                {...form.register("expansionStrategies")}
              />
            </FormItem>
          </FormStep>
          <FormStep
            step={11}
            currentStep={step}
            title="Investment Proposal"
            description={`${step}/${maxSteps} - Investment Proposal`}
            onPrevStepClick={prevStep}
          >
            <FormItem>
              <FormLabel>Upload Investment Proposal Document</FormLabel>
              <FileInput
                accept=".pdf,.doc,.docx"
                {...form.register("investmentProposalDocument")}
              />
              <FormMessage>
                Please upload a structured proposal document outlining funding requirements, use of funds, and proposed terms. (Formats: PDF, DOC, DOCX)
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel>Upload Valuation Details Document</FormLabel>
              <FileInput
                accept=".pdf,.doc,.docx"
                {...form.register("valuationDetailsDocument")}
              />
              <FormMessage>
                Please upload a document containing valuation details and relevant financial metrics. (Formats: PDF, DOC, DOCX)
              </FormMessage>
            </FormItem>
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