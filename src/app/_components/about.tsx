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
        <b>About</b>
      </h2>
      <Container>
      <div className="av">
      <img className="headshot" src={post.author.picture} alt={`Angelica Bonilla Fominaya... Or a close approximation`}/>
      </div>
        <article className="mb-32">
          <PostBody content={content} />
        </article>
      </Container>
    </section>
  );
}
