import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className='sticky top-0  z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 bg-gradient-to-tl dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950'>
      <div className='lg:container md:container flex h-16 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 px-6 py-3 items-center justify-between space-x-2 sm:space-x-4 md:justify-end'>
          <nav className='flex items-center space-x-1'>
            <div>
              <Link href='/' className='mr-6 flex items-center space-x-2'>
                <Icons.logo className='h-6 w-6 md:hidden' />
                <span className='font-bold md:hidden'>{siteConfig.name}</span>
              </Link>
            </div>
            <div>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-slate-700 dark:text-slate-400",
                  })}
                >
                  <Icons.gitHub className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "text-slate-700 dark:text-slate-400",
                  })}
                >
                  <Icons.twitter className='h-5 w-5 fill-current' />
                  <span className='sr-only'>Twitter</span>
                </div>
              </Link>
            </div>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
