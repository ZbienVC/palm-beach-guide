// data/guide.ts
// ─────────────────────────────────────────────────────────────────────────────
// PALM BEACH LOCAL GUIDE — Content Data File
//
// This is the ONLY file you need to edit to update recommendations.
// Change names, descriptions, links, and categories freely.
// The UI will update automatically.
// ─────────────────────────────────────────────────────────────────────────────

export interface QuickAction {
  label: string;
  icon: string;           // Lucide icon name
  emoji: string;          // Fallback emoji displayed in the badge
  href: string;
  accent?: string;        // Tailwind color class for button bg
}

export interface Restaurant {
  name: string;
  category: string;
  description: string;
  why: string;
  area?: string;
  mapsUrl: string;
  hostNote?: string;
  reservationTip?: string;
  priceRange?: string;    // e.g. '$' | '' | '$' | ''
  walkMins?: number;      // minutes walk from property
  driveMins?: number;     // minutes drive from property
}

export interface Activity {
  title: string;
  description: string;
  why: string;
  bestTime?: string;
  mapsUrl: string;
}

export interface Attraction {
  name: string;
  description: string;
  why: string;
  mapsUrl: string;
  tip?: string;
}

export interface NightlifeSpot {
  name: string;
  vibe: string;
  bestFor: string;
  reservationNote?: string;
  mapsUrl: string;
}

export interface HiddenGem {
  name: string;
  description: string;
  why: string;
  mapsUrl?: string;
}

export interface PersonalThought {
  label: string;
  place: string;
  note: string;
  mapsUrl?: string;
}

export interface Photo {
  src: string;         // URL or /images/filename.jpg (drop files in public/images/)
  alt: string;         // accessibility description
  caption?: string;    // optional caption shown in lightbox
}

export interface PhotoGallery {
  apartmentPhotos: Photo[];
  areaPhotos: Photo[];
}

export interface HouseInfo {
  wifi: { name: string; password: string };
  parking: string;
  checkoutTime: string;
  checkoutReminders: string[];
  importantNotes: string[];
  contactHost: string;
  emergency: string;
}

export interface GuideData {
  property: {
    name: string;
    address: string;
    unit?: string;
    city: string;
    mapsUrl: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    hostIntro: string;
  };
  quickActions: QuickAction[];
  restaurants: Restaurant[];
  thingsToDo: Activity[];
  attractions: Attraction[];
  nightlife: NightlifeSpot[];
  hiddenGems: HiddenGem[];
  personalThoughts: PersonalThought[];
  photos: PhotoGallery;
  houseInfo: HouseInfo;
}

// ─────────────────────────────────────────────────────────────────────────────
// YOUR GUIDE DATA — Edit everything below this line
// ─────────────────────────────────────────────────────────────────────────────

