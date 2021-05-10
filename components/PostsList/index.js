import { func } from 'prop-types';
import { ButtonIcon, Typography } from '#ui-kit';
import styles from './styles.module.css';

export default function PostsList({ onClose }) {
  return (
    <div>
      <header className={styles.postListsHeader}>
        <Typography variant="h2">Reddit Posts</Typography>
        <ButtonIcon icon="clear" onClick={onClose} />
      </header>
      <section>
        <p>Items goes here</p>
      </section>
    </div>
  );
}

PostsList.propTypes = {
  onClose: func.isRequired,
};
