import { useSelector } from 'react-redux';

import Layout from '#layout';
import { Image, Typography } from '#ui-kit';

import { getPostsData } from '#modules/Posts/selector';

export default function Home() {
  const { isFetchingPostDetails, postDetailsData } = useSelector(getPostsData());
  return (
    <Layout title={!postDetailsData ? 'Home' : postDetailsData.title}>
      {!postDetailsData && !isFetchingPostDetails && (
        <Typography variant="h1">Select a Post</Typography>
      )}
      {isFetchingPostDetails && 'Loading...'}
      {postDetailsData && (
        <>
          <Typography variant="h1">{postDetailsData.title}</Typography>
          <Typography>By {postDetailsData.author}</Typography>
          {renderContent(postDetailsData)}

          <div className="py-8">
            <a
              href={`https://www.reddit.com/${postDetailsData.permalink}`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              See Full Post
            </a>
          </div>
        </>
      )}
    </Layout>
  );
}

const renderContent = data => {
  if (
    data.url.indexOf('.jpg') >= 0 ||
    data.url.indexOf('.jpeg') >= 0 ||
    data.url.indexOf('.png') >= 0
  ) {
    return <Image src={data.url} />;
  }
  return <Image src={data.thumbnail} variant="thumbnail" />;
};
