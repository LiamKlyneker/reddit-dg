import { func, node, string } from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Button({
  children,
  variant = 'default',
  type = 'button',
  onClick,
}) {
  return (
    <button className={cx(styles.button, styles[variant])} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  type: string,
  onClick: func.isRequired,
  variant: string,
};
