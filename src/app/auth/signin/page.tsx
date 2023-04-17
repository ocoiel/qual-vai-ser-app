import { Metadata } from "next";

import { UserAuthForm } from "@/components/auth-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Qual vai ser - Login",
  description: "Login no app Qual Vai Ser",
};

export default function SignInPage() {
  return (
    <>
      <div className='block mr-2'>
        <Label>Já tem uma conta?</Label>
        <Button>Login</Button>
      </div>
      <div className='p-6 lg:p-8 flex h-screen justify-center items-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  );
}
