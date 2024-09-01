import { CMS_NAME } from "@/lib/constants";
import "./styles.css";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">
      <h1 className="title">
        A. B. Fominaya
      </h1>
      <h4 className="sub-title">
       Artist, Engineer, Researcher
      </h4>
    </section>
  );
}
