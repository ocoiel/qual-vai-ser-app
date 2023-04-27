"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Icons } from "@/components/icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import { useToast } from "@/hooks/use-toast";
import useSound from "use-sound";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";

export function Form() {
  const [wait, setWait] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);

  const [hasDescription, setHasDescription] = useState(false);

  const router = useRouter();
  const { toast } = useToast();
  const [animationRef] = useAutoAnimate<HTMLDivElement>();
  const [play] = useSound("/key-press1.mp3");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWait(true);
    toast({
      title: "Criando enquete",
      duration: 2000,
      description: "Friday, February 10, 2023 at 5:57 PM",
    });

    return new Promise(() => {
      setTimeout(() => {
        router.push(`/poll/${(Math.random() * 100).toFixed(0)}`);
      }, Math.random() * 200);
    });
    //
    // const res = await fetch('/api/new-event', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title,
    //     option_array: options,
    //   }),
    // })
    // if (res.ok) {
    //   const { unique } = await res.json()
    //   setWait(false)
    //   toast.success('Success create event')
    //   router.push(`/event/${unique}`)
    // } else {
    //   setWait(false)
    //   toast.success('Failed create event')
    // }
  }
  return (
    <form
      className='flex flex-col rounded-lg border-t-4 border-black dark:border-white dark:bg-neutral-900 bg-white max-w-3xl mx-6 md:mx-auto py-6 px-6 mb-6'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col w-full space-y-4'>
        <Label htmlFor='title'>Título</Label>
        <Input
          type='text'
          placeholder='E aí, qual vai ser? 🎉'
          name='title'
          id='title'
          onChange={(e) => {
            setTitle(e.target.value);
            play();
          }}
          value={title}
          autoFocus
          required
        ></Input>
        <span
          onClick={() => setHasDescription(!hasDescription)}
          className='w-52 flex items-center text-sm transition-colors duration-100 text-neutral-500 hover:text-neutral-400 cursor-pointer'
        >
          <Icons.add className='h-4 w-4 mr-1' />
          {hasDescription ? "Remover descrição" : "Adicionar descrição"}
        </span>
        {hasDescription && (
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='description'>
              Descrição <span className='text-neutral-500'>(opcional)</span>
            </Label>{" "}
            <Textarea placeholder='Fale mais, fale mais 👀' />
          </div>
        )}
        <Separator className='space-y-2' />

        <div className='flex items-center justify-between'>
          <Label>Opçōes</Label>
          {options?.length < 5 && (
            <Button
              variant='outline'
              type='button'
              onClick={() => {
                setOptions((prev) => [...prev, ""]);
              }}
            >
              Adicionar
              <Icons.add className='ml-2 h-5 w-5 stroke-2' />
            </Button>
          )}
        </div>
        <div className='flex flex-col w-full space-y-4' ref={animationRef}>
          {options.map((opt: any, i: number) => (
            <div className='flex justify-end items-center' key={i}>
              {/* <div className='font-bold text-my-purple w-2 mr-10'>{i + 1}.</div> */}
              <Input
                className='relative flex'
                type='text'
                placeholder={`Opção ${i + 1}`}
                name={`opt${i + 1}`}
                value={opt.value}
                onChange={(e) => {
                  play();
                  const list = [...options];
                  list[i] = e.target.value;
                  setOptions(list);
                }}
                required
              />
              {!(options.length <= 2) && (
                <button
                  className='absolute p-2'
                  type='button'
                  onClick={() => {
                    const list = [...options];
                    list.splice(i, 1);
                    setOptions(list);
                  }}
                >
                  <Icons.close className='h-5 w-5 stroke-2 transition-colors stroke-neutral-500 hover:stroke-neutral-300' />
                </button>
              )}
            </div>
          ))}
        </div>
        <Separator className='space-y-2' />
        <Label>Cofigurações</Label>
        <div className='flex flex-col space-y-2'>
          <div className='flex p-2 gap-x-4 items-center'>
            <Label htmlFor='expires'>Expira automaticamente</Label>
            <Switch id='expires' />
          </div>

          <div className='flex p-2 gap-x-4 items-center'>
            <Label htmlFor='name-required'>Exigir nome do participante</Label>
            <Switch id='name-required' />
          </div>
        </div>

        <Separator className='space-y-2' />

        <div className='flex justify-between w-full space-x-4'>
          <Button
            className='transition-all ease-out duration-200'
            type='submit'
            disabled={wait}
          >
            {wait ? (
              <>
                <Icons.loader className='mr-2 h-5 w-5 animate-spin' />
                <span>Criando enquete...</span>
              </>
            ) : (
              "Criar enquete"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
