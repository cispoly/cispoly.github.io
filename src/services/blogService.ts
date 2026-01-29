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
// We now support index.md, index.cn.md, index.en.md
const markdownFiles = import.meta.glob('/public/blog/*/*.md', { query: '?raw', import: 'default' });

/**
 * Helper to determine which file path to use for a given language.
 * Priority:
 * 1. index.{lang}.md (e.g., index.en.md or index.cn.md)
 * 2. index.en.md (default fallback for missing lang)
 * 3. index.md (legacy fallback)
 */
const resolveFilePath = (folderPath: string, lang: 'en' | 'zh'): string | null => {
  const langExt = lang === 'zh' ? 'cn' : 'en';
  
  // Try target language
  const targetPath = `${folderPath}/index.${langExt}.md`;
  if (targetPath in markdownFiles) return targetPath;

  // Fallback to English if target is not English
  if (lang !== 'en') {
    const enPath = `${folderPath}/index.en.md`;
    if (enPath in markdownFiles) return enPath;
  }

  // Fallback to generic index.md
  const genericPath = `${folderPath}/index.md`;
  if (genericPath in markdownFiles) return genericPath;

  return null;
};

export const getAllPosts = async (lang: 'en' | 'zh' = 'en'): Promise<BlogPost[]> => {
  const posts: BlogPost[] = [];
  const processedFolders = new Set<string>();

  for (const path in markdownFiles) {
    // Extract folder name from path: /public/blog/YYYY-MM-DD-slug/filename.md
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    const folderPath = parts.slice(0, -1).join('/');

    if (processedFolders.has(folderName)) continue;
    processedFolders.add(folderName);

    const filePath = resolveFilePath(folderPath, lang);
    if (!filePath) continue;

    const rawContent = await markdownFiles[filePath]() as string;
    const { attributes, body } = fm<BlogFrontMatter>(rawContent);
    
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

export const getPostBySlug = async (slug: string, lang: 'en' | 'zh' = 'en'): Promise<BlogPost | undefined> => {
  // To be efficient, we could scan for the specific folder, but iterating all is simpler for now
  // given the likely small number of posts.
  // Optimization: Find the folder that matches the slug.
  
  // Find folder matching the slug
  let targetFolder: string | null = null;
  let targetFolderPath: string | null = null;

  for (const path in markdownFiles) {
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    const match = folderName.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
    const currentSlug = match ? match[2] : folderName;

    if (currentSlug === slug) {
      targetFolder = folderName;
      targetFolderPath = parts.slice(0, -1).join('/');
      break;
    }
  }

  if (!targetFolder || !targetFolderPath) return undefined;

  const filePath = resolveFilePath(targetFolderPath, lang);
  if (!filePath) return undefined;

  const rawContent = await markdownFiles[filePath]() as string;
  const { attributes, body } = fm<BlogFrontMatter>(rawContent);
  
  const match = targetFolder.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

  return {
    slug,
    folderName: targetFolder,
    title: attributes.title,
    date: attributes.date || (match ? match[1] : new Date().toISOString().split('T')[0]),
    author: attributes.author || 'CISPOLY Team',
    excerpt: attributes.excerpt || '',
    content: body,
    categories: attributes.categories || [],
    tags: attributes.tags || [],
    coverImage: attributes.coverImage,
  };
};
