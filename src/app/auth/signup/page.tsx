import { Metadata } from "next";

import { UserAuthForm } from "@/components/auth-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qual vai ser - Cadastre-se",
  description: "Cadastre-se no app Qual Vai Ser",
};

export default function SignUpPage() {
  return (
    <div className='overflow-y-hidden'>
      <div className='flex justify-center items-center'></div>
      <div className='p-6 lg:p-8 flex h-screen justify-center items-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <div className='my-8 flex gap-x-2 justify-center items-center'>
              <Label>Já tem uma conta?</Label>
              <Link
                href='/auth/signin'
                className='hover:underline p-2 border border-border-colors rounded-lg transition-colors duration-200'
              >
                Faça login
              </Link>
            </div>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Crie uma conta
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enviaremos um link no teu email (fique tranquilo, nada de spans!)
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
