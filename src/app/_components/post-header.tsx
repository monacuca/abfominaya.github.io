import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import TagsFormatter from "./tags-formatter";
import "./styles.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  tags: string[];
};

export function PostHeader({ title, coverImage, date, author, tags }: Props) {
  return (
    <>
    
    <div className="post-box">
      <PostTitle>{title}</PostTitle>
      <div className="author-box">
        <Avatar name={author.name} picture={author.picture} />
      </div>
        <div className="date-box">
          <DateFormatter dateString={date} />
        </div>
        <div className="tags-box">
          <TagsFormatter tags={tags} />
        </div>
      </div>
    </>
  );
}
