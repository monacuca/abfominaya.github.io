import "@/app/_components/styles.css"
import PageSelector from "./_components/page-selector";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <PageSelector posts={allPosts} />
    </main>
  );
}
