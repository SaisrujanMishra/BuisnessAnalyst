import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const serverDirectory = path.join(process.cwd(), 'dist', 'server');
await mkdir(serverDirectory, { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || url.pathname.includes('.')) return response;

    const fallback = new Request(new URL('/index.html', url), request);
    return env.ASSETS.fetch(fallback);
  },
};
`;

await writeFile(path.join(serverDirectory, 'index.js'), worker, 'utf8');
console.log('Prepared Cloudflare-compatible Sites entrypoint.');
