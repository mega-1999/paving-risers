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
    image: `/images/manhole_riser/adjustable_manhole_riser_low_screw_coated.png`,
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
      
      ### Heavy Duty Highway Load Rating
      Our steel catch basins are engineered to withstand extreme wheel loads. Because fabricated steel can be precision-welded, we can custom-build sizes that traditional cast iron foundries simply cannot mass-produce.

      Whether you need an oversized curb inlet or a multi-grate system, fabricated mild steel is the modern solution for resilient roadways.
    `,
    date: "July 28, 2026",
    author: "Technical Sales",
    image: `/images/catch_basin_riser/square_catch_basin_riser_coated.png`,
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
    image: `/images/catch_basin_riser/rectangle_catch_basin_riser_cast_iron.png`,
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
    image: `/images/custom_riser/d_shape_riser_steel.png`,
    category: "Materials"
  },
  {
    id: "5",
    slug: "custom-paving-riser-fabrication-standards",
    title: "Custom Paving Riser Fabrication: Meeting Exact Jobsite Specs",
    excerpt: "Learn how tailored riser dimensions, non-standard clear openings, and heavy-duty load ratings solve complex municipal paving challenges.",
    content: `
      ## Precision Fabrication for Non-Standard Utility Frames
      No two municipal paving projects are identical. Utility frames installed decades ago often feature non-standard clear openings, irregular diameters, and offset seats. Standard off-the-shelf risers fail to deliver an exact fit in these environments.
      
      ### Custom Engineering Workflow
      - **Exact Measurements**: Custom fabricated to fit any diameter from 14" up to 60"+ clear openings.
      - **Heavy Load Resistance**: Heavy-duty structural steel and ductile iron configurations engineered for high-impact traffic.
      - **Tailored Rises**: Precision height increments starting at 1/4" up to 6" for smooth asphalt transitions.

      When standard utility castings don't match your jobsite specifications, custom paving riser fabrication ensures a zero-rocking, permanent installation.
    `,
    date: "May 30, 2026",
    author: "Manufacturing R&D",
    image: `/images/manhole_riser/adjustable_manhole_riser_coated.png`,
    category: "Custom Engineering"
  },
  {
    id: "6",
    slug: "eliminating-manhole-rattle-and-asphalt-cracking",
    title: "Eliminating Manhole Rattle & Premature Asphalt Cracking",
    excerpt: "How proper riser seating and mechanical expansion prevent utility frame movement, road noise, and surrounding asphalt failure.",
    content: `
      ## The Root Cause of Utility Frame Rattle
      Loose utility covers and rattling manhole frames are more than a public noise nuisance—they are an early indicator of structural asphalt failure. When heavy truck traffic strikes an unseated frame, dynamic impact energy radiates outwards into the surrounding pavement, causing radial cracking and pothole formation.
      
      ### Mechanical Locking Solutions
      - **Solid Seat Engagement**: Heavy-duty riser seating transfers wheel loads directly into the main utility structure rather than the top asphalt lift.
      - **Vibration Dampening**: Mechanical expansion bolts prevent lateral shifting under high-speed traffic.
      - **Waterproofing Fit**: Eliminates water infiltration beneath the paving grade, preventing freeze-thaw subbase erosion.

      Investing in properly seated paving risers extends pavement life cycles by up to 40% while keeping municipal roads quiet and smooth.
    `,
    date: "May 14, 2026",
    author: "Quality Assurance",
    image: `/images/catch_basin_riser/rectangle_catch_basin_riser_coated.png`,
    category: "Maintenance"
  }
];
