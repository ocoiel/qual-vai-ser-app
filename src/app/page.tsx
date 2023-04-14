export default function Home() {
  return (
    <>
      <section className='grid items-center gap-6 pt-6 pb-8 md:py-10'>
        <div className='flex max-w-[980px] flex-col items-start gap-2'>
          <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
            Beautifully designed components <br className='hidden sm:inline' />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className='max-w-[750px] text-lg text-slate-900 dark:text-slate-400 sm:text-xl'>
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source.{" "}
            <span className='font-semibold'>
              Use this to build your own component library
            </span>
            .
          </p>
        </div>
        {/* <div className='block lg:hidden'>
          <PromoVideo />
        </div> */}
      </section>
    </>
  );
}