export const guide: GuideData = {
  property: {
    name: "The Okeechobee Residences",
    address: "651 Okeechobee Blvd, Unit 210",
    city: "West Palm Beach, FL 33401",
    mapsUrl: "https://maps.google.com/?q=651+Okeechobee+Blvd+West+Palm+Beach+FL+33401",
  },
  hero: {
    greeting: "Welcome to West Palm Beach",
    tagline: "Your curated local guide — staywestpalm.now",
    hostIntro:
      "I've spent years exploring this beautiful stretch of Florida and handpicked every spot in this guide. Whether you want a slow beach morning, a perfect dinner reservation, or a hidden gem most visitors miss — it's all here. Enjoy every moment.",
  },

  quickActions: [
    {
      label: "Google Maps",
      icon: "MapPin",
      emoji: "📍",
      href: "https://maps.google.com/?q=651+Okeechobee+Blvd+West+Palm+Beach+FL+33401",
      accent: "bg-ocean-500",
    },
    {
      label: "Call Uber",
      icon: "Car",
      emoji: "🚗",
      href: "https://m.uber.com/ul/",
      accent: "bg-slate-900",
    },
    {
      label: "Beach",
      icon: "Waves",
      emoji: "🏖️",
      href: "#things-to-do",
      accent: "bg-ocean-400",
    },
    {
      label: "Your Stay",
      icon: "Home",
      emoji: "🏠",
      href: "#house-info",
      accent: "bg-palm-500",
    },
    {
      label: "Reservations",
      icon: "CalendarCheck",
      emoji: "📅",
      href: "https://resy.com",
      accent: "bg-sand-400",
    },
    {
      label: "Contact Host",
      icon: "MessageCircle",
      emoji: "💬",
      href: "sms:+15615550100",
      accent: "bg-rose-400",
    },
  ],

  restaurants: [
    // ── Palm Beach island (walk across Okeechobee Bridge ~10 min to reach island) ──
    {
      name: "PB Catch",
      category: "Best Overall",
      priceRange: "$$$",
      description: "Fresh seafood with a coastal-chic vibe right on the water",
      why: "The raw bar alone is worth the visit. Best seafood on the island.",
      area: "Palm Beach – north island",
      mapsUrl: "https://maps.google.com/?q=PB+Catch+Palm+Beach",
      reservationTip: "Book ahead for dinner",
      walkMins: 23,
      driveMins: 7,
    },
    {
      name: "Harry\u2019s",
      category: "Upscale",
      description: "Upscale coastal restaurant with an impressive wine list and refined American menu",
      why: "One of the finest dining experiences in the area. Polished service, beautiful room, exceptional food.",
      area: "Palm Beach – north island",
      mapsUrl: "https://maps.app.goo.gl/T6QDisX4BZYR5YEy8",
      priceRange: "$$$$",
      reservationTip: "Book well in advance \u2014 very popular",
      hostNote: "Dress nicely. This is a special occasion spot that actually delivers.",
      walkMins: 25,
      driveMins: 7,
    },
    {
      name: "Sprinkles",
      category: "Dessert",
      description: "The original cupcake bakery — iconic and always satisfying",
      why: "If you've never had a Sprinkles cupcake, this is the original. 24-hour vending machine outside.",
      area: "Royal Poinciana Way, Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Sprinkles+Palm+Beach",
      walkMins: 22,
      driveMins: 7,
    },
    {
      name: "Cucina dell\u2019Arte",
      category: "Drinks",
      description: "Italian restaurant that transitions into a bar scene late night",
      why: "One of the few spots on the island that gets lively after 10pm. Good cocktails, great energy.",
      area: "Royal Poinciana Way, Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Cucina+dell+Arte+Palm+Beach",
      walkMins: 22,
      driveMins: 7,
    },
    {
      name: "Imoto",
      category: "Upscale",
      priceRange: "$$$",
      description: "Upscale Japanese with expertly crafted sushi and small plates",
      why: "The best date night spot on the island. Intimate, stylish, and the omakase bar is a special experience.",
      area: "Palm Beach – central island",
      mapsUrl: "https://maps.google.com/?q=Imoto+Palm+Beach",
      reservationTip: "Reservations strongly recommended",
      walkMins: 30,
      driveMins: 8,
    },
    // ── West Palm Beach (no bridge — short walks) ──────────────────────────
    {
      name: "El Camino",
      category: "Casual",
      description: "Lively Mexican restaurant with scratch-made tortillas, tacos, and a serious agave program",
      why: "Fresh, organic ingredients and house-made everything. The margaritas are excellent and happy hour is a steal.",
      area: "Rosemary Square, West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/8BTX4GQ6z94x8Yeu9",
      priceRange: "$$",
      hostNote: "Get the street corn and a frozen marg. Outdoor seating is great on a nice evening.",
      walkMins: 5,
      driveMins: 2,
    },
    {
      name: "City Cellar Wine Bar",
      category: "Drinks",
      description: "Award-winning wine bar and American grill in the heart of Rosemary Square",
      why: "Exceptional wine list, great happy hour, and a solid menu to go with it. Literally walking distance from your door.",
      area: "Rosemary Square \u2014 5 min walk",
      mapsUrl: "https://maps.google.com/?q=City+Cellar+Wine+Bar+West+Palm+Beach",
      priceRange: "$$",
      hostNote: "One of my go-to spots when I don't want to plan far ahead. Always reliable.",
      walkMins: 5,
      driveMins: 2,
    },
    {
      name: "Avocado Grill",
      category: "Best Overall",
      description: "Farm-to-table American with creative seasonal dishes and excellent cocktails",
      why: "One of the most consistently praised restaurants in WPB. Fresh, local, beautifully executed. Excellent for any occasion.",
      area: "West Palm Beach downtown",
      mapsUrl: "https://maps.google.com/?q=Avocado+Grill+West+Palm+Beach",
      priceRange: "$$",
      hostNote: "The brunch on weekends is exceptional. Reservations recommended for dinner.",
      walkMins: 7,
      driveMins: 3,
    },
    {
      name: "Shanghai",
      category: "Upscale",
      description: "Upscale Asian fusion with a sleek atmosphere and creative small plates",
      why: "One of the better date-night options in WPB. Inventive cocktails and a menu that rewards adventurous ordering.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/RfCn3kGNW1zNFt286",
      priceRange: "$$$",
      reservationTip: "Reserve ahead on weekends",
      hostNote: "One of my favorite spots in WPB. Great for a special dinner without leaving the neighborhood.",
      walkMins: 8,
      driveMins: 3,
    },
    {
      name: "Pistache French Bistro",
      category: "Upscale",
      description: "Classic French bistro on the waterfront with a beautiful terrace and excellent wine list",
      why: "Romantic, walkable, and genuinely excellent French cooking. The waterfront terrace at sunset is one of the best dining experiences in WPB.",
      area: "Clematis Waterfront, West Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Pistache+French+Bistro+West+Palm+Beach",
      priceRange: "$$$",
      reservationTip: "Book ahead for terrace seating",
      walkMins: 15,
      driveMins: 5,
    },
    {
      name: "Sour Seed Bagels",
      category: "Breakfast",
      description: "Artisan bagel shop with house-fermented sourdough bagels and creative spreads",
      why: "Proper bagels in South Florida \u2014 rare and worth it. The sourdough process gives them a depth most bagel shops miss.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/Ho3a83bKXv812WuE7",
      priceRange: "$",
      hostNote: "Go early \u2014 they sell out. Get whatever the seasonal schmear is.",
      walkMins: 12,
      driveMins: 4,
    },
    {
      name: "The Salty Donut",
      category: "Breakfast",
      description: "Artisan donut shop with rotating craft flavors and excellent coffee",
      why: "These are not Dunkin. Seasonal, thoughtful, and genuinely delicious. A great stop before or after the beach.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/n4UeCoquQ8yq4udZ6",
      priceRange: "$",
      hostNote: "Check their Instagram before going \u2014 the specials change and they\u2019re always worth it.",
      walkMins: 12,
      driveMins: 4,
    },
    {
      name: "Sloan\u2019s",
      category: "Dessert",
      description: "Over-the-top ice cream wonderland with homemade flavors, a candy wall, and pink-everything decor",
      why: "A Palm Beach icon. The sundaes are ridiculous in the best way. Bring kids or just embrace your inner child.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/czqp4dkq2vbo91EPA",
      priceRange: "$$",
      hostNote: "Birthday Cake and Coffee & Doughnut are the standout flavors. The candy wall alone is worth a stop.",
      walkMins: 12,
      driveMins: 4,
    },
    {
      name: "Peachwave",
      category: "Dessert",
      description: "Self-serve frozen yogurt with a huge topping bar \u2014 pay by weight",
      why: "Light, refreshing, and completely guilt-free (or not, depending on your topping choices). Perfect after a beach day.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/EJGhmhXzUB4fognk6",
      priceRange: "$",
      walkMins: 10,
      driveMins: 3,
    },

    {
      name: "Pop Bagels",
      category: "Breakfast",
      priceRange: "$",
      description: "Classic NY-style bagels done right — fresh-baked, hand-rolled, and stacked with creative spreads",
      why: "The go-to breakfast spot. Great bagels, great coffee, great vibe. Get there early — they sell out.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/zNT2YsGhnprDbZtr7",
      hostNote: "Order the everything bagel with scallion cream cheese. Thank me later.",
    },
    {
      name: "Skinny Louie",
      category: "Casual",
      priceRange: "$$",
      description: "Neighborhood bar and kitchen with a laid-back vibe, great cocktails, and solid comfort food",
      why: "Local favorite for a relaxed night out. Unpretentious, fun, and the food is way better than you expect.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/GfDv3zSJFQUViLJw7",
    },
    {
      name: "Ruth's Chris Steak House",
      category: "Upscale",
      priceRange: "$$$$",
      description: "The classic American steakhouse — sizzling USDA prime cuts served on 500-degree plates",
      why: "If you want a serious steak dinner, this is it. Consistent, impressive, and worth every penny for a special occasion.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/FM4vCjFPcGq2ZhKi9",
      reservationTip: "Book ahead, especially on weekends",
    },
    {
      name: "Pubbelly Sushi",
      category: "Casual",
      priceRange: "$$",
      description: "Creative Asian-Latin sushi fusion with inventive rolls, small plates, and a lively atmosphere",
      why: "Fun, social, and consistently delicious. Great for a group or a casual date night without the formality.",
      area: "West Palm Beach",
      mapsUrl: "https://maps.app.goo.gl/SRvr4PCT34ZBcMk48",
    },  ],

  thingsToDo: [
    {
      title: "Worth Avenue",
      description: "Palm Beach's legendary luxury shopping boulevard",
      why: "Even if you don't shop, the architecture and people-watching are unbeatable. Walk end-to-end.",
      bestTime: "Morning or late afternoon for fewer crowds",
      mapsUrl: "https://maps.google.com/?q=Worth+Avenue+Palm+Beach",
    },
    {
      title: "Phipps Ocean Park Beach",
      description: "A quieter, locals-preferred beach away from the main crowds",
      why: "Cleaner, less crowded, and beautifully maintained. Perfect for an early morning walk.",
      bestTime: "Early morning or late afternoon",
      mapsUrl: "https://maps.google.com/?q=Phipps+Ocean+Park+Palm+Beach",
    },
    {
      title: "The Palm Beach Trail",
      description: "A scenic paved trail running along the oceanfront",
      why: "One of the prettiest walks in South Florida. Stunning views of the ocean and estate homes.",
      bestTime: "Sunrise or golden hour",
      mapsUrl: "https://maps.google.com/?q=Palm+Beach+Bicycle+Trail",
    },
    {
      title: "Bradley Park",
      description: "A peaceful lakeside park perfect for relaxing",
      why: "One of the most serene spots on the island. Bring a coffee and just sit.",
      bestTime: "Morning",
      mapsUrl: "https://maps.google.com/?q=Bradley+Park+Palm+Beach",
    },
    {
      title: "CityPlace / Rosemary Square",
      description: "Outdoor shopping, dining, and entertainment in West Palm Beach",
      why: "Great for an evening out — easy access to restaurants, bars, and the waterfront.",
      bestTime: "Evening",
      mapsUrl: "https://maps.google.com/?q=Rosemary+Square+West+Palm+Beach",
    },
    {
      title: "Flagler Museum",
      description: "The gilded-age estate of railroad magnate Henry Flagler",
      why: "Genuinely impressive — opulent architecture and fascinating history. A must for first-timers.",
      bestTime: "Anytime during open hours",
      mapsUrl: "https://maps.google.com/?q=Flagler+Museum+Palm+Beach",
    },
  ],

  attractions: [
    {
      name: "Flagler Museum (Whitehall)",
      description: "Henry Flagler's jaw-dropping 1902 Beaux-Arts mansion",
      why: "One of the finest examples of Gilded Age architecture in America. The marble entrance hall is stunning.",
      mapsUrl: "https://maps.google.com/?q=Flagler+Museum+Palm+Beach",
      tip: "Guided tours are well worth it — book ahead online",
    },
    {
      name: "The Breakers Palm Beach",
      description: "Iconic Italian Renaissance resort open since 1896",
      why: "Even if you're not staying, walk the grounds or have a drink in the Circle Dining Room. Pure Palm Beach.",
      mapsUrl: "https://maps.google.com/?q=The+Breakers+Palm+Beach",
      tip: "Lobby access is open to the public — no reservation needed to look around",
    },
    {
      name: "Norton Museum of Art",
      description: "One of the largest art museums in the Southeast",
      why: "World-class collection with rotating exhibitions. Excellent for an afternoon out of the heat.",
      mapsUrl: "https://maps.google.com/?q=Norton+Museum+of+Art+West+Palm+Beach",
      tip: "Free on Saturdays",
    },
    {
      name: "Palm Beach Outlets",
      description: "Premium outlet shopping in West Palm Beach",
      why: "Great brands at reduced prices — best retail option if you need any shopping done.",
      mapsUrl: "https://maps.google.com/?q=Palm+Beach+Outlets",
    },
    {
      name: "Clematis Street",
      description: "West Palm Beach's downtown entertainment corridor",
      why: "Walkable street with live music, outdoor bars, and a great local energy. Best for weekend evenings.",
      mapsUrl: "https://maps.google.com/?q=Clematis+Street+West+Palm+Beach",
    },
  ],

  nightlife: [
    {
      name: "Cucina dell'Arte",
      vibe: "Upscale Italian that turns lively late — dancing, cocktails, good energy",
      bestFor: "Groups, late night, celebratory evenings",
      reservationNote: "Walk-in friendly later in the evening",
      mapsUrl: "https://maps.google.com/?q=Cucina+dell+Arte+Palm+Beach",
    },
    {
      name: "Bar Taco",
      vibe: "Relaxed coastal bar with excellent cocktails and tacos",
      bestFor: "Casual evening drinks, easy vibe",
      mapsUrl: "https://maps.google.com/?q=BarTaco+West+Palm+Beach",
    },
    {
      name: "E.R. Bradley's Saloon",
      vibe: "Classic waterfront bar — unpretentious, fun, always busy",
      bestFor: "Casual drinks, sports, meeting locals",
      mapsUrl: "https://maps.google.com/?q=ER+Bradleys+West+Palm+Beach",
    },
    {
      name: "Hullabaloo",
      vibe: "Local craft cocktail bar in a historic building — intimate and eclectic",
      bestFor: "Cocktail lovers, date nights, something different",
      mapsUrl: "https://maps.google.com/?q=Hullabaloo+West+Palm+Beach",
    },
    {
      name: "The Regional Kitchen & Public House",
      vibe: "Southern-inspired craft cocktails and elevated bar food",
      bestFor: "Pre-dinner drinks or a full evening out",
      mapsUrl: "https://maps.google.com/?q=The+Regional+Kitchen+West+Palm+Beach",
    },
  ],

  hiddenGems: [
    {
      name: "Pizza al Fresco Courtyard",
      description: "Most visitors walk right past this tucked-away garden restaurant",
      why: "The courtyard is one of the most beautiful dining settings in Palm Beach. Go at dusk.",
      mapsUrl: "https://maps.google.com/?q=Pizza+Al+Fresco+Palm+Beach",
    },
    {
      name: "Phil Foster Park Snorkeling",
      description: "A free snorkeling spot under the Blue Heron Bridge",
      why: "Best shore snorkeling in South Florida. Incredible sea life — turtles, manatees, rays — all within a few feet.",
      mapsUrl: "https://maps.google.com/?q=Phil+Foster+Park+Riviera+Beach",
    },
    {
      name: "The Bradley Park Bench",
      description: "A specific lakeside bench in Bradley Park — no name, no sign",
      why: "The single best place to sit with a coffee on the island. Quiet, shaded, overlooking the lake. Go early.",
      mapsUrl: "https://maps.google.com/?q=Bradley+Park+Palm+Beach",
    },
    {
      name: "Green's Pharmacy",
      description: "An old-school diner counter inside a working pharmacy — open since 1937",
      why: "Pure old Florida. Breakfast on a stool at the counter for under $10. A total time warp.",
      mapsUrl: "https://maps.google.com/?q=Greens+Pharmacy+Palm+Beach",
    },
    {
      name: "Bethesda-by-the-Sea Church Grounds",
      description: "A stunning Gothic-style church with manicured gardens open to the public",
      why: "Peaceful, beautiful, and completely undervisited. The gardens alone are worth a quiet walk.",
      mapsUrl: "https://maps.google.com/?q=Bethesda+by+the+Sea+Church+Palm+Beach",
    },
  ],

  personalThoughts: [
    {
      label: "My favorite dinner",      place: "Harry\u2019s",
      note: "Impeccable service, beautiful room, and a wine list that actually delivers. Special occasion dining at its finest. Book well ahead and dress the part.",
      mapsUrl: "https://maps.app.goo.gl/T6QDisX4BZYR5YEy8",
    },
    {
      label: "Best quick bite after the beach",
      place: "Hamburger Heaven",
      note: "Sand still on your feet, a milkshake in your hand. Don't overthink it. This is the move.",
      mapsUrl: "https://maps.google.com/?q=Hamburger+Heaven+Palm+Beach",
    },
    {
      label: "Most underrated spot",
      place: "Green's Pharmacy",
      note: "Most people walk by without a second glance. Step inside, sit at the counter, order breakfast. You'll understand.",
      mapsUrl: "https://maps.google.com/?q=Greens+Pharmacy+Palm+Beach",
    },
    {
      label: "If you only have one afternoon",
      place: "Worth Avenue → PB Catch → Cucina dell'Arte",
      note: "Walk Worth Avenue end to end. Grab happy hour oysters at PB Catch. End the night at Cucina. Perfect Palm Beach day.",
    },
    {
      label: "Best kept secret",
      place: "Phil Foster Park snorkeling",
      note: "I've seen more sea life there in 30 minutes than on paid dive tours. Bring a mask, nothing else.",
      mapsUrl: "https://maps.google.com/?q=Phil+Foster+Park+Riviera+Beach",
    },
  ],

  photos: {
    // ── Apartment Photos ─────────────────────────────────────────────────────
    // Add your own photos by:
    //   Option A: Put image files in /public/images/ and use src: "/images/filename.jpg"
    //   Option B: Use any https:// URL (Airbnb listing photos, Google Drive, etc.)
    // The gallery handles both automatically.
    apartmentPhotos: [
      {
        src: "/images/living-room.jpg",
        alt: "Spacious living room with floor-to-ceiling shuttered windows and sectional sofa",
        caption: "Living Room",
      },
      {
        src: "/images/dining.jpg",
        alt: "Dining area with glass table and open kitchen beyond",
        caption: "Dining Area",
      },
      {
        src: "/images/kitchen.jpg",
        alt: "Fully equipped kitchen with white cabinets and black granite countertops",
        caption: "Kitchen",
      },
      {
        src: "/images/bedroom-1.jpg",
        alt: "Master bedroom with king bed and hardwood floors",
        caption: "Master Bedroom",
      },
      {
        src: "/images/bedroom-2.jpg",
        alt: "Second bedroom with queen bed and wall-mounted TV",
        caption: "Second Bedroom",
      },
      {
        src: "/images/bathroom-1.jpg",
        alt: "Clean modern bathroom with hexagon tile floor",
        caption: "Primary Bathroom",
      },
      {
        src: "/images/bathroom-2.jpg",
        alt: "Stunning bathroom with floral wallpaper and marble countertop",
        caption: "Second Bathroom",
      },
      {
        src: "/images/laundry.jpg",
        alt: "In-unit LG washer and dryer with shelving",
        caption: "In-Unit Laundry",
      },
    ],
    // ── Area / Palm Beach Photos ──────────────────────────────────────────────
    areaPhotos: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        alt: "Beautiful Palm Beach coastline",
        caption: "Palm Beach — 10 minutes away",
      },
      {
        src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
        alt: "White sand beach with clear water",
        caption: "Phipps Ocean Park Beach",
      },
      {
        src: "https://images.unsplash.com/photo-1562599838-8cc871c241a5?w=800&q=80",
        alt: "Luxury shopping street",
        caption: "Worth Avenue",
      },
      {
        src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80",
        alt: "Waterfront dining and views",
        caption: "West Palm Beach waterfront",
      },
      {
        src: "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?w=800&q=80",
        alt: "Sunset over the water",
        caption: "Florida sunsets never get old",
      },
      {
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        alt: "Palm trees on a beautiful day",
        caption: "Classic South Florida",
      },
    ],
  },
  houseInfo: {
    wifi: {
      name: "Tower210",
      password: "Enjoyyourstay",
    },
    parking: "Spot #30 in the garage — pull in and immediately take a left, drive to the end, last spot on the left. For guest parking: go to the front desk and give your first and last name plus license plate number to get a guest pass.",
    checkoutTime: "11:00 AM",
    checkoutReminders: [
      "Strip and leave used towels in the bathroom",
      "Leave keys on the kitchen counter",
      "Close and lock all windows and doors",
      "Set thermostat to 76°F before leaving",
      "No need to strip bed linens",
    ],
    importantNotes: [
      "No smoking anywhere on the property",
      "Quiet hours 10pm – 8am",
      "Pool hours: 8am – 10pm",
      "Beach towels and chairs are in the closet by the front door",
      "Parking garage closes at midnight — plan accordingly",
    ],
    contactHost: "Text or call: (561) 555-0100 — I usually respond within the hour",
    emergency: "For emergencies, call 911. Building security: (561) 555-0199",
  },
};

