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
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_iron_Finish.614.png` },
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/fixed_round_riser_.810.png` },
            { label: 'Adjustable Coated', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_coated_finish.808.png` },
            { label: 'Low Screw Coated', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_low_screw_coated_finish.809.png` }
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
            { label: 'Screws 3', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/paving_riser_with_screws.676.png` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_with_screw_iron_Finish.615.png` },
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
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Square_riser_coated_finish.807.png` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_iron.609.png` }
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
            { label: 'Rectangle Riser', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_riser.811.png` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_iron.608.png` },
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Paving_Riser_4_coated_Finish.813.png` },
            { label: 'With Cast Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_with_cast_iron.637.png` },
            { label: 'Riser 1 Right', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Paving_Riser_1_Right.622.png` },
            { label: 'Riser 2 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_2_Iron.623.png` },
            { label: 'Riser 3 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_3_iron.628.png` },
            { label: 'Riser 4 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_4_iron.629.png` },
            { label: 'Riser 4 Coated A', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_4_coated_Finish.814.png` },
            { label: 'Riser 4 Coated B', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_4_coated_Finish.815.png` },
            { label: 'Riser 4 Coated C', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/curb_inlet_riser/Rectangle_Paving_Riser_4_coated_Finish.816.png` }
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
            { label: 'D-Shape Riser', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_riser.812.png` },
            { label: 'With Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Rise__with_Iron.635.png` },
            { label: 'With Cast Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_with_cast_iron.636.png` },
            { label: 'With Steel', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_with_Steel.634.png` }
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
            { label: 'Screws Option 2', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/paving_riser_with_screws.676.png` }
        ]
    }
];
