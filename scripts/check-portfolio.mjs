import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'public');
const errors = [];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(entryPath);
    return /\.(ts|tsx|css)$/.test(entry.name) ? [entryPath] : [];
  }));
  return nested.flat();
}

const sourceFiles = await collectFiles(sourceRoot);
const indexedFiles = [...sourceFiles, path.join(root, 'index.html')];
const forbiddenPatterns = [
  { label: 'placeholder username', pattern: /yourusername/i },
  { label: 'placeholder email', pattern: /contact@example\.com/i },
  { label: 'placeholder copy', pattern: /lorem ipsum/i },
  { label: 'broken character encoding', pattern: /â€”|â€“|ðŸ|âœ|â/ },
];

for (const file of indexedFiles) {
  const content = await readFile(file, 'utf8');
  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(content)) errors.push(`${label} found in ${path.relative(root, file)}`);
  }
}

const portfolioSource = await readFile(path.join(sourceRoot, 'data', 'portfolio.ts'), 'utf8');
const referencedAssets = [...portfolioSource.matchAll(/(?:image|resume):\s*['"](\/[^'"]+)['"]/g)]
  .map((match) => match[1]);

for (const asset of referencedAssets) {
  try {
    await access(path.join(publicRoot, asset.replace(/^\//, '')));
  } catch {
    errors.push(`missing public asset: ${asset}`);
  }
}

const indexHtml = await readFile(path.join(root, 'index.html'), 'utf8');
for (const required of ['name="description"', 'property="og:title"', 'rel="canonical"', 'application/ld+json']) {
  if (!indexHtml.includes(required)) errors.push(`index.html is missing ${required}`);
}

if (errors.length) {
  console.error('\nPortfolio content checks failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Portfolio content checks passed (${indexedFiles.length} files, ${referencedAssets.length} assets).`);
