import { parseISO, format } from "date-fns";
import "./styles.css";

type Props = {
  tags: string[];
};

const TagsFormatter = ({ tags }: Props) => {
  return <div className="tags">
    <b>Tags:</b> {tags.join(', ')}
  </div>;
};

export default TagsFormatter;
