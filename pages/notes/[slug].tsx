import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';

import CoreLayout from '../../components/layouts/core';
import PageLayout from '../../components/layouts/page';
import Code from '../../components/code/code';

type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
  };
  mdxSource: any;
};

type PostPageProps = {
  post: Post;
};

const PostPage = ({ post }: PostPageProps) => {
  const components = { Code };

  return (
    <CoreLayout title={post.frontMatter.title}>
      <PageLayout title={post.frontMatter.title}>
        <div className="post-content">
          <div className="post-meta">
            <h1>{post.frontMatter.title}</h1>
            <time>{post.frontMatter.date}</time>
          </div>
          <div>
            <MDXRemote {...post.mdxSource} components={components} />
          </div>
        </div>
      </PageLayout>
    </CoreLayout>
  );
};

// This function gets called at build time to generate the static paths for each post
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  // Get the slugs for each post and return them as paths
  const paths = posts.map((post) => ({
    params: { slug: post.slug }, // The slug as a URL parameter
  }));

  return {
    paths,
    fallback: false, // This means that any slug not returned by `getStaticPaths` will result in a 404 page
  };
};

// This function gets called at build time to fetch the data for a single post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }; // Get the slug from the URL params
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return { notFound: true }; // Return 404 if the post is not found
  }

  return {
    props: { post }, // Pass the post as a prop to the component
  };
};

export default PostPage;
