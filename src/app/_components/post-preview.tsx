import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import TagsFormatter from "./tags-formatter";
import "./styles.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  tags: string[];
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  tags,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        {(coverImage != null) && <CoverImage slug={slug} title={title} src={coverImage} />}
      </div>
      <h3 className="preview-title">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="date-box">
        <DateFormatter dateString={date} />
      </div>
      <div className="tags-box">
          <TagsFormatter tags={tags} />
        </div>
      <p className="body">{excerpt}</p>
    </div>
  );
}
