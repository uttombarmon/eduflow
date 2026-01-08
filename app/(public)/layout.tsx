import AuthModal from "@/components/features/auth/AuthModal";
import Navbar from "@/components/layout/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" bg-white">
      <AuthModal />
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
}
