const fs = require('fs');

const supabaseUrl  = process.env.SUPABASE_URL;
const supabaseAnon = process.env.SUPABASE_ANON;

if (!supabaseUrl || !supabaseAnon) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON environment variables');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');

html = html
  .replace("'YOUR_SUPABASE_URL'",  `'${supabaseUrl}'`)
  .replace("'YOUR_SUPABASE_ANON_KEY'", `'${supabaseAnon}'`);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);

console.log('Built successfully — credentials injected.');
