import { node } from 'prop-types';
import styles from './styles.module.css';

export default function Tag({ children }) {
  return <p className={styles.tag}>{children}</p>;
}

Tag.propTypes = {
  children: node,
};
