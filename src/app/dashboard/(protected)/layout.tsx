import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "@/lib/payload";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function ProtectedDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const payload = await getPayload();
  const { user } = await payload.auth({ headers: await headers() });

  if (!user) {
    redirect("/dashboard/login");
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar userName={user.name || user.email} />
      <main className="flex-1 px-4 sm:px-6 md:px-8 xl:px-12 py-6 md:py-10 overflow-x-hidden min-w-0">
        {children}
      </main>
    </div>
  );
}
