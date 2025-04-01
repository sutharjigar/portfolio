// "use server";

import BlogSection from "../components/blogSection";
import Common from "../components/common";

export default async function Blogs() {
  return (
    <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
      <Common />
      <BlogSection />
    </main>
  );
}
