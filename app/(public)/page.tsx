import Hero from "@/components/customs/home/Hero";
import Navbar from "@/components/customs/home/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Features Grid */}

        {/* Course Previews */}
      </main>
    </div>
  );
}
