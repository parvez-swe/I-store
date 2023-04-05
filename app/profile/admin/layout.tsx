import AdminNav from "@/components/Admin/AdminNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full min-h-full">
      <div className=" bg-[#081621] text-slate-50 py-3">
        <AdminNav />
      </div>
      <div className="flex  items-center first-letter justify-center flex-1  my-3 md:m-5">
        {children}
      </div>
    </main>
  );
}
