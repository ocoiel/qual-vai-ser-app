"use client";

import Link from "next/link";
import { Icons } from "./icons";

const navItems = [
  {
    name: "Home",
    icon: <Icons.home />,
    href: "/",
  },
  {
    name: "Criar",
    icon: <Icons.add />,
    href: "/create",
  },
  {
    name: "Dashboard",
    icon: <Icons.dash />,
    href: "/dash",
  },
  {
    name: "Perfil",
    icon: <Icons.user />,
  },
];

export function MobileNav() {
  return (
    <div className='flex [&_>_*]:m-0 flex-row items-center space-x-8 '>
      <nav className='block z-[500] bg-hi-contrast/80 dark:bg-lo-contrast/80 backdrop-saturate-150 backdrop-blur-3xl fixed w-full inset-0 top-auto pt-2 pb-2 border-t border-border-colors sm:static sm:w-unset sm:backdrop-filter-none sm:bg-transparent sm:border-t-0 sm:p-0'>
        <ul className=' h-[48px] mx-auto w-full max-w-sm px-7 flex gap-6 justify-between sm:px-0 sm:justify-start [&>*]:flex'>
          {navItems.map((item) => (
            <li className='w-full sm:!hidden' key={item.name}>
              <Link
                href='#'
                className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-1 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline'
              >
                {item.icon}
                <span className=''>{item.name}</span>
              </Link>
            </li>
          ))}
          {/* <li className='w-full sm:!hidden'>
            <Link
              href='/'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline'
            >
              <Icons.home
                stroke='currentColor'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                className='h-8 w-8'
              />
              Home
            </Link>
          </li> */}
          {/* <li className='w-full sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline'
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
          <li className='w-full sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm'
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
          <li className='w-full sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm'
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
          <li className='w-full sm:!hidden'>
            <a
              href='#'
              aria-current='page'
              className='inline-flex items-center p-0 appearance-none bg-transparent border-0 decoration-1 underline-offset-2 focus:outline-none focus:ring-0 focus-visible:ring focus-visible:ring-neutral-300 rounded-md [--link-color:theme(colors.neutral.500)] [--link-color-active:theme(colors.hi-contrast)] [--link-icon-color:var(--link-color)] [--link-icon-size:theme(spacing.7)] text-[color:var(--link-color)] gap-0 text-xs flex-col w-full no-underline font-semibold transition-colors [&amp;>svg]:text-[color:var(--link-icon-color)] [&amp;>svg]:w-[var(--link-icon-size)] [&amp;>svg]:h-[var(--link-icon-size)] hover:[--link-color:var(--link-color-active)] [&amp;[aria-current]]:[--link-color:var(--link-color-active)] sm:[--link-icon-size:theme(spacing.6)] sm:[--link-color:theme(colors.hi-contrast)] sm:[--link-icon-color:theme(colors.neutral.600)] sm:hover:[--link-icon-color:var(--link-color-active)] sm:[&amp;[aria-current]]:[--link-icon-color:var(--link-color-active)] sm:gap-1 sm:text-base sm:flex-row sm:hover:underline sm'
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
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
