"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { Loader2 } from "lucide-react"
import Link from "next/link"

import { useSignup } from "@/hooks/useSignup"
import { useState } from "react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { error, signup } = useSignup();
  const [formData, setFormData] = useState({ name: '', email: '',password: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const { name, email ,password } = formData;
    signup(name, email ,password);

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  };

  

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            )}
            Sing Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or signin with existing account
          </span>
        </div>
      </div>
      <Link href={"/auth/user/login"}>
      <Button className="w-96" variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
        ) : (
          "SIGN IN"
        )}{" "}
      </Button>
      </Link>
    </div>
  )
}