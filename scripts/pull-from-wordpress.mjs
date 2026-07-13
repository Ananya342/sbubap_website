/**
 * Pull page content from WordPress into local files.
 *
 * Usage: npm run pull
 *
 * Saves each page's HTML content to: content/pages/{slug}.html
 * Saves a manifest to: content/pages.json
 */

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SITE = 'https://you.stonybrook.edu/sbubap';
const API = `${SITE}/wp-json/wp/v2/pages`;
const OUT_DIR = 'content/pages';

async function fetchAllPages() {
  const pages = [];
  let page = 1;

  while (true) {
    const res = await fetch(`${API}?per_page=100&page=${page}`);
    if (!res.ok) break;

    const batch = await res.json();
    if (!batch.length) break;

    pages.push(...batch);
    page++;
  }

  return pages;
}

async function main() {
  console.log('Pulling pages from WordPress...\n');

  await mkdir(OUT_DIR, { recursive: true });

  const pages = await fetchAllPages();
  const manifest = [];

  for (const p of pages) {
    const slug = p.slug === 'home' ? 'index' : p.slug;
    const filePath = join(OUT_DIR, `${slug}.html`);

    const header = `<!--\n  WordPress Page: ${p.title.rendered}\n  Live URL: ${p.link}\n  Last modified: ${p.modified}\n  Page ID: ${p.id}\n-->\n\n`;

    await writeFile(filePath, header + p.content.rendered, 'utf8');

    manifest.push({
      id: p.id,
      slug: p.slug,
      title: p.title.rendered,
      link: p.link,
      modified: p.modified,
      localFile: filePath,
    });

    console.log(`  ✓ ${p.title.rendered} → ${filePath}`);
  }

  await writeFile('content/pages.json', JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`\nDone. ${pages.length} pages saved to content/pages/`);
  console.log('Edit those files in Cursor, then copy changes back into WordPress.');
}

main().catch((err) => {
  console.error('Pull failed:', err.message);
  process.exit(1);
});
