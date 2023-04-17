import { Footer } from "@/components/footer";
import { Form } from "@/components/form-create-poll";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className='text-center mb-4 p-4'>
        <h2 className='mt-8 scroll-m-20 text-3xl font-semibold tracking-tight'>
          Crie a votação
        </h2>
        <p className='text-base text-slate-500 dark:text-slate-400'>
          Preencha os campos abaixo para criar sua enquete.
        </p>
      </div>
      <Form />
      <Footer />
    </>
  );
}
