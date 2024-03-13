"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useSignin } from "@/hooks/useSignin";

export default function AuthForm() {
  const { error, loading, signin } = useSignin();
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const { name, password } = formData;
    signin(name, password);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login as user here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={onSubmit}>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            {error && <p>{error}</p>}
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-4">
          <Button type="submit" onClick={onSubmit}>
            Login
          </Button>
          <Separator />
          <div className="flex flex-col items-center gap-2">
            <p>Don't have an account?</p>
            <Button asChild variant="outline">
              <Link href="/auth/user/register">Register</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
