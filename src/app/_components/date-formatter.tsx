import { parseISO, format } from "date-fns";
import "./styles.css";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMMM, yyyy")}</time>;
};

export default DateFormatter;
