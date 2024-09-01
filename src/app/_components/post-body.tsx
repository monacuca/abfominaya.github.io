import markdownStyles from "./markdown-styles.module.css";
import "./styles.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <section>
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    </section>
  );
}
