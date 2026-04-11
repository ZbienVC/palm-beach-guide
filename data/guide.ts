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
  houseInfo: HouseInfo;
}

// ─────────────────────────────────────────────────────────────────────────────
// YOUR GUIDE DATA — Edit everything below this line
// ─────────────────────────────────────────────────────────────────────────────

export const guide: GuideData = {
  hero: {
    greeting: "Welcome to Palm Beach",
    tagline: "Your curated local guide — food, fun, and favorite spots",
    hostIntro:
      "I've spent years exploring this beautiful stretch of Florida and handpicked every spot in this guide. Whether you want a slow beach morning, a perfect dinner reservation, or a hidden gem most visitors miss — it's all here. Enjoy every moment.",
  },

  quickActions: [
    {
      label: "Google Maps",
      icon: "MapPin",
      href: "https://maps.google.com/?q=Palm+Beach+Florida",
      accent: "bg-ocean-500",
    },
    {
      label: "Call Uber",
      icon: "Car",
      href: "https://m.uber.com/ul/",
      accent: "bg-slate-900",
    },
    {
      label: "Beach Guide",
      icon: "Waves",
      href: "#things-to-do",
      accent: "bg-ocean-400",
    },
    {
      label: "House Info",
      icon: "Home",
      href: "#house-info",
      accent: "bg-palm-500",
    },
    {
      label: "Reservations",
      icon: "CalendarCheck",
      href: "https://resy.com",
      accent: "bg-sand-400",
    },
    {
      label: "Contact Host",
      icon: "MessageCircle",
      href: "sms:+15615550100",
      accent: "bg-rose-400",
    },
  ],

  restaurants: [
    {
      name: "Café Boulud",
      category: "Best Overall",
      priceRange: "$$$",
      walkMins: 12,
      description: "Refined French-American cuisine in the heart of Palm Beach",
      why: "Consistently excellent from start to finish. The service is impeccable and the seasonal menu never disappoints.",
      area: "Palm Beach – Worth Ave area",
      mapsUrl: "https://maps.google.com/?q=Cafe+Boulud+Palm+Beach",
      reservationTip: "Book at least a week ahead, especially on weekends",
      hostNote: "Order the roasted chicken. It sounds simple — it is extraordinary.",
    },
    {
      name: "Imoto",
      category: "Nice Dinner / Date Night",
      priceRange: "$$$",
      walkMins: 10,
      description: "Upscale Japanese with expertly crafted sushi and small plates",
      why: "The best date night spot on the island. Intimate, stylish, and the omakase bar is a special experience.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Imoto+Palm+Beach",
      reservationTip: "Reservations strongly recommended",
    },
    {
      name: "Buccan",
      category: "Nice Dinner / Date Night",
      priceRange: "$$",
      walkMins: 14,
      description: "New American small plates — creative, local, and always vibrant",
      why: "The vibe is upbeat without being loud. Perfect for a relaxed special dinner.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Buccan+Palm+Beach",
      hostNote: "The charcuterie and the wagyu burger are both exceptional.",
    },
    {
      name: "Hamburger Heaven",
      category: "Casual / Easy",
      priceRange: "$",
      walkMins: 8,
      description: "A beloved Palm Beach institution since 1945",
      why: "Unpretentious, fast, and genuinely delicious. A local staple everyone should try once.",
      area: "Worth Avenue",
      mapsUrl: "https://maps.google.com/?q=Hamburger+Heaven+Palm+Beach",
      hostNote: "Cash preferred. Get the milkshake.",
    },
    {
      name: "Meat Market",
      category: "Casual / Easy",
      description: "Lively American chophouse with an energetic atmosphere",
      why: "Great for a group dinner when you want quality food without the full fine-dining commitment.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Meat+Market+Palm+Beach",
    },
    {
      name: "Ta-boo",
      category: "Casual / Easy",
      description: "A Palm Beach classic — casual American brasserie, open late",
      why: "Great for lunch or a relaxed dinner. Historic spot with a great patio.",
      area: "Worth Avenue",
      mapsUrl: "https://maps.google.com/?q=Ta-boo+Palm+Beach",
    },
    {
      name: "Bricktop's",
      category: "Breakfast / Coffee",
      description: "Reliable American fare for breakfast and brunch",
      why: "Eggs Benedict and avocado toast that actually deliver. Great for a slow start.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Bricktops+Palm+Beach",
    },
    {
      name: "PB Catch",
      category: "Best Overall",
      priceRange: "$$$",
      walkMins: 15,
      description: "Fresh seafood with a coastal-chic vibe right on the water",
      why: "The raw bar alone is worth the visit. Best seafood on the island.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=PB+Catch+Palm+Beach",
      reservationTip: "Book ahead for dinner",
      hostNote: "Get here for happy hour if you can — best value on the island.",
    },
    {
      name: "Pizza al Fresco",
      category: "Casual / Easy",
      priceRange: "$$",
      walkMins: 9,
      description: "Neapolitan wood-fired pizza in a beautiful garden courtyard",
      why: "The setting alone is worth it. Tucked into a quiet alleyway — one of the most charming spots in Palm Beach.",
      area: "South end of Worth Ave area",
      mapsUrl: "https://maps.google.com/?q=Pizza+Al+Fresco+Palm+Beach",
    },
    {
      name: "Sprinkles",
      category: "Dessert / Sweet Treats",
      description: "The original cupcake bakery — iconic and always satisfying",
      why: "If you've never had a Sprinkles cupcake, this is the original. 24-hour vending machine outside.",
      area: "Worth Avenue",
      mapsUrl: "https://maps.google.com/?q=Sprinkles+Palm+Beach",
    },
    {
      name: "Cucina dell'Arte",
      category: "Drinks / Cocktails",
      description: "Italian restaurant that transitions into a bar scene late night",
      why: "One of the few spots on the island that gets lively after 10pm. Good cocktails, great energy.",
      area: "Palm Beach",
      mapsUrl: "https://maps.google.com/?q=Cucina+dell+Arte+Palm+Beach",
    },
  ],

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
      label: "My favorite dinner",
      place: "Café Boulud",
      note: "I've taken every guest here at least once. The service, the food, the room — it never misses. Book ahead and dress nicely.",
      mapsUrl: "https://maps.google.com/?q=Cafe+Boulud+Palm+Beach",
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

  houseInfo: {
    wifi: {
      name: "PalmBeachHome_5G",
      password: "WelcomeToPB2024",
    },
    parking: "One assigned spot in the garage — Level 2, Space 14. Guest parking available on the street after 6pm.",
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
