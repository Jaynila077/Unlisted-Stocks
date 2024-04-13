import * as z from "zod";
  
const firstStepSchema = z.object({
    step: z.literal(1),
    name: z.string().min(3),
    regNo: z.string().min(3),
    dateIncorporated: z.date(),
    address: z.string().min(3),
  });

const secondStepSchema = firstStepSchema.extend({
    step: z.literal(2),
    companyDescription: z.string().min(3),
  });

const thirdStepSchema = secondStepSchema.extend({
  step: z.literal(3),
  revenuePreviousYear: z.string().min(1),
  revenueCurrentYear: z.string().min(1),
  revenueGrowthTrend: z.string().min(1),
});

const fourthStepSchema = thirdStepSchema.extend({
  step: z.literal(4),
  yearsInOperation: z.number().int().min(1),
  operationalMilestones: z.string().min(1),
  productsServicesOffered: z.string().min(1),
});

const fifthStepSchema = fourthStepSchema.extend({
  step: z.literal(5),
  ownershipStructure:z.string().min(1),
  keyManagementPersonnel: z.string().min(1),
  boardComposition: z.string().min(1),
});

const sixthStepSchema = fifthStepSchema.extend({
  step: z.literal(6),
  investor1Stake: z.string().min(1),
  investor2Stake: z.string().min(1),
});

const seventhStepSchema = sixthStepSchema.extend({
  step: z.literal(7),
  legalStatus: z.enum(["yes", "no"]), 
  regulatoryCompliance: z.string().min(1), 
  pendingLegalIssues: z.string().min(1),
});

const eightStepSchema = seventhStepSchema.extend({
  step: z.literal(8), 
  intellectualPropertyDetails: z.object({
    patents: z.array(z.string()).min(1), 
    trademarks: z.array(z.string()).min(1), 
    copyrights: z.array(z.string()).min(1),
  }),
  licensingAgreements: z.string().min(1), 
});

const ninthStepScehma = eightStepSchema.extend({
  step: z.literal(9), 
  marketPresenceOverview: z.string().min(1), 
  customerTestimonials: z.string().min(1), 
  marketShareAndLandscape: z.string().min(1), 
});

const tenthStepSchema = ninthStepScehma.extend({
  step: z.literal(10),
  growthStrategy: z.string().min(1), 
  expansionStrategies: z.string().min(1),
});

export const schema = z.discriminatedUnion("step", [
    firstStepSchema,
    secondStepSchema,
    thirdStepSchema,
    fourthStepSchema,
    fifthStepSchema,
    sixthStepSchema,
    seventhStepSchema,
    eightStepSchema,
    ninthStepScehma,
    tenthStepSchema
  ]);


 