import { Footer } from "@/components/footer";
import { Form } from "@/components/form-create-poll";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className='text-center mb-4 p-4'>
        <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
          Crie a votação
        </h3>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Preencha os campos abaixo para criar sua enquete.
        </p>
      </div>
      <Form />
      <Footer />
    </>
  );
}
