"use client";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from 'react';

export default function FormReg() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(`/api/auth/user_reg`, {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
          }),
        });
        console.log({ response });
      };
    return (
      <div className="flex min-h-screen flex-col items-center ">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Sign-up an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 ">
            <form onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" placeholder="" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" placeholder="" />
            </div>
            <div className="flex flex-col items-center mt-4">
            <Button type="submit">Sign-up</Button>
            </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col items-center gap-4 ">
            <Separator/>
            <div className="flex flex-col items-center gap-2">
              <p>Already have an account?</p>
              <Button asChild variant="outline">
                <Link href="/user_login"> Login</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  }