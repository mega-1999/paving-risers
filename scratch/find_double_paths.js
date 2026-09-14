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
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css'].includes(path.extname(file))) {
        list.push(full);
      }
    }
  });
  return list;
}

const files = scanDir(path.resolve('.'));
const issues = [];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let original = content;

  // Fix /glbs/glbs/
  content = content.replace(/\/glbs\/glbs\//g, '/glbs/');
  // Fix /images/images/
  content = content.replace(/\/images\/images\//g, '/images/');
  // Fix /videos/videos/
  content = content.replace(/\/videos\/videos\//g, '/videos/');
  // Fix /catalog/catalog/
  content = content.replace(/\/catalog\/catalog\//g, '/catalog/');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8');
    issues.push(path.relative('.', f));
  }
});

console.log('Fixed double path issues in files:', issues);
