import BlogSection from "../components/blogSection";
import Common from "../components/common";

export default async function Blogs() {
  return (
    <main className="flex items-start justify-center w-full flex-col px-6 py-10 sm:px-10 min-h-screen max-w-3xl mx-auto">
      <Common />
      <BlogSection />
    </main>
  );
}
