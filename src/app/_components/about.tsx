import { Post } from "@/interfaces/post";
import Container from "./container";
import { PostBody } from "./post-body";
import "./styles.css";
import { title } from "process";

type Props = {
  post: Post;
};

export function About({ post }: Props) {
  const content = post.content;
  return (
    <section>
      <h2 className="heading">
      About
      </h2>
      <Container>
      <img className="headshot" src={post.author.picture} alt={`Angelica Bonilla Fominaya... Once upon a time...`}/>
      <PostBody content={content} />
      </Container>
    </section>
  );
}
