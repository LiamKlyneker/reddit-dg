import { useEffect } from 'react';
import { func } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { ButtonIcon, Typography } from '#ui-kit';
import styles from './styles.module.css';

import { getPostsData } from '#modules/Posts/selector';
import { fetchPosts } from '#modules/Posts/actions';

export default function PostsList({ onClose }) {
  const { isFetching } = useSelector(getPostsData());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  // eslint-disable-next-line no-console
  console.log({ isFetching });

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
