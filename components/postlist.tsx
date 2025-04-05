import { FC } from 'react';
import Link from 'next/link';

import { Post } from '../lib/posts';

type PostListProps = {
  posts: Post[];
};

const PostList: FC<PostListProps> = ({ posts }) => {
  posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
    // Most recent dates first.
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <table className="post-table">
        <thead className="title-row">
          <tr>
            <th>
              <p>Notes</p>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <p>Date</p>
            </th>
            <th>
              <p>Title</p>
            </th>
            <th>
              <p>Summary</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.slug}>
              <td>
                <p>
                  <time>{post.frontMatter.date}</time>
                </p>
              </td>
              <td>
                <p>
                  <Link href={`/notes/${post.slug}`}>
                    {post.frontMatter.title}
                  </Link>
                </p>
              </td>
              <td>
                <div>
                  <p>{post.frontMatter.summary}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
