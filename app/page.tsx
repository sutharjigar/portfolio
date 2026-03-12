import Common from "@/app/components/common";
import AboutSection from "./components/aboutSection";

export default function Home() {
  return (
    <main className="flex items-start justify-center w-full flex-col px-6 py-10 sm:px-10 min-h-screen max-w-3xl mx-auto">
      <Common />
      <AboutSection />
    </main>
  );
}
