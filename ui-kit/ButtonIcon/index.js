import { func, string } from 'prop-types';
import styles from './styles.module.css';

export default function ButtonIcon({ type = 'button', icon, onClick }) {
  return (
    <button type={type} className={styles.buttonIcon} onClick={onClick}>
      <i className="material-icons-outlined">{icon}</i>
    </button>
  );
}

ButtonIcon.propTypes = {
  icon: string.isRequired,
  type: string,
  onClick: func.isRequired,
};
