import { string } from 'prop-types';
import styles from './styles.module.css';

export default function Image({ src, variant = 'default' }) {
  return (
    <figure className={styles[variant]}>
      {!['default', 'self', 'nsfw'].includes(src) ? (
        <img src={src} alt="post" />
      ) : (
        <i className="material-icons-outlined">image</i>
      )}
    </figure>
  );
}

Image.propTypes = {
  src: string,
  variant: string,
};
