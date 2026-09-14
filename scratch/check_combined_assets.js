const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Match paths like /images/... or /videos/... or /glbs/...
  const regex = /\/(images|videos|glbs|catalog)\/[a-zA-Z0-9_\-\.\/]+/g;
  const matches = content.match(regex) || [];

  const results = [];
  matches.forEach(m => {
    // Remove leading slash to check against public/
    const rel = m.replace(/^\//, '');
    const full = path.join('public', rel);
    results.push({
      url: m,
      exists: fs.existsSync(full)
    });
  });
  return results;
}

console.log('=== CombinedRiserSolutions.tsx ===');
const res = checkFile('app/components/CombinedRiserSolutions.tsx');
res.forEach(r => {
  console.log(r.exists ? 'OK  ' : 'FAIL', r.url);
});
