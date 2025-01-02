import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promisify } from 'util';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    summary: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const readDir = promisify(fs.readdir);
const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = async () => {
  const filenames = await readDir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const { data, content } = matter(fileContent); // Read frontmatter and content
      const mdxSource = await serialize(content); // Serialize the MDX content

      return {
        slug: filename.replace(/\.mdx$/, ''),
        frontMatter: data,
        mdxSource,
      };
    })
  );

  return posts;
};
