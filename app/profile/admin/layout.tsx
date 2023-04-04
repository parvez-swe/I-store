import AdminNav from "@/components/Amin/AdminNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full min-h-full  bg-blue-400">
      <div className=" bg-green-500">
        <AdminNav />
      </div>
      <div className="flex bg-red-500 items-center first-letter justify-center flex-1 mx-2 my-3 md:m-5">
        {children}
      </div>
    </main>
  );
}
