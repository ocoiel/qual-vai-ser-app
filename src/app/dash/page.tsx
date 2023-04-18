import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar-dashboard";

const polls = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className='container flex gap-2'>
        <Sidebar polls={polls} className='hidden lg:block' />

        <div className='w-full mt-9'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Dashboard
          </h1>
          <h2>Gabriel Albuquerque</h2>
          <span>Usuario free</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
