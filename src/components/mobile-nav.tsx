"use client";

import * as React from "react";
import Link from "next/link";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MobileNav() {
  return (
    <div className='flex [&_>_*]:m-0 flex-row items-center space-x-8 '>
      <nav className='blcok z-50 fixed w-full inset-0 top-auto pt-2 pb-[8px] border-t sm:static sm:backdrop-filter-none sm:bg-transparent sm:border-t-0 sm:p-0'>
        <ul className='mx-auto w-full max-w-sm px-6 flex gap-6 justify-between w-unset sm:px-0 sm:justify-start [&>*]:flex'>
          <li className='w-full sm:w-unset sm:h-[44px] sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm:w-unset'
            >
              <svg fill='none' viewBox='0 0 24 24' astro-icon='home'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z'
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li className='w-full sm:w-unset sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm:w-unset'
            >
              <svg fill='none' viewBox='0 0 24 24' astro-icon='home'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z'
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li className='w-full sm:w-unset sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm:w-unset'
            >
              <svg fill='none' viewBox='0 0 24 24' astro-icon='home'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z'
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li className='w-full sm:w-unset sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm:w-unset'
            >
              <svg fill='none' viewBox='0 0 24 24' astro-icon='home'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z'
                ></path>
              </svg>
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

{
  /* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='-ml-4 text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 md:hidden'
        >
          <Icons.logo className='mr-2 h-4 w-4' />{" "}
          <span className='font-bold'>Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        sideOffset={24}
        alignOffset={4}
        className='w-[300px] overflow-scroll'
      >
        <DropdownMenuItem asChild>
          <Link href='/' className='flex items-center'>
            <Icons.logo className='mr-2 h-4 w-4' /> {siteConfig.name}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <ScrollArea className='h-[400px]'>
          {docsConfig.sidebarNav?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
          {docsConfig.sidebarNav.map((item, index) => (
            <DropdownMenuGroup key={index}>
              <DropdownMenuSeparator
                className={cn({
                  hidden: index === 0,
                })}
              />
              <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
              <DropdownMenuSeparator className='-mx-2' />
              {item?.items?.length &&
                item.items.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    {item.href ? (
                      <Link href={item.href}>{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuGroup>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu> */
}
