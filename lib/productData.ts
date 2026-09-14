export interface ProductImage {
    label: string;
    src: string;
}

export interface ProductSpecs {
    material: string;
    loadRating: string;
    standardSizes: string;
    heights: string;
    coating: string;
}

export interface Product {
    id: string;
    slug: string;
    title: string;
    description: string;
    materials: string[];
    specs: ProductSpecs;
    features: string[];
    images: ProductImage[];
}

export const PRODUCT_DATA: Product[] = [
    {
        id: 'round',
        slug: 'round-risers',
        title: 'Round Paving Risers',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Standard round risers for manholes and catch basins.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'Heavy-Duty Paving Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous Asphaltic Coated / Iron Finish'
        },
        features: ['Paving-Adjust™ Expansion system', 'No excavation required', 'Designed to meet applicable DOT requirements', 'Stackable design'],
        images: [
            { label: 'Iron Finish', src: `/images/manhole_riser/round_manhole_riser_iron_finish.png` },
            { label: 'Coated Finish', src: `/images/manhole_riser/fixed_round_manhole_riser_coated.png` },
            { label: 'Adjustable Coated', src: `/images/manhole_riser/adjustable_manhole_riser_coated.png` },
            { label: 'Low Screw Coated', src: `/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png` }
        ]
    },
    {
        id: 'round-with-screws',
        slug: 'round-risers-with-screws',
        title: 'Round Risers with Screws',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Round risers featuring integrated set screws for precise height adjustment and level alignment without shims.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'Heavy-Duty Paving Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous Asphaltic Coated / Iron Finish'
        },
        features: ['Integrated Leveling Screws', 'No excavation required', 'Designed to meet applicable DOT requirements', 'Stackable design'],
        images: [
            { label: 'Screws 3', src: `/images/manhole_riser/round_manhole_riser_with_screws.png` },
            { label: 'Iron Finish', src: `/images/manhole_riser/round_manhole_riser_with_screws_iron_finish.png` },
        ]
    },
    {
        id: 'square',
        slug: 'square-risers',
        title: 'Square Risers',
        materials: ['Steel', 'Cast Iron'],
        description: 'Designed specifically for square catch basin frames and electrical vaults in urban environments.',
        specs: {
            material: 'Fabricated Steel or Cast Iron',
            loadRating: 'Commercial Load Rated',
            standardSizes: '24"x24", 30"x30", 36"x36"',
            heights: '1.5" to 4"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Perfect for utility vaults', 'Reinforced corners', 'Anti-slip surface compatibility'],
        images: [
            { label: 'Coated Finish', src: `/images/catch_basin_riser/square_catch_basin_riser_coated.png` },
            { label: 'Iron Finish', src: `/images/catch_basin_riser/square_catch_basin_riser_iron.png` }
        ]
    },
    {
        id: 'rect',
        slug: 'rectangle-risers',
        title: 'Rectangle Risers',
        materials: ['Fabricated Steel', 'Cast Iron'],
        description: 'Durable rectangular solutions for larger storm drainage structures and curb inlets.',
        specs: {
            material: 'Heavy Duty Fabricated Steel',
            loadRating: 'Load Rating: See individual product specification Traffic Rated',
            standardSizes: '24"x36", 24"x48" (Custom Available)',
            heights: '2" to 8"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Precision welded seams', 'Adjustable height bolts', 'Curb-side compatible'],
        images: [
            { label: 'Rectangle Riser', src: `/images/catch_basin_riser/rectangle_catch_basin_riser.png` },
            { label: 'Iron Finish', src: `/images/catch_basin_riser/rectangle_catch_basin_riser_iron.png` },
            { label: 'Coated Finish', src: `/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png` },
            { label: 'With Cast Iron', src: `/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png` },
            { label: 'Riser 1 Right', src: `/images/catch_basin_riser/rectangle_catch_basin_riser_right.png` },
            { label: 'Riser 2 Iron', src: `/images/curb_inlet_riser/curb_inlet_riser_iron.png` },
            { label: 'Riser 3 Iron', src: `/images/curb_inlet_riser/curb_inlet_riser_iron_offset.png` },
            { label: 'Riser 4 Iron', src: `/images/curb_inlet_riser/curb_inlet_riser_heavy_iron.png` },
            { label: 'Riser 4 Coated A', src: `/images/curb_inlet_riser/curb_inlet_riser_coated_1.png` },
            { label: 'Riser 4 Coated B', src: `/images/curb_inlet_riser/curb_inlet_riser_coated_2.png` },
            { label: 'Riser 4 Coated C', src: `/images/curb_inlet_riser/curb_inlet_riser_coated_3.png` }
        ]
    },
    {
        id: 'd-shape',
        slug: 'd-shape-risers',
        title: 'D-Shape Risers',
        materials: ['Steel', 'Cast Iron'],
        description: 'Specialized D-profile risers engineered specifically for curb inlet manholes.',
        specs: {
            material: 'Cast Iron or Ductile Iron',
            loadRating: 'Heavy Duty Traffic Rated',
            standardSizes: 'Fits standard 24" & 30" D-frames',
            heights: '1" to 4"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Flush curb alignment', 'No-shift installation', 'Storm-water optimized'],
        images: [
            { label: 'D-Shape Riser', src: `/images/custom_riser/d_shape_paving_riser.png` },
            { label: 'With Iron', src: `/images/custom_riser/d_shape_riser_iron.png` },
            { label: 'With Cast Iron', src: `/images/custom_riser/d_shape_riser_cast_iron.png` },
            { label: 'With Steel', src: `/images/custom_riser/d_shape_riser_steel.png` }
        ]
    },
    {
        id: 'paving-riser-screws',
        slug: 'paving-risers-with-screws',
        title: 'Paving Risers with Screws',
        materials: ['Ductile Iron', 'Cast Iron'],
        description: 'Heavy duty riser systems featuring secure locking set screws for high traffic roadways and highways.',
        specs: {
            material: 'Heavy Duty Ductile Iron or Fabricated Steel',
            loadRating: 'Paving Standard HS-25 Traffic Rated',
            standardSizes: '24", 30", 36"',
            heights: '1.5" to 8"',
            coating: 'Anti-corrosion coated / painted'
        },
        features: ['Heavy-Duty Set Screws', 'Anti-skid design', 'Perfect highway grade alignment'],
        images: [
            { label: 'Screws Option 2', src: `/images/manhole_riser/round_manhole_riser_with_screws.png` }
        ]
    }
];
