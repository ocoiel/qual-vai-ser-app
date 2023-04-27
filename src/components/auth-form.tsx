"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { useSupabase } from "@/hooks/use-supabase";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { supabase } = useSupabase();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>("");

  async function sendMagickLink() {
    await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:3000/dash",
      },
    });
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    toast({
      title: "✅ Enviamos um email para test@test.com",
      description: "Por favor, verifique sua caixa de entrada e o span",
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='qualvaiser@gmail.com'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading} onClick={sendMagickLink}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Enviar link mágico <Icons.wand className='ml-1 h-4 w-4' />
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t border-border-colors' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-neutral-900 px-2 text-muted-foreground'>
            Ou contine com
          </span>
        </div>
      </div>
      <div className='grid gap-2'>
        <Button
          variant='outline'
          type='button'
          disabled={isLoading}
          onClick={async () =>
            await supabase.auth.signInWithOAuth({ provider: "google" })
          }
        >
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.google className='mr-2 h-4 w-4' />
          )}{" "}
          Google
        </Button>
        <Button variant='outline' type='button' disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <Icons.gitHub className='mr-2 h-4 w-4' />
          )}{" "}
          Github
        </Button>
      </div>
    </div>
  );
}
