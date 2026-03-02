import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://cispoly.netlify.app';
const DIST_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_BLOG_DIR = path.resolve(__dirname, '../public/blog');

const staticRoutes = [
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

function getBlogSlugs() {
  if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
    console.warn(`Warning: Blog directory not found at ${PUBLIC_BLOG_DIR}`);
    return [];
  }
  
  try {
    const entries = fs.readdirSync(PUBLIC_BLOG_DIR, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => {
        // Extract slug from YYYY-MM-DD-slug format
        const match = entry.name.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
        return match ? match[2] : entry.name;
      });
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

function generateSitemap() {
  console.log('Generating sitemap...');
  
  const blogSlugs = getBlogSlugs();
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static routes
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  // Add blog routes
  blogSlugs.forEach(slug => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  if (!fs.existsSync(DIST_DIR)) {
    console.warn('Dist directory does not exist. Creating it...');
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
}

generateSitemap();
