import { NextResponse } from "next/server";

export async function POST(req: Request , res: Response) {
    try {
        const { email, password } = await req.json();
        // validation needed
        console.log(email, password);
    }
    catch (error) {
       console.log(error);
    }

   return NextResponse.json({ message: "success" }); 

}