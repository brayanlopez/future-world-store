import Link from "next/link";

import styles from "./Header.module.css";
import { validateAccessToken } from "@/utils/auth/validateAccessToken";

export const Header = () => {
  const token = validateAccessToken();

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
        {token ? <>Bienvenido</> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};
