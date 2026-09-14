const fs = require('fs');
const path = require('path');

// 1. Get all actual files in public/
function getPublicFiles() {
  function scan(dir, base = dir) {
    let list = [];
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        list = list.concat(scan(full, base));
      } else {
        list.push(path.relative(base, full).replace(/\\/g, '/'));
      }
    });
    return list;
  }
  return scan('public');
}

const publicFiles = getPublicFiles();
console.log(`Found ${publicFiles.length} actual files in public/`);

// Map by filename for easy resolution
const filenameToPath = {};
publicFiles.forEach(pf => {
  const fname = path.basename(pf);
  filenameToPath[fname] = pf;
});

// Also map old known names to new paths
const oldToNew = {
  'Sqaure_Riser_Raw_Finish.610.png': 'images/catch_basin_riser/square_catch_basin_riser_iron.png',
  'MEGA-PAVING-RISERS-CATALOGS.pdf': 'catalog/MEGA_PAVING_RISERS_CATALOGS.pdf',
  'MEGA PAVING RISERS CATALOGS.pdf': 'catalog/MEGA_PAVING_RISERS_CATALOGS.pdf',
  'Two_Grate_Riser_Animation.mp4': 'videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4',
  'adjustable_manhole_riser_installation.mp4': 'videos/manhole_riser/fixed_manhole_riser_installation.mp4',
  'fixed_manhole_riser_Black_coated.mp4': 'videos/manhole_riser/fixed_manhole_riser_installation.mp4',
  'dot-pattern.svg': 'images/branding/favicon.svg'
};

function cleanContent(content) {
  let cleaned = content;

  // 1. Clean repeated directory prefixes (e.g. /images/tools/images/tools/ -> /images/tools/)
  const categories = [
    'images/branding', 'images/manhole_riser', 'images/catch_basin_riser',
    'images/curb_inlet_riser', 'images/custom_riser', 'images/valve_box_riser',
    'images/tools', 'images/trash_racks', 'images/standards', 'images/detectable_plates',
    'images/fabricated_steel', 'images/gallery', 'images/site_previews', 'images/animations',
    'images/two_grate_combo_riser',
    'videos/manhole_riser', 'videos/catch_basin_riser', 'videos/curb_inlet_riser',
    'videos/valve_box_riser', 'videos/custom_riser', 'videos/manufacturing',
    'videos/animations', 'videos/app_showcase',
    'images', 'videos', 'glbs', 'catalog'
  ];

  categories.forEach(cat => {
    // Repeat replacement until no more duplicates
    const double = `/${cat}/${cat}/`;
    const single = `/${cat}/`;
    while (cleaned.includes(double)) {
      cleaned = cleaned.split(double).join(single);
    }
    const doubleImages = `/${cat}/images/`;
    if (cat.startsWith('images/')) {
      while (cleaned.includes(doubleImages)) {
        cleaned = cleaned.split(doubleImages).join('/images/');
      }
    }
    const doubleVideos = `/${cat}/videos/`;
    if (cat.startsWith('videos/')) {
      while (cleaned.includes(doubleVideos)) {
        cleaned = cleaned.split(doubleVideos).join('/videos/');
      }
    }
  });

  // Generic recursive reduction for any /(dir)/(dir)/
  cleaned = cleaned.replace(/\/([a-zA-Z0-9_\-]+)\/\1\//g, '/$1/');
  cleaned = cleaned.replace(/\/([a-zA-Z0-9_\-]+)\/\1\//g, '/$1/');

  // Explicit replacements for known old paths
  for (const [oldVal, newVal] of Object.entries(oldToNew)) {
    cleaned = cleaned.split(oldVal).join(newVal);
  }

  return cleaned;
}

function scanAndFix() {
  function scan(dir) {
    let list = [];
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        if (!['.git', '.next', 'node_modules', 'public', 'scratch'].includes(f)) {
          list = list.concat(scan(full));
        }
      } else {
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.md'].includes(path.extname(f))) {
          list.push(full);
        }
      }
    });
    return list;
  }

  const codeFiles = scan(path.resolve('.'));
  let fixedCount = 0;

  codeFiles.forEach(cf => {
    const original = fs.readFileSync(cf, 'utf-8');
    const cleaned = cleanContent(original);
    if (cleaned !== original) {
      fs.writeFileSync(cf, cleaned, 'utf-8');
      fixedCount++;
    }
  });

  console.log(`Cleaned asset paths in ${fixedCount} code files.`);
}

scanAndFix();
