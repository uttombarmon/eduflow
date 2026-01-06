import AuthModal from "@/components/customs/auth/AuthModal";
import Navbar from "@/components/customs/home/Navbar";

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
