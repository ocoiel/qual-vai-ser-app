export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      {children}
    </div>
  );
}
