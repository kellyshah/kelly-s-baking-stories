/**
 * Post-build pre-rendering script.
 * Generates static HTML files for each route with unique meta tags and JSON-LD
 * so search engine crawlers see correct SEO data without executing JavaScript.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const BASE_URL = 'https://kellysbakingstories.in';

const BAKERY_BASE = {
  "@type": "Bakery",
  "name": "Kelly's Baking Stories",
  "url": `${BASE_URL}/`,
  "image": `${BASE_URL}/logo.png`,
  "priceRange": "₹₹",
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
  "servesCuisine": "Desserts"
};

const routes = [
  {
    path: '/',
    title: "Custom Cakes, Cheesecakes & Desserts in Ahmedabad | Kelly's Baking Stories",
    description: "Order handcrafted custom cakes, cheesecakes, brownies and dessert boxes in Ahmedabad. Made fresh with real fruits, homemade fillings, premium chocolate and no artificial essence.",
    ogTitle: "Custom Cakes, Cheesecakes & Desserts in Ahmedabad | Kelly's Baking Stories",
    keywords: "custom cakes Ahmedabad, cheesecakes Ahmedabad, brownies Ahmedabad, dessert boxes Ahmedabad, birthday cakes Ahmedabad, Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      ...BAKERY_BASE,
      "description": "Handcrafted custom cakes, cheesecakes, brownies and desserts in Ahmedabad.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dessert Menu",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Celebration Cakes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cheesecakes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brownies" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dessert Boxes" } }
        ]
      }
    }
  },
  {
    path: '/about',
    title: "About Us — Kelly's Baking Stories | Homemade Cakes in Ahmedabad",
    description: "Learn about Kelly's Baking Stories — our passion for handcrafted cakes with real ingredients, our founder's journey, and why Ahmedabad loves our desserts.",
    ogTitle: "About Kelly's Baking Stories",
    keywords: "homemade cakes Ahmedabad, about Kelly's Baking Stories, artisan bakery Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Kelly's Baking Stories",
      "description": "Our story, values and passion for real ingredient baking in Ahmedabad",
      "url": `${BASE_URL}/about`,
      "mainEntity": { ...BAKERY_BASE }
    }
  },
  {
    path: '/menu',
    title: "Menu & Prices — Cakes, Brownies, Cheesecakes | Kelly's Baking Stories Ahmedabad",
    description: "Browse our full menu — exotic cakes, signature cakes, cheesecakes, brownies, dessert jars, macarons & more. View prices and order via WhatsApp in Ahmedabad.",
    ogTitle: "Our Menu — Kelly's Baking Stories Ahmedabad",
    keywords: "cake menu Ahmedabad, brownie prices Ahmedabad, cheesecake prices, dessert menu Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Kelly's Baking Stories Menu",
      "description": "Full menu with prices for cakes, brownies, cheesecakes, dessert jars, and macarons in Ahmedabad",
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
    title: "Custom Cake Orders in Ahmedabad — Kelly's Baking Stories",
    description: "Order a custom cake for birthdays, weddings, anniversaries & special occasions in Ahmedabad. Share your vision and we'll bake it fresh with premium ingredients.",
    ogTitle: "Custom Orders — Kelly's Baking Stories Ahmedabad",
    keywords: "custom cake order Ahmedabad, bespoke cakes Ahmedabad, celebration cakes Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Cake Orders in Ahmedabad",
      "description": "Bespoke, made-to-order celebration cakes for all occasions in Ahmedabad",
      "url": `${BASE_URL}/custom-orders`,
      "areaServed": "Ahmedabad",
      "provider": { ...BAKERY_BASE }
    }
  },
  {
    path: '/gallery',
    title: "Gallery — Cake Creations in Ahmedabad | Kelly's Baking Stories",
    description: "Browse our gallery of handcrafted cakes, cheesecakes, brownies and custom creations delivered across Ahmedabad.",
    ogTitle: "Gallery — Kelly's Baking Stories",
    keywords: "cake gallery Ahmedabad, custom cake photos, dessert gallery",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Kelly's Baking Stories Gallery",
      "description": "Photos of handcrafted cakes and desserts from Ahmedabad",
      "url": `${BASE_URL}/gallery`
    }
  },
  {
    path: '/contact',
    title: "Contact Us — Order Cakes in Ahmedabad | Kelly's Baking Stories",
    description: "Get in touch with Kelly's Baking Stories. Reach us on WhatsApp, Instagram, or visit us in Ahmedabad. Order custom cakes and desserts today.",
    ogTitle: "Contact — Kelly's Baking Stories Ahmedabad",
    keywords: "order cakes Ahmedabad, contact Kelly's Baking Stories, WhatsApp cake order",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Kelly's Baking Stories",
      "description": "Get in touch for cake orders and inquiries in Ahmedabad",
      "url": `${BASE_URL}/contact`,
      "mainEntity": { ...BAKERY_BASE }
    }
  },
  {
    path: '/custom-birthday-cakes-ahmedabad',
    title: "Custom Birthday Cakes in Ahmedabad — Fresh & Handcrafted | Kelly's Baking Stories",
    description: "Order custom birthday cakes in Ahmedabad made with real fruits, premium chocolate, homemade fillings and no artificial essence. Freshly baked to order.",
    ogTitle: "Custom Birthday Cakes in Ahmedabad | Kelly's Baking Stories",
    keywords: "birthday cakes Ahmedabad, custom birthday cake Ahmedabad, birthday cake delivery Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Custom Birthday Cakes in Ahmedabad",
      "description": "Handcrafted birthday cakes made fresh to order with premium ingredients in Ahmedabad",
      "url": `${BASE_URL}/custom-birthday-cakes-ahmedabad`,
      "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
    }
  },
  {
    path: '/cheesecakes-ahmedabad',
    title: "Handcrafted Cheesecakes in Ahmedabad — Made Fresh | Kelly's Baking Stories",
    description: "Order freshly baked cheesecakes in Ahmedabad using real fruits, premium cream cheese and homemade curds. No artificial essence. Blueberry, mango, Biscoff & more.",
    ogTitle: "Cheesecakes in Ahmedabad | Kelly's Baking Stories",
    keywords: "cheesecakes Ahmedabad, blueberry cheesecake Ahmedabad, baked cheesecake order Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Handcrafted Cheesecakes in Ahmedabad",
      "description": "Freshly baked cheesecakes with real fruits and premium cream cheese in Ahmedabad",
      "url": `${BASE_URL}/cheesecakes-ahmedabad`,
      "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
    }
  },
  {
    path: '/brownies-ahmedabad',
    title: "Fudgy Brownies in Ahmedabad — Belgian Chocolate | Kelly's Baking Stories",
    description: "Order rich fudgy brownies in Ahmedabad made with premium Belgian chocolate and real butter. Walnut, Nutella, salted caramel and more flavours available.",
    ogTitle: "Brownies in Ahmedabad | Kelly's Baking Stories",
    keywords: "brownies Ahmedabad, fudgy brownies Ahmedabad, chocolate brownies order Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Handcrafted Brownies in Ahmedabad",
      "description": "Rich fudgy brownies made with premium Belgian chocolate in Ahmedabad",
      "url": `${BASE_URL}/brownies-ahmedabad`,
      "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
    }
  },
  {
    path: '/dessert-boxes-ahmedabad',
    title: "Dessert Gift Boxes in Ahmedabad — Curated Treats | Kelly's Baking Stories",
    description: "Send curated dessert boxes in Ahmedabad for birthdays, festivals, corporate gifting & celebrations. Brownies, cookies, cake slices and more made fresh.",
    ogTitle: "Dessert Boxes in Ahmedabad | Kelly's Baking Stories",
    keywords: "dessert boxes Ahmedabad, gift hampers Ahmedabad, Diwali dessert box Ahmedabad, corporate gifts Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Dessert Gift Boxes in Ahmedabad",
      "description": "Curated dessert boxes with brownies, cookies and treats for gifting in Ahmedabad",
      "url": `${BASE_URL}/dessert-boxes-ahmedabad`,
      "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
    }
  },
  {
    path: '/custom-cakes-ahmedabad',
    title: "Custom Celebration Cakes in Ahmedabad — Weddings, Birthdays & More | Kelly's Baking Stories",
    description: "Order custom celebration cakes in Ahmedabad for weddings, birthdays, anniversaries and special occasions. Designed and baked fresh with premium ingredients.",
    ogTitle: "Custom Cakes in Ahmedabad | Kelly's Baking Stories",
    keywords: "custom cakes Ahmedabad, wedding cakes Ahmedabad, celebration cakes Ahmedabad, custom cake order",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Celebration Cakes in Ahmedabad",
      "description": "Bespoke cakes designed and baked for weddings, birthdays and all celebrations in Ahmedabad",
      "url": `${BASE_URL}/custom-cakes-ahmedabad`,
      "areaServed": "Ahmedabad",
      "provider": { ...BAKERY_BASE }
    }
  },
  {
    path: '/chocolate-orange-cake-ahmedabad',
    title: "Chocolate Orange Cake in Ahmedabad — Belgian Chocolate & Fresh Orange | Kelly's Baking Stories",
    description: "Order our signature Chocolate Orange Cake in Ahmedabad — rich Belgian dark chocolate with fresh orange zest, homemade orange curd and ganache. No artificial flavours.",
    ogTitle: "Chocolate Orange Cake in Ahmedabad | Kelly's Baking Stories",
    keywords: "chocolate orange cake Ahmedabad, chocolate cake Ahmedabad, premium chocolate cake order",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Chocolate Orange Cake",
      "description": "Rich Belgian dark chocolate cake with fresh orange zest and homemade orange curd",
      "url": `${BASE_URL}/chocolate-orange-cake-ahmedabad`,
      "brand": { "@type": "Brand", "name": "Kelly's Baking Stories" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/MadeToOrder" }
    }
  }
];

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
    <meta property="og:image" content="${BASE_URL}/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.ogTitle}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${BASE_URL}/og-image.jpg" />
    <script type="application/ld+json">
    ${JSON.stringify(route.jsonLd, null, 2).split('\n').join('\n    ')}
    </script>`;
}

async function prerender() {
  const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  // Pattern to match from <title> through closing </script> of JSON-LD
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

  console.log(`\n✅ Pre-rendered ${routes.length} routes with unique meta tags, OG, Twitter & JSON-LD`);
}

prerender();
