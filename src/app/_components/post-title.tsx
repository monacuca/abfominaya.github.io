import { ReactNode } from "react";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="heading">
      <b>{children}</b>
    </h1>
  );
}
