import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Carrousel} from "@/app/_components/image-carrousel";
import { Videos } from "@/app/_components/videos";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import CoverImage from "@/app/_components/cover-image";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const carrouselImages = post.carrouselImages
  const videoIds = post.video

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            tags={post.tags}
          />
          {(carrouselImages != undefined) && <Carrousel 
            carrouselImages={carrouselImages}
            />}
            {(carrouselImages == undefined) && (post.coverImage != undefined) && <CoverImage 
            title={post.title}
            src={post.coverImage}
            />}
            {(videoIds != undefined) && <Videos 
            videoIds={videoIds}
            />}
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | A. B. Fominaya`;

  return {
    title,
    openGraph: {
      title,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
