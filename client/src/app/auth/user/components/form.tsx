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

export default function AuthForm() {
    return (
      <>
        <div className="flex flex-col items-center ">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Login </CardTitle>
            <CardDescription>
              Login as user here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 ">
            <form >
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="" />
            </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col items-center gap-4 ">
            <Button>Login</Button>
            <Separator/>
            <div className="flex flex-col items-center gap-2">
              <p>Don't have an account?</p>
              <Button asChild variant="outline">
                <Link href=""> Register</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        </div>
      </>
    )
  }
  