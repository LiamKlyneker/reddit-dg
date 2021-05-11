import { useEffect } from 'react';
import { func } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { ButtonIcon, Typography, Button } from '#ui-kit';
import { PostItem } from '#components';
import styles from './styles.module.css';

import { getPostsData } from '#modules/Posts/selector';
import { fetchPosts } from '#modules/Posts/actions';

export default function PostsList({ onClose }) {
  const { isFetching, items, meta } = useSelector(getPostsData());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ limit: 20 }));
  }, []);

  return (
    <div>
      <header className={styles.postListsHeader}>
        <Typography variant="h2">Reddit Posts</Typography>
        <ButtonIcon icon="clear" onClick={onClose} />
      </header>
      <section className={styles.postListsItems}>
        {items.length > 0 &&
          items.map(item => (
            <PostItem
              key={item.data.id}
              thumbnail={item.data.thumbnail}
              author={item.data.author}
              created={item.data.created_utc}
              title={item.data.title}
              numComments={item.data.num_comments}
              onDismissPost={ev => ev.preventDefault()}
            />
          ))}
        {isFetching && 'Loading...'}
        {meta.after && !isFetching && (
          <div className={styles.postListsItemsLoadMore}>
            <Button onClick={() => dispatch(fetchPosts({ after: meta.after }))}>
              Load more
            </Button>
          </div>
        )}
      </section>
      <footer className={styles.postListsFooter}>
        <Button>Dismiss All</Button>
      </footer>
    </div>
  );
}

PostsList.propTypes = {
  onClose: func.isRequired,
};
