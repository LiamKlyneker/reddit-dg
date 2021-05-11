import { func, number, string } from 'prop-types';
import { differenceInHours } from 'date-fns';

import { Button, Image, Typography } from '#ui-kit';
import styles from './styles.module.css';

export default function PostItem({
  thumbnail,
  author,
  title,
  numComments,
  onDismissPost,
  created,
}) {
  return (
    <article className={styles.postItemWrapper}>
      <div>
        <Image src={thumbnail} variant="thumbnail" />
      </div>
      <section>
        <div className={styles.postItemHeader}>
          <Typography variant="small">{author}</Typography>
          <Typography variant="extra-small" color="grey">
            {parseTime(created)}
          </Typography>
        </div>
        <Typography>{title}</Typography>
        <div className={styles.postItemActions}>
          <Typography variant="small">{numComments} Comments</Typography>
          <Button variant="small" onClick={onDismissPost}>
            Dismiss Post
          </Button>
        </div>
      </section>
    </article>
  );
}

PostItem.propTypes = {
  href: string,
  title: string,
  thumbnail: string,
  author: string,
  numComments: number,
  onDismissPost: func,
  created: number,
};

const parseTime = time => {
  const date = new Date(time * 1000);
  return `${differenceInHours(new Date(), date)} hours ago`;
};
