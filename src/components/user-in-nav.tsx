"use client";
import { CreditCard, LogOut, PlusCircle, Settings, User } from "lucide-react";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { useSupabase } from "@/hooks/use-supabase";

export function UserNav() {
  const { supabase } = useSupabase();

  const [picture, setPicture] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  supabase.auth.getUser().then((user) => {
    setPicture(user.data.user?.user_metadata.picture as string);
    setFullName(user.data.user?.user_metadata.name as string);
    setEmail(user.data.user?.email as string);
  });

  return (
    <div className='flex items-center gap-x-2'>
      <Separator orientation='vertical' className='h-6' />
      <span className='text-neutral-900 font-medium dark:text-neutral-100'>
        Olá, {fullName.split(" ")[0]}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src={picture} alt='Avatar' />
              <AvatarFallback className='bg-background text-foreground'>
                {fullName.split(" ")[0].charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>{fullName}</p>
              <p className='text-xs leading-none text-muted-foreground'>
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Enquetes</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Configuraçōes</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PlusCircle className='mr-2 h-4 w-4' />
              <span>Nova Enquete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Sair</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
