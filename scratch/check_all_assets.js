const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  let list = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!['.git', '.next', 'node_modules', 'public', 'scratch'].includes(file)) {
        list = list.concat(scanDir(full));
      }
    } else {
      if (['.ts', '.tsx'].includes(path.extname(file))) {
        list.push(full);
      }
    }
  });
  return list;
}

const files = scanDir(path.resolve('.'));
const failures = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf-8');
  const regex = /\/(images|videos|glbs|catalog)\/[a-zA-Z0-9_\-\.\/]+/g;
  const matches = content.match(regex) || [];

  matches.forEach(m => {
    const rel = m.replace(/^\//, '');
    const full = path.join('public', rel);
    if (!fs.existsSync(full)) {
      failures.push({
        file: path.relative('.', f),
        url: m
      });
    }
  });
});

console.log('Total failed asset links found:', failures.length);
console.log(JSON.stringify(failures, null, 2));
