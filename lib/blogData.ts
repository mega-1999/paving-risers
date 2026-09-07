export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    slug: "the-ultimate-guide-to-adjustable-risers",
    title: "The Ultimate Guide to Adjustable Risers",
    excerpt: "Discover how adjustable paving risers can eliminate costly road reconstruction and dramatically reduce closure times.",
    content: `
      ## Why Choose Adjustable Risers?
      When resurfacing roads, municipalities and paving contractors often struggle with aligning existing manholes to the new grade. Adjustable risers offer a seamless mechanical expansion mechanism that locks directly into the existing frame.
      
      ### Key Benefits
      - **Mechanical Expansion**: Eliminates the need for concrete collars or welding.
      - **Time Savings**: Installations drop from hours to minutes.
      - **Longevity**: Hot-dipped galvanized or powder-coated options ensure decades of corrosion resistance.

      If your crew is looking to maximize their daily paving footprint, transitioning to our adjustable models is the ultimate verified solution.
    `,
    date: "August 12, 2026",
    author: "Engineering Team",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_low_screw_coated_finish.809.png`,
    category: "Guides"
  },
  {
    id: "2",
    slug: "why-steel-catch-basins-outperform",
    title: "Why Fabricated Steel Catch Basins Outperform Cast Iron",
    excerpt: "Explore the structural advantages of choosing mild steel fabricated catch basins for storm drainage infrastructure.",
    content: `
      ## The Structural Advantage of Mild Steel
      While cast iron has historically been the standard for drainage infrastructure, fabricated mild steel is rapidly taking over. Why? Mild steel offers superior tensile strength and flexibility under extreme load stresses.
      
      ### AASHTO H-20 / HS-20 Compliance
      Our steel catch basins are engineered to exceed strict AASHTO load ratings. Because fabricated steel can be precision-welded, we can custom-build sizes that traditional cast iron foundries simply cannot mass-produce.

      Whether you need an oversized curb inlet or a multi-grate system, fabricated mild steel is the modern solution for resilient roadways.
    `,
    date: "July 28, 2026",
    author: "Technical Sales",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Square_riser_coated_finish.807.png`,
    category: "Technical Analysis"
  },
  {
    id: "3",
    slug: "minimizing-road-closure-times",
    title: "Minimizing Road Closure Times with Quick-Install Risers",
    excerpt: "A look at the economic and logistical benefits of deploying precision-engineered risers on high-traffic municipal roads.",
    content: `
      ## Time is Money on the Asphalt
      Every minute a road is closed to traffic costs municipalities money and causes public frustration. Traditional methods of excavating, raising, and re-pouring concrete around utility frames are notoriously slow.
      
      ### The Quick-Install Paradigm
      By utilizing our precision-engineered manhole and catch basin risers, paving crews can elevate utility access points in mere minutes. The mechanical expansion ensures a lock-tight fit without the cure time of concrete.

      **Verified Results**: Crews have reported up to a 60% reduction in intersection closure times after switching to our quick-install models.
    `,
    date: "July 05, 2026",
    author: "Project Management",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_with_cast_iron.637.png`,
    category: "Case Studies"
  },
  {
    id: "4",
    slug: "importance-of-corrosion-resistant-finishes",
    title: "The Importance of Corrosion-Resistant Finishes",
    excerpt: "Water-based bitumen, hot-dip galvanizing, and powder coatings: which finish is right for your environment?",
    content: `
      ## Protecting the Investment
      Underground utility infrastructure is subjected to harsh environments, including road salts, acidic soils, and constant moisture. Choosing the right coating is critical for the lifespan of your paving risers.
      
      ### Coating Options
      - **Water-Based Bitumen**: An environmentally friendly standard that provides excellent basic moisture barriers.
      - **Hot-Dip Galvanizing**: The gold standard for extreme environments. The metallurgical bond prevents rust from creeping.
      - **Powder Coating**: Provides a durable, thick aesthetic finish that resists chipping and impacts during installation.

      Choosing the right finish ensures that your risers outlast the surrounding asphalt.
    `,
    date: "June 19, 2026",
    author: "Materials Engineering",
    image: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_with_Steel.634.png`,
    category: "Materials"
  }
];
