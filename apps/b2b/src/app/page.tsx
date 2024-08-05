import styles from './page.module.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Product from '../../../../libs/products/src/lib/product';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>Welcome to b2b!</h1>

      <Product />
    </div>
  );
}
