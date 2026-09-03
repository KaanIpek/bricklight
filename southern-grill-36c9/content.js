/* Southern Grill — tum icerik burada. Admin paneli bunu localStorage'da gunceller. */
window.SG_DEFAULT = {
  meta: {
    name: "SOUTHERN GRILL",
    city: "MYRTLE BEACH, SC",
    headline1: "Gyros, burgers",
    headline2: "& cheesesteaks.",
    headline3: "Hot off the grill.",
    tagline: "Mediterranean plates, Southern comfort food and fresh salads — cooked to order, a few steps from the boardwalk.",
    place: "Broadway at the Beach",
    address1: "1118 Celebrity Circle #D315 · Floor 1",
    address2: "Myrtle Beach, SC 29577",
    phone: "(843) 251-5638",
    phoneRaw: "+18432515638",
    priceRange: "$10–20",
    mapsQuery: "Southern Grill, 1118 Celebrity Cir #D315, Myrtle Beach, SC 29577",
    kicker: "Southern Grill · Broadway at the Beach"
  },
  seo: {
    brandName: "Southern Grill",
    siteUrl: "https://southerngrillmb.com/",
    ogImage: "photos/web/og.jpg",
    lat: "33.71544",
    lng: "-78.87504",
    googleMapsUrl: "",
    /* Only cuisines the visible page actually states. "Turkish" was removed on
       2026-09-03: nothing in the copy, the menu or the FAQ says it, and marking
       up a claim the page does not make is the policy line. Put it in the copy
       first (meta.tagline / a menu item), then add it back here. */
    cuisines: ["American", "Mediterranean", "Greek"],
    /* Photos currently shipping in photos/web/ are CC0 stock (see
       photos/web/CREDITS.md), NOT pictures of our food. While this is false the
       page must not claim them as ours: no image[] in the JSON-LD, no "at
       Southern Grill" in the alt text. Flip to true the day Christian's own
       photos land — one tick in the editor. */
    ownPhotos: false,
    payment: "Credit Card, Debit Card, Contactless",
    parentName: "Broadway at the Beach",
    parentUrl: "https://www.broadwayatthebeach.com/",
    sameAs: ["https://www.broadwayatthebeach.com/property/southern-grill/"],
    features: [
      { name: "Kids' menu",                     on: true  },
      { name: "High chairs",                    on: true  },
      { name: "Free parking",                   on: true  },
      { name: "Outdoor seating",                on: true  },
      { name: "Vegetarian options",             on: true  },
      /* OFF until Christian confirms in writing. Same rule as "Serves beer"
         below: second-hand from a Google attribute, and the visible copy no
         longer states it. Restore this, the FAQ answer and the amenity title
         together, in one edit. */
      { name: "Halal options",                  on: false },
      { name: "Dogs allowed outside",           on: true  },
      { name: "Wheelchair accessible entrance", on: true  },
      /* OFF: the visible copy says "restrooms on site", which is a presence
         claim, not an accessibility one. Turn on only when the copy at
         amenities/i-access says "accessible entrance and restroom". */
      { name: "Wheelchair accessible restroom", on: false },
      { name: "Catering",                       on: true  },
      { name: "Coffee",                         on: true  },
      { name: "Serves beer",                    on: false },
      { name: "LGBTQ+ friendly",                on: false }
    ]
  },
  rating: { score: "4.7", count: "2,151",
            url: "https://www.google.com/maps/search/?api=1&query=Southern+Grill+Myrtle+Beach",
            quote: "We saw all the usual spots and decided to give this one a try instead. INCREDIBLE!!!", quoteBy: "Google review" },
  announcement: { on: false, text: "Today's special: ask about the gyro platter 🥙" },

  soldOut: [],   // [{ id:"m-gyro", date:"2026-09-03" }] — restaurant-local date, cleared automatically

  readyClock: {
    on: true,
    prepMinutes: 20,          // CONFIRM WITH CHRISTIAN. Deliberately pessimistic default.
    lastOrderMinutes: 20,     // stop taking orders 20 min before close
    readyPhrase: "usually ready by about",
    orderStart: "",           // "" = same as kitchen hours (inert). Only narrow if Clover is truly offline.
    orderEnd: "",
    orderClosedText: "Online ordering is off right now — call us and we'll have it ready.",
    openSoonText: "Order from {ORDERFROM} and it's hot when the doors open.",
    closedText: "We're closed right now.",
    comboItemId: "m-combo",
    comboCats: ["burgers", "sandwiches", "wraps"],
    walkHedge: "Give yourself a few extra minutes with a stroller or little ones.",
    shareText: "Southern Grill at Broadway at the Beach — menu, hours and how to find it:",
    status: { mode: "", extraMinutes: 0, setAt: "", expiresAt: "" }
  },

  landmarksLead: "We're on Floor 1 in the D building — here's the walk from the places you probably parked or just came out of.",
  landmarksDraft: true,   // admin shows a red "walk these routes yourself" banner while true
  /* A route with an empty `dir` is never rendered to a visitor — index.html's
     paintWalk() drops it (and drops anything still starting "PLACEHOLDER"), so
     an unfinished route cannot reach the public page. WonderWorks and the lake
     boardwalk are deliberately blank: nobody has walked them yet and a made-up
     direction is worse than none. Christian writes them in the editor. */
  landmarks: [
    { id:"lm-garage",   name:"the free parking garage", walk:"about 3 min", first:true,
      dir:"Come out of the garage on the lake side and follow the main walkway; we're in the D building on Floor 1, on your left." },
    { id:"lm-margaritaville", name:"Margaritaville", walk:"about 4 min", first:false,
      dir:"Head toward the lake with the water on your right, past the fountain; we're on Floor 1 of the D building." },
    { id:"lm-ripleys",  name:"Ripley's Aquarium", walk:"about 6 min", first:false,
      dir:"Cross back over the bridge toward the shops; we're on Floor 1 in the D building." },
    { id:"lm-wonderworks", name:"WonderWorks", walk:"about 5 min", first:false,
      dir:"" },
    { id:"lm-lake",     name:"the lake boardwalk", walk:"about 4 min", first:false,
      dir:"" }
  ],

  publishedAt: "",   // stamped by admin on every PUT; used to detect a stale draft
  docVersion: 2,

  hours: [
    { d: 0, day: "Sunday",    text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 1, day: "Monday",    text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 2, day: "Tuesday",   text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 3, day: "Wednesday", text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 4, day: "Thursday",  text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 5, day: "Friday",    text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false },
    { d: 6, day: "Saturday",  text: "11 AM – 10 PM", open: "11:00", close: "22:00", closed: false }
  ],
  hoursSummary: "11 AM – 10 PM",
  order: [
    { on: true,  key: "clover",   direct: true,  label: "Order direct",  sub: "No app fees — goes straight to our kitchen", url: "https://southern.cloveronline.com/menu/all" },
    { on: true,  key: "doordash", direct: false, label: "DoorDash",      sub: "Adds their fees", url: "https://www.doordash.com/store/southern-grill-myrtle-beach-615181/17011968/" },
    { on: true,  key: "grubhub",  direct: false, label: "Grubhub",       sub: "Adds their fees", url: "https://www.grubhub.com/restaurant/southern-grill-broadway-at-the-beach-1118-celebrity-cir-myrtle-beach/4828312" },
    { on: false, key: "ubereats", direct: false, label: "Uber Eats",     sub: "Adds their fees", url: "" }
  ],
  social: { facebook: "", instagram: "" },
  service: ["Dine in", "Takeout", "Curbside pickup", "Delivery"],
  loved: [
    { name: "Gyro",              linkId: "m-gyro",   count: "120", rank: "#1 most mentioned", desc: "Seasoned meat, fresh vegetables and sauce in warm pita. The dish people come back to Broadway for." , img: "photos/web/gyro.jpg" },
    { name: "Philly Cheesesteak",linkId: "m-philly", count: "96",  rank: "#2 most mentioned", desc: "Grilled steak, peppers, onions and melted cheese. Served with fries." , img: "photos/web/cheesesteak.jpg" },
    { name: "Wings",             linkId: "m-wings",  count: "29",  rank: "#3 most mentioned", desc: "Crispy, sauced and shareable — the table order while you decide what else to get." , img: "photos/web/wings.jpg" }
  ],
  lovedNote: "Counts taken from public Google reviews. Also frequently named: chicken tenders (27), guacamole burger (20), onion rings (19), grilled chicken wrap (14), Greek salad (12).",
  categories: [
    { key: "all",           label: "Everything" },
    { key: "mediterranean", label: "Gyros & Wings" },
    { key: "burgers",       label: "Burgers" },
    { key: "sandwiches",    label: "Sandwiches" },
    { key: "wraps",         label: "Wraps & Tenders" },
    { key: "salads",        label: "Salads" },
    { key: "sides",         label: "Sides" },
    { key: "kids",          label: "Kids" },
    { key: "drinks",        label: "Drinks & Dessert" }
  ],
  /* id: frozen slug. NEVER change one — sold-out marks and the combo line are
     keyed on it, so renaming a dish must not move the id. */
  menu: [
    { c:"mediterranean", id:"m-gyro", n:"Gyro", p:"ask", d:"Seasoned meat, fresh veg and sauce in warm pita", badge:"#1 most reviewed" , img:"photos/web/gyro.jpg" },
    { c:"mediterranean", id:"m-wings", n:"Wings", p:"ask", d:"Crispy and sauced — made for sharing", badge:"Guest favorite" , img:"photos/web/wings.jpg" },
    { c:"burgers", id:"m-cheeseburger", n:"Cheeseburger", p:"10.99", d:"The classic, cooked to order", badge:"" , img:"photos/web/burger.jpg" },
    { c:"burgers", id:"m-ultimate-burger", n:"Ultimate Burger", p:"13.99", d:"Loaded and stacked", badge:"" , img:"photos/web/burger.jpg" },
    { c:"burgers", id:"m-guacamole-burger", n:"Guacamole Burger", p:"13.99", d:"Fresh guac — the one people come back for", badge:"Favorite" , img:"photos/web/burger.jpg" },
    { c:"burgers", id:"m-mushroom-swiss", n:"Mushroom and Swiss", p:"12.99", d:"Sautéed mushrooms, melted swiss", badge:"" , img:"photos/web/burger.jpg" },
    { c:"burgers", id:"m-veggie-burger", n:"Very Veggie Burger", p:"13.99", d:"Full-size veggie patty", badge:"" , img:"photos/web/burger.jpg" },
    { c:"sandwiches", id:"m-philly", n:"Philly Steak and Cheese", p:"13.99", d:"Grilled steak, peppers, onions", badge:"#2 most reviewed" , img:"photos/web/cheesesteak.jpg" },
    { c:"sandwiches", id:"m-chicken-cheesesteak", n:"Chicken Cheesesteak w/ Fries", p:"13.99", d:"Comes with fries", badge:"" , img:"photos/web/cheesesteak.jpg" },
    { c:"sandwiches", id:"m-grilled-chicken-sand", n:"Grilled Chicken Sandwich", p:"12.99", d:"Marinated and grilled", badge:"" , img:"photos/web/cheesesteak.jpg" },
    { c:"sandwiches", id:"m-crispy-chicken-sand", n:"Crispy Chicken Sandwich", p:"12.99", d:"Hand-breaded, fried golden", badge:"" , img:"photos/web/cheesesteak.jpg" },
    { c:"sandwiches", id:"m-buffalo-sub", n:"Buffalo Chicken Sub w/ Fries", p:"13.99", d:"Tossed in buffalo sauce", badge:"" , img:"photos/web/cheesesteak.jpg" },
    { c:"wraps", id:"m-grilled-chicken-wrap", n:"Grilled Chicken Wrap w/ Fries", p:"12.99", d:"Comes with fries", badge:"" , img:"photos/web/wrap.jpg" },
    { c:"wraps", id:"m-crispy-chicken-wrap", n:"Crispy Chicken Wrap w/ Fries", p:"12.99", d:"Comes with fries", badge:"" , img:"photos/web/wrap.jpg" },
    { c:"wraps", id:"m-tenders", n:"Chicken Tenders (5 pcs)", p:"12.99", d:"Five hand-breaded tenders", badge:"" , img:"photos/web/tenders.jpg" },
    { c:"salads", id:"m-greek-salad", n:"Greek Salad", p:"15.99", d:"Feta, olives, fresh vegetables", badge:"" , img:"photos/web/salad.jpg" },
    { c:"salads", id:"m-grilled-chicken-salad", n:"Grilled Chicken Salad", p:"15.99", d:"Marinated chicken, lettuce, tomato, red onion, cucumber", badge:"" , img:"photos/web/salad.jpg" },
    { c:"salads", id:"m-caesar", n:"Caesar Salad", p:"11.99", d:"Crisp romaine, parmesan", badge:"" , img:"photos/web/salad.jpg" },
    { c:"salads", id:"m-ultimate-salad", n:"Ultimate Special Salad", p:"10.95", d:"House favorite", badge:"" , img:"photos/web/salad.jpg" },
    { c:"sides", id:"m-large-fry", n:"Large Fry", p:"7.99", d:"Golden and hot", badge:"" , img:"photos/web/fries.jpg" },
    { c:"sides", id:"m-onion-rings", n:"Onion Rings", p:"8.99", d:"Thick cut, crispy", badge:"" , img:"photos/web/onionrings.jpg" },
    { c:"sides", id:"m-mozz-sticks", n:"Mozzarella Sticks", p:"9.99", d:"With marinara", badge:"" , img:"" },
    { c:"sides", id:"m-fried-pickles", n:"Fried Pickles", p:"10.99", d:"Southern staple", badge:"" , img:"" },
    { c:"sides", id:"m-mac-bites", n:"Mac & Cheese Bites", p:"10.99", d:"Crispy outside, creamy inside", badge:"" , img:"" },
    { c:"sides", id:"m-cheese-fries", n:"Cheese on Fries", p:"2.99", d:"Add to any fries", badge:"" , img:"photos/web/fries.jpg" },
    { c:"sides", id:"m-combo", n:"Combo", p:"4.99", d:"Add fries and a drink", badge:"" , img:"photos/web/fries.jpg" },
    { c:"kids", id:"m-kids-cheeseburger", n:"Kids Cheeseburger", p:"ask", d:"Served with fries", badge:"" , img:"photos/web/burger.jpg" },
    { c:"kids", id:"m-kids-nuggets", n:"Kids Chicken Nuggets", p:"ask", d:"Served with fries", badge:"" , img:"photos/web/tenders.jpg" },
    { c:"kids", id:"m-kids-hotdog", n:"Kids Grilled Hot Dog", p:"ask", d:"Served with fries", badge:"" , img:"" },
    { c:"kids", id:"m-kids-grilled-cheese", n:"Kids Grilled Cheese", p:"ask", d:"Served with fries", badge:"" , img:"" },
    { c:"drinks", id:"m-smoothie", n:"Smoothie", p:"9.99", d:"Made fresh — guests mention these a lot", badge:"" , img:"photos/web/smoothie.jpg" },
    { c:"drinks", id:"m-combo-fries-smoothie", n:"Combo Fries & Smoothie", p:"12.99", d:"Fries plus a smoothie", badge:"" , img:"photos/web/smoothie.jpg" },
    { c:"drinks", id:"m-coffee", n:"Hot Coffee", p:"ask", d:"Freshly brewed", badge:"" , img:"photos/web/coffee.jpg" },
    { c:"drinks", id:"m-cheesecake", n:"NY Style Cheesecake", p:"9.99", d:"Rich and creamy", badge:"" , img:"photos/web/cheesecake.jpg" },
    { c:"drinks", id:"m-bottled-bev", n:"Bottled Beverage", p:"3.99", d:"Sodas and more", badge:"" , img:"" },
    { c:"drinks", id:"m-bottled-water", n:"Bottled Water", p:"3.99", d:"", badge:"" , img:"" },
    { c:"drinks", id:"m-cup-water", n:"Cup of Water", p:"0.50", d:"", badge:"" , img:"" }
  ],
  /* No leading emoji: safeHtml() cannot wrap it in aria-hidden, so a screen
     reader would read "hamburger". The icon lives in the markup instead. */
  menuNote: "<b>Prices shown come from our online ordering menu.</b> Gyros, wings and the kids' menu are served in store — ask when you order. A 3% surcharge applies to credit card transactions. Photos are samples — ours go in before launch.",
  reviews: [
    { stars: 5, text: "The guacamole burger was soooo good — I'll definitely be back to have it again before I leave my trip.", by: "Google review" },
    { stars: 5, text: "We took a day trip to the beach and were looking for a place that wasn't too crowded and had good food. We discovered Southern Grill and I'm so glad we did!", by: "Google review" },
    { stars: 5, text: "Summer vibe with hot chicken — they also have salad, Greek salad if you're vegetarian, and the real smoothies are fresh.", by: "Google review" }
  ],
  faq: [
    /* Do NOT restore the "yes, halal" wording — or the owner's first name —
       until Christian confirms both in writing. Both reached us second-hand
       from a Google attribute. Restore this answer, seo.features "Halal
       options" and the amenity title together, in one edit. */
    { q: "Is Southern Grill halal?",
      x: "Ask us at the counter and we will tell you exactly how our gyro meat and chicken are sourced." },
    { q: "Where exactly are you inside Broadway at the Beach?",
      x: "Floor 1, unit #D315, at 1118 Celebrity Circle. If you are walking the lake side near Margaritaville you are about two minutes away." },
    { q: "What time do you close?",
      x: "We are open every day, 11 AM to 10 PM — including Sundays and holidays in season. The kitchen takes orders right up to close." },
    { q: "Do you deliver?",
      x: "Yes. DoorDash and Grubhub both deliver from us. Ordering direct on our own page is cheaper for you and for us — no app fees, and it is ready faster." },
    { q: "Do you have vegetarian options?",
      x: "The Very Veggie Burger is a full-size patty, and the Greek salad, Caesar salad, fries, onion rings, mozzarella sticks and mac & cheese bites are all meat-free." },
    { q: "Is there anything for the kids?",
      x: "A whole kids’ menu — cheeseburger, chicken nuggets, grilled hot dog and grilled cheese, each served with fries. High chairs and a changing table on site." },
    { q: "Can I bring my dog?",
      x: "Outside, yes. Grab a table on the patio — plenty of people stop by with their dog between shops." },
    { q: "Is parking free?",
      x: "Free. Broadway at the Beach has open lots and a free garage. If you would rather not get out, order ahead and we will bring it to the curb." }
  ],
  amenities: [
    { i:"i-kids",   t:"Great with kids",             x:"Kids' menu, high chairs and changing tables. Nuggets, grilled cheese, hot dogs and burgers — all with fries." },
    { i:"i-car",    t:"Free parking",                x:"Broadway at the Beach has free lots and a free garage. Curbside pickup if you'd rather stay in the car." },
    { i:"i-leaf",   t:"Vegetarian options",          x:"Veggie burger, Greek salad and more. Ask us — we'll point you to the right plate." },
    { i:"i-sun",    t:"Outdoor seating",             x:"Grab a table outside and watch Broadway go by, or take it to the lake." },
    { i:"i-dog",    t:"Dogs welcome",                x:"Your dog's allowed with you outside — plenty of walkers stop by between shops." },
    { i:"i-access", t:"Easy access",                 x:"Wheelchair accessible entrance, restrooms on site, counter service and table seating." },
    { i:"i-card",   t:"Pay how you like",            x:"Credit, debit and tap-to-pay accepted. Most guests spend $10–20 per person." },
    { i:"i-tray",   t:"Catering",                    x:"Feeding a group at the beach? Call us and we'll put a tray together." }
  ]
};
