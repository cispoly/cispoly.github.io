import fm from 'front-matter';
import { BlogPost } from '../../types';

// Define the shape of the Front Matter attributes
interface BlogFrontMatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  categories?: string[];
  tags?: string[];
  coverImage?: string;
}

// Import all markdown files from the /public/blog directory
// Structure: /public/blog/YYYY-MM-DD-slug/index.md
const markdownFiles = import.meta.glob('/public/blog/*/index.md', { query: '?raw', import: 'default' });

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const rawContent = await markdownFiles[path]() as string;
    const { attributes, body } = fm<BlogFrontMatter>(rawContent);
    
    // Extract folder name from path: /public/blog/YYYY-MM-DD-slug/index.md -> YYYY-MM-DD-slug
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    
    // Match YYYY-MM-DD-slug pattern
    const match = folderName.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
    const slug = match ? match[2] : folderName;
    
    posts.push({
      slug,
      folderName,
      title: attributes.title,
      date: attributes.date || (match ? match[1] : new Date().toISOString().split('T')[0]),
      author: attributes.author || 'CISPOLY Team',
      excerpt: attributes.excerpt || '',
      content: body,
      categories: attributes.categories || [],
      tags: attributes.tags || [],
      coverImage: attributes.coverImage,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
};
