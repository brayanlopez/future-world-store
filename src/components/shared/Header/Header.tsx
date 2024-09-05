import Link from "next/link";

import { validateAccessToken } from "@/utils/auth/validateAccessToken";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import styles from "./Header.module.sass";

export const Header = () => {
  const token = validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {token ? <p>Hola!</p> : <Link href="/login">Login</Link>}
        <ShoppingCart />
      </div>
    </header>
  );
};
