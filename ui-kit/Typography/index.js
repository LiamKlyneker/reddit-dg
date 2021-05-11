import { node, string } from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Typography({ children, variant = 'p', color }) {
  const classNames = cx(styles[variant], styles[color]);

  if (variant === 'h1') {
    return <h1 className={classNames}>{children}</h1>;
  } else if (variant === 'h2') {
    return <h2 className={classNames}>{children}</h2>;
  } else if (variant === 'small') {
    return <p className={classNames}>{children}</p>;
  }

  return <p className={classNames}>{children}</p>;
}

Typography.propTypes = {
  children: node,
  color: string,
  variant: string,
};
