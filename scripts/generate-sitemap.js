import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fm from 'front-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.VITE_APP_URL || 'https://cispoly.netlify.app';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DIST_DIR = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/ciscer',
  '/cisendo',
  '/cisova',
  '/about',
  '/contact',
  '/guides/cervical',
  '/guides/endo',
  '/guides/ovarian',
  '/blog'
];

function getBlogPosts() {
  const blogDir = path.join(PUBLIC_DIR, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  
  const posts = [];
  try {
    const folders = fs.readdirSync(blogDir).filter(file => {
      try {
        return fs.statSync(path.join(blogDir, file)).isDirectory();
      } catch (e) {
        return false;
      }
    });
    
    for (const folder of folders) {
      const folderPath = path.join(blogDir, folder);
      // Try to find index.en.md, then index.md
      let mdPath = path.join(folderPath, 'index.en.md');
      if (!fs.existsSync(mdPath)) {
          mdPath = path.join(folderPath, 'index.md');
      }
      
      if (fs.existsSync(mdPath)) {
          const content = fs.readFileSync(mdPath, 'utf8');
          const { attributes } = fm(content);
          
          // Extract slug from folder name if needed (YYYY-MM-DD-slug)
          const match = folder.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
          const slug = match ? match[2] : folder;
          const date = attributes.date ? new Date(attributes.date).toISOString().split('T')[0] : (match ? match[1] : new Date().toISOString().split('T')[0]);
          
          posts.push({
              url: `/blog/${slug}`,
              title: attributes.title || 'Blog Post',
              date: date,
              excerpt: attributes.excerpt || ''
          });
      }
    }
  } catch (e) {
    console.error('Error reading blog directory:', e);
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function generateSitemapAndRSS() {
  console.log('Generating Sitemap and RSS Feed...');
  const blogPosts = getBlogPosts();
  
  // SITEMAP
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${BASE_URL}${post.url}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  // RSS FEED
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
 <title>CISPOLY Blog</title>
 <description>Latest updates, research findings, and insights into methylation-based cancer triage.</description>
 <link>${BASE_URL}</link>
 <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
 <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
 <pubDate>${new Date().toUTCString()}</pubDate>
 <ttl>1800</ttl>
 ${blogPosts.map(post => `
 <item>
  <title><![CDATA[${post.title}]]></title>
  <description><![CDATA[${post.excerpt}]]></description>
  <link>${BASE_URL}${post.url}</link>
  <guid>${BASE_URL}${post.url}</guid>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
 </item>`).join('')}
</channel>
</rss>`;

  if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // Write Sitemap
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  
  // Write RSS
  fs.writeFileSync(path.join(DIST_DIR, 'feed.xml'), rss);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), rss);
  
  console.log(`Generated sitemap.xml and feed.xml in ${DIST_DIR}`);
  console.log(`Included ${blogPosts.length} blog posts.`);
}

generateSitemapAndRSS();
