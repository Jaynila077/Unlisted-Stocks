import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Command } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { UserAuthForm } from "./components/user-auth-form"
import AuthForm from  "@/app/auth/user/components/form"

export const metadata: Metadata = {
  title: "Login",
  description: "Welcome to Unlisted Stocks",
}

export default function LoginPage() {

  return (
    <div className="">
      <div className=" md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={980}
          height={643}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={980}
          height={543}
          alt="Authentication"
          className="hidden dark:block "
        />
      </div>
      <div className="container relative hidden h-[667px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Command className="mr-2 h-6 w-6" /> Unlisted Stocks
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Laborum repellat deserunt, illum nobis, 
                 repellendus odit ut unde dolore id culpa qui 
                dolorum recusandae architecto 
                hic tempore sunt consequatur doloribus. 
                Dolorem!&rdquo;
              </p>
              <footer className="text-sm">Text</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <AuthForm/> 
          </div>
        </div>
      </div>
    </div>
  )
}
