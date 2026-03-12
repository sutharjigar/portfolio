import Common from "../components/common";
import ContactSection from "../components/contactSection";

export default async function Contact() {
  return (
    <main className="flex items-start justify-center w-full flex-col px-6 py-10 sm:px-10 min-h-screen max-w-3xl mx-auto">
      <Common />
      <ContactSection />
    </main>
  );
}
