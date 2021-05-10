import { useState } from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';
import Head from 'next/head';

import { PostsList } from '#components';
import { ButtonIcon } from '#ui-kit';
import styles from './styles.module.css';

export default function Layout({ children, title }) {
  const [showSideNavigation, setShowSideNavigation] = useState(false);

  return (
    <>
      <Head>
        <title>Reddit | {title}</title>
      </Head>
      <div className={styles.layoutWrapper}>
        <nav className={cx(styles.sideNavigation, { [styles.active]: showSideNavigation })}>
          <PostsList onClose={() => setShowSideNavigation(false)} />
        </nav>
        <div>
          <header className={styles.header}>
            <ButtonIcon icon="menu" onClick={() => setShowSideNavigation(true)} />
          </header>
          <main className={styles.mainBody}>{children}</main>
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: node,
  title: string.isRequired,
};
