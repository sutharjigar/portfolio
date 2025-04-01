import Common from "../components/common";
import ContactSection from "../components/contactSection";

export default async function Contact() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <Common />
      <ContactSection />
    </main>
  );
}
