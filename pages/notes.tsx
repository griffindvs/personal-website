import { GetStaticProps } from 'next';

import { Post, getAllPosts } from '../lib/posts';
import CoreLayout from '../components/layouts/core';
import PageLayout from '../components/layouts/page';
import PostList from '../components/postlist';

type NotesProps = {
  posts: Post[];
};

const Notes = ({ posts }: NotesProps) => {
  return (
    <CoreLayout title={'Notes'}>
      <PageLayout title={'Notes'}>
        <PostList posts={posts} />
      </PageLayout>
    </CoreLayout>
  );
};

// This function is called at build time to fetch the data and pre-render the page
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default Notes;
