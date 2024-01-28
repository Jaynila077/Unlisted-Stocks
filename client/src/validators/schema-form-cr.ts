import * as z from "zod";
  
const firstStepSchema = z.object({
    step: z.literal(1),
    name: z.string().min(3),
    regNo: z.string().min(3),
    // dateIncorporated: z.date(),
    address: z.string().min(3),
  });

const secondStepSchema = firstStepSchema.extend({
    step: z.literal(2),
    companyDescription: z.string().min(3),
  });

  
export const schema = z.discriminatedUnion("step", [
    firstStepSchema,
    secondStepSchema,
  ]);
 