import Link from "next/link";
import "./styles.css";


const Header = () => {
  return (
    <h2 className="header">
      <Link href="/" className="hover:underline">
        ( home )
      </Link>
    </h2>
  );
};

export default Header;
