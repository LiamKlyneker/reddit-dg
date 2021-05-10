import { node, string } from 'prop-types';
import styles from './styles.module.css';

export default function Typography({ variant, children }) {
  if (variant === 'h1') {
    return <h1 className={styles.h1}>{children}</h1>;
  } else if (variant === 'h2') {
    return <h2 className={styles.h2}>{children}</h2>;
  }
  return <p className={styles.p}>{children}</p>;
}

Typography.propTypes = {
  children: node,
  variant: string,
};
