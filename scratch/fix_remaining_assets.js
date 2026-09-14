const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
  // Double prefix cleanup
  [/\/videos\/catch_basin_animation\/videos\/catch_basin_riser\//g, '/videos/catch_basin_riser/'],
  [/\/videos\/catch_basin_animation\/videos\/animations\//g, '/videos/animations/'],
  [/\/videos\/catch_basin_animation\/Two_Grate_Riser_Animation\.mp4/g, '/videos/catch_basin_riser/two_grate_catch_basin_riser_animation.mp4'],
  [/\/videos\/Curb_Inlet_riser\/videos\/curb_inlet_riser\//g, '/videos/curb_inlet_riser/'],
  [/\/videos\/Manhole_riser\/videos\/manhole_riser\//g, '/videos/manhole_riser/'],
  [/\/videos\/Manhole_riser\/adjustable_manhole_riser_black_coated\.mp4/g, '/videos/manhole_riser/adjustable_manhole_riser_steel.mp4'],
  [/\/videos\/Videos\/Catch[^\"]*/g, '/videos/catch_basin_riser/catch_basin_riser_overview.mp4'],
  [/\/images\/images\/branding\//g, '/images/branding/'],
  [/\/images\/catch_basin_riser\/images\/catch_basin_riser\//g, '/images/catch_basin_riser/'],
  [/\/catalog\/catalog\//g, '/catalog/'],

  // Old raw finish names to existing files
  [/Round_Riser_with_screw_Raw_Finish\.617\.png/g, 'round_manhole_riser_with_screws_iron_finish.png'],
  [/Round_Riser_Raw_Finish\.613\.png/g, 'round_manhole_riser_iron_finish.png'],
  [/Rectangle_Paving_Riser_2_Raw_Finish\.624\.png/g, 'curb_inlet_riser_iron.png'],
  [/D_shape_Riser_Raw_Finish\.602\.png/g, 'd_shape_riser_iron.png'],
  [/Rectangle_Riser_Raw_Finish\.606\.png/g, 'rectangle_catch_basin_riser_iron.png'],
  [/Rectangle_Paving_Riser_1\.619\.png/g, 'rectangle_catch_basin_riser_right.png'],
  [/mp1\.8\.png/g, 'manhole_cover_hook.png'],
  [/mpCHOOL\.7\.png/g, 'chisel_tool.png'],
  [/\/images\/Custom_Riser\//g, '/images/custom_riser/'],
  [/\/images\/Manhole_riser\//g, '/images/manhole_riser/']
];

function scanDir(dir) {
  let list = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!['.git', '.next', 'node_modules', 'public', 'scratch'].includes(f)) {
        list = list.concat(scanDir(full));
      }
    } else {
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.md'].includes(path.extname(f))) {
        list.push(full);
      }
    }
  });
  return list;
}

const files = scanDir(path.resolve('.'));
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let original = content;

  REPLACEMENTS.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8');
    count++;
  }
});

console.log(`Cleaned remaining paths in ${count} files.`);
