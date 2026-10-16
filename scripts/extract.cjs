const fs = require('fs');
const path = require('path');

const collections = ['reviews', 'dormitories', 'nightlife', 'motorbikes'];
const result = {};

collections.forEach(col => {
  const dir = path.join('src', 'content', col);
  const files = fs.readdirSync(dir);
  result[col] = files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const frontmatter = raw.split('---')[1] || '';
    const lines = frontmatter.split('\n');
    const obj = { slug: file.replace('.md', '') };
    lines.forEach(line => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (key && !key.startsWith('-')) {
          obj[key] = val;
        }
      }
    });
    return obj;
  });
});

fs.writeFileSync('scripts/extracted_content.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Done extracting metadata, count:', Object.keys(result).map(k => k + ':' + result[k].length).join(', '));
