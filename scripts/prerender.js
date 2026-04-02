/**
 * Central SEO config + post-build pre-rendering script.
 * 
 * HOW TO ADD A NEW ROUTE:
 * 1. Add a new entry to the `routes` array below with path, title, description, keywords, ogTitle, and jsonLd.
 * 2. Register the route in src/App.tsx.
 * 3. Run `npm run build` — the new route will be pre-rendered automatically.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const BASE_URL = 'https://kellysbakingstories.in';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const LOGO = `${BASE_URL}/logo.png`;

// ─── Shared schema fragments ────────────────────────────────────────
const BAKERY_SCHEMA = {
  "@type": "Bakery",
  "name": "Kelly's Baking Stories",
  "url": `${BASE_URL}/`,
  "image": LOGO,
  "description": "Customised eggless cakes, cheesecakes, desserts and hampers in Ahmedabad",
  "priceRange": "₹₹",
  "telephone": "+91-8799055079",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380000",
    "addressCountry": "IN"
  },
  "areaServed": ["Ahmedabad", "Satellite", "Bopal", "South Bopal", "Prahlad Nagar", "Bodakdev", "Thaltej"],
  "openingHours": "Mo-Su 10:00-20:00",
  "sameAs": ["https://instagram.com/Kellys_baking_stories"],
  "servesCuisine": "Desserts",
  "keywords": "100% eggless, custom cakes, healthy treats, dessert hampers"
};

const productOffer = (name, desc, urlPath) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": desc,
  "url": `${BASE_URL}${urlPath}`,
  "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
  "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
});

// ─── Central route-based SEO config ─────────────────────────────────
// To add a new route, just add an entry here + register in App.tsx.
const routes = [
  {
    path: '/',
    title: "Custom Cakes, Cheesecakes & Desserts in Ahmedabad | Kelly's Baking Stories",
    description: "Order handcrafted custom cakes, cheesecakes, brownies and dessert boxes in Ahmedabad. Made fresh with real fruits, homemade fillings, premium chocolate and no artificial essence.",
    keywords: "custom cakes Ahmedabad, cheesecakes Ahmedabad, brownies Ahmedabad, dessert boxes Ahmedabad, birthday cakes Ahmedabad, eggless cakes Ahmedabad, Kelly's Baking Stories",
    ogTitle: "Custom Cakes, Cheesecakes & Desserts in Ahmedabad | Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      ...BAKERY_SCHEMA,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dessert Menu",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Celebration Cakes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cheesecakes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brownies" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dessert Boxes & Hampers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthy Treats" } }
        ]
      }
    }
  },
  {
    path: '/about',
    title: "About Us — Kelly's Baking Stories | 100% Eggless Bakery in Ahmedabad",
    description: "Learn about Kelly's Baking Stories — our passion for 100% eggless handcrafted cakes with real ingredients, our founder's journey, and why Ahmedabad loves our desserts.",
    keywords: "eggless bakery Ahmedabad, about Kelly's Baking Stories, artisan bakery Ahmedabad, homemade cakes Ahmedabad",
    ogTitle: "About Kelly's Baking Stories — Eggless Bakery in Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kelly's Baking Stories",
      "url": `${BASE_URL}/about`,
      "logo": LOGO,
      "description": "100% eggless artisan bakery in Ahmedabad specialising in custom cakes, cheesecakes and dessert hampers",
      "address": BAKERY_SCHEMA.address,
      "sameAs": BAKERY_SCHEMA.sameAs
    }
  },
  {
    path: '/menu',
    title: "Menu & Prices — Eggless Cakes, Brownies, Cheesecakes | Kelly's Baking Stories Ahmedabad",
    description: "Browse our full menu — exotic cakes, signature cakes, cheesecakes, brownies, dessert jars, macarons & more. 100% eggless. View prices and order via WhatsApp in Ahmedabad.",
    keywords: "cake menu Ahmedabad, brownie prices Ahmedabad, cheesecake prices, dessert menu Ahmedabad, eggless cake menu",
    ogTitle: "Our Menu — Kelly's Baking Stories Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Kelly's Baking Stories Menu",
      "description": "Full eggless menu with prices for cakes, brownies, cheesecakes, dessert jars, and macarons in Ahmedabad",
      "url": `${BASE_URL}/menu`,
      "hasMenuSection": [
        { "@type": "MenuSection", "name": "Exotic Cakes" },
        { "@type": "MenuSection", "name": "Signature Cakes" },
        { "@type": "MenuSection", "name": "Cheesecakes" },
        { "@type": "MenuSection", "name": "Brownies" },
        { "@type": "MenuSection", "name": "Dessert Jars" },
        { "@type": "MenuSection", "name": "Eggless Vegan Macarons" }
      ]
    }
  },
  {
    path: '/custom-orders',
    title: "Custom Eggless Cake Orders in Ahmedabad — Kelly's Baking Stories",
    description: "Order a custom eggless cake for birthdays, weddings, anniversaries & special occasions in Ahmedabad. Share your vision and we'll bake it fresh with premium ingredients.",
    keywords: "custom cake order Ahmedabad, eggless custom cakes, bespoke cakes Ahmedabad, celebration cakes Ahmedabad",
    ogTitle: "Custom Orders — Kelly's Baking Stories Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Eggless Cake Orders in Ahmedabad",
      "description": "Bespoke 100% eggless celebration cakes for all occasions in Ahmedabad",
      "url": `${BASE_URL}/custom-orders`,
      "areaServed": "Ahmedabad",
      "provider": { ...BAKERY_SCHEMA }
    }
  },
  {
    path: '/gallery',
    title: "Gallery — Eggless Cake Creations in Ahmedabad | Kelly's Baking Stories",
    description: "Browse our gallery of 100% eggless handcrafted cakes, cheesecakes, brownies and custom creations delivered across Ahmedabad.",
    keywords: "cake gallery Ahmedabad, custom cake photos, eggless dessert gallery, cake designs Ahmedabad",
    ogTitle: "Gallery — Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Kelly's Baking Stories Gallery",
      "description": "Photos of 100% eggless handcrafted cakes and desserts from Ahmedabad",
      "url": `${BASE_URL}/gallery`
    }
  },
  {
    path: '/contact',
    title: "Contact Us — Order Eggless Cakes in Ahmedabad | Kelly's Baking Stories",
    description: "Get in touch with Kelly's Baking Stories. Reach us on WhatsApp, Instagram, or visit us in Ahmedabad. Order custom eggless cakes and desserts today.",
    keywords: "order cakes Ahmedabad, contact Kelly's Baking Stories, WhatsApp cake order, eggless cake delivery",
    ogTitle: "Contact — Kelly's Baking Stories Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kelly's Baking Stories",
      "url": `${BASE_URL}/contact`,
      "logo": LOGO,
      "description": "100% eggless bakery — custom cakes, cheesecakes, desserts and hampers in Ahmedabad",
      "telephone": "+91-8799055079",
      "address": BAKERY_SCHEMA.address,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+91-8799055079",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      },
      "sameAs": BAKERY_SCHEMA.sameAs
    }
  },
  {
    path: '/custom-birthday-cakes-ahmedabad',
    title: "Custom Eggless Birthday Cakes in Ahmedabad — Fresh & Handcrafted | Kelly's Baking Stories",
    description: "Order custom eggless birthday cakes in Ahmedabad made with real fruits, premium chocolate, homemade fillings and no artificial essence. Freshly baked to order.",
    keywords: "birthday cakes Ahmedabad, custom birthday cake Ahmedabad, eggless birthday cake, birthday cake delivery Ahmedabad",
    ogTitle: "Custom Birthday Cakes in Ahmedabad | Kelly's Baking Stories",
    jsonLd: productOffer("Custom Eggless Birthday Cakes in Ahmedabad", "Handcrafted 100% eggless birthday cakes made fresh to order with premium ingredients in Ahmedabad", "/custom-birthday-cakes-ahmedabad")
  },
  {
    path: '/cheesecakes-ahmedabad',
    title: "Handcrafted Eggless Cheesecakes in Ahmedabad — Made Fresh | Kelly's Baking Stories",
    description: "Order freshly baked eggless cheesecakes in Ahmedabad using real fruits, premium cream cheese and homemade curds. No artificial essence. Blueberry, mango, Biscoff & more.",
    keywords: "cheesecakes Ahmedabad, eggless cheesecake, blueberry cheesecake Ahmedabad, baked cheesecake order Ahmedabad",
    ogTitle: "Cheesecakes in Ahmedabad | Kelly's Baking Stories",
    jsonLd: productOffer("Handcrafted Eggless Cheesecakes in Ahmedabad", "Freshly baked eggless cheesecakes with real fruits and premium cream cheese in Ahmedabad", "/cheesecakes-ahmedabad")
  },
  {
    path: '/brownies-ahmedabad',
    title: "Fudgy Eggless Brownies in Ahmedabad — Belgian Chocolate | Kelly's Baking Stories",
    description: "Order rich fudgy eggless brownies in Ahmedabad made with premium Belgian chocolate and real butter. Walnut, Nutella, salted caramel and more flavours available.",
    keywords: "brownies Ahmedabad, eggless brownies, fudgy brownies Ahmedabad, chocolate brownies order Ahmedabad",
    ogTitle: "Brownies in Ahmedabad | Kelly's Baking Stories",
    jsonLd: productOffer("Handcrafted Eggless Brownies in Ahmedabad", "Rich fudgy eggless brownies made with premium Belgian chocolate in Ahmedabad", "/brownies-ahmedabad")
  },
  {
    path: '/dessert-boxes-ahmedabad',
    title: "Dessert Gift Boxes & Hampers in Ahmedabad — Curated Treats | Kelly's Baking Stories",
    description: "Send curated eggless dessert boxes and hampers in Ahmedabad for birthdays, festivals, corporate gifting & celebrations. Brownies, cookies, cake slices and more made fresh.",
    keywords: "dessert boxes Ahmedabad, gift hampers Ahmedabad, Diwali dessert box, corporate gifts Ahmedabad, eggless hampers",
    ogTitle: "Dessert Boxes & Hampers in Ahmedabad | Kelly's Baking Stories",
    jsonLd: productOffer("Dessert Gift Boxes & Hampers in Ahmedabad", "Curated eggless dessert boxes with brownies, cookies and treats for gifting in Ahmedabad", "/dessert-boxes-ahmedabad")
  },
  {
    path: '/custom-cakes-ahmedabad',
    title: "Custom Eggless Celebration Cakes in Ahmedabad — Weddings, Birthdays & More | Kelly's Baking Stories",
    description: "Order custom eggless celebration cakes in Ahmedabad for weddings, birthdays, anniversaries and special occasions. Designed and baked fresh with premium ingredients.",
    keywords: "custom cakes Ahmedabad, eggless wedding cakes, celebration cakes Ahmedabad, custom cake order",
    ogTitle: "Custom Cakes in Ahmedabad | Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Eggless Celebration Cakes in Ahmedabad",
      "description": "Bespoke 100% eggless cakes designed and baked for weddings, birthdays and all celebrations in Ahmedabad",
      "url": `${BASE_URL}/custom-cakes-ahmedabad`,
      "areaServed": "Ahmedabad",
      "provider": { ...BAKERY_SCHEMA }
    }
  },
  {
    path: '/chocolate-orange-cake-ahmedabad',
    title: "Chocolate Orange Cake in Ahmedabad — Eggless, Belgian Chocolate & Fresh Orange | Kelly's Baking Stories",
    description: "Order our signature eggless Chocolate Orange Cake in Ahmedabad — rich Belgian dark chocolate with fresh orange zest, homemade orange curd and ganache. No artificial flavours.",
    keywords: "chocolate orange cake Ahmedabad, eggless chocolate cake, premium chocolate cake order, Belgian chocolate cake Ahmedabad",
    ogTitle: "Chocolate Orange Cake in Ahmedabad | Kelly's Baking Stories",
    jsonLd: productOffer("Eggless Chocolate Orange Cake", "Rich Belgian dark chocolate cake with fresh orange zest and homemade orange curd — 100% eggless", "/chocolate-orange-cake-ahmedabad")
  }
];

// ─── HTML generation ────────────────────────────────────────────────
function generateHead(route) {
  const url = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
  return `    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${route.ogTitle}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.ogTitle}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <script type="application/ld+json">
    ${JSON.stringify(route.jsonLd, null, 2).split('\n').join('\n    ')}
    </script>`;
}

async function prerender() {
  const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
  const headPattern = /\s*<title>.*?<\/script>/s;

  for (const route of routes) {
    const newHead = generateHead(route);
    const html = indexHtml.replace(headPattern, '\n' + newHead);

    if (route.path === '/') {
      fs.writeFileSync(path.join(DIST, 'index.html'), html);
      console.log(`✓ / → dist/index.html`);
    } else {
      const dir = path.join(DIST, route.path);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      console.log(`✓ ${route.path} → dist${route.path}/index.html`);
    }
  }

  // Auto-generate sitemap from routes
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => {
    const loc = `${BASE_URL}${r.path === '/' ? '/' : r.path}`;
    const priority = r.path === '/' ? '1.0' : r.path === '/menu' ? '0.9' : '0.8';
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
  console.log(`✓ sitemap.xml generated with ${routes.length} URLs`);

  console.log(`\n✅ Pre-rendered ${routes.length} routes with unique meta, OG, Twitter & JSON-LD`);
}

prerender();
