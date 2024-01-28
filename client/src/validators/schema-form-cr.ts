import * as z from "zod";
  
const firstStepSchema = z.object({
    step: z.literal(1),
    name: z.string().min(3),
    regNo: z.string().min(3),
    // dateIncorporated: z.date(),
    address: z.string().min(3),
  });

const secondStepSchema = z.object({
    step: z.literal(2),
    comapyDiscription: z.string().min(100),
    companyType: z.enum(["Private", "Public"]),
    companySize: z.enum(["Small", "Medium", "Large"]),
    companyLogo: z.string().url(),
    industrySector: z.enum(["Agriculture", "Manufacturing", "Mining", "Services", "Transport", "Other"]),
    tagetMarket: z.string().min(3),
    costomerBase: z.string().min(10),
  });

const thirdStepSchema = z.object({
    step : z.literal(3),
});

export const schema = z.discriminatedUnion("step", [
    firstStepSchema,
    secondStepSchema,
    thirdStepSchema,
  ]);
 