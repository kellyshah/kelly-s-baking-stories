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

const routes = [
  {
    path: '/',
    title: "Kelly's Baking Stories — Custom Cakes & Desserts in Ahmedabad",
    description: "Order handcrafted cakes, cheesecakes, brownies and dessert boxes in Ahmedabad. Freshly baked with real fruits, nuts and premium chocolate.",
    ogTitle: "Kelly's Baking Stories — Custom Cakes & Desserts in Ahmedabad",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": "Kelly's Baking Stories",
      "description": "Handcrafted cakes, cheesecakes, brownies and dessert boxes in Ahmedabad",
      "url": BASE_URL,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://instagram.com/Kellys_baking_stories"
      ]
    }
  },
  {
    path: '/about',
    title: "About Us — Kelly's Baking Stories | Our Story & Values",
    description: "Learn about Kelly's Baking Stories — our passion for handcrafted cakes, our founder's journey, and the values that make every dessert special.",
    ogTitle: "About Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Kelly's Baking Stories",
      "description": "Our story, founder bio, and core values",
      "url": `${BASE_URL}/about`,
      "mainEntity": {
        "@type": "Bakery",
        "name": "Kelly's Baking Stories",
        "url": BASE_URL
      }
    }
  },
  {
    path: '/menu',
    title: "Menu & Prices — Kelly's Baking Stories | Cakes, Brownies & More",
    description: "Browse our full menu — exotic cakes, signature cakes, brownies, dessert jars, macarons & more. View prices and order via WhatsApp.",
    ogTitle: "Our Menu — Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Kelly's Baking Stories Menu",
      "description": "Full menu with prices for cakes, brownies, dessert jars, and macarons",
      "url": `${BASE_URL}/menu`,
      "hasMenuSection": [
        { "@type": "MenuSection", "name": "Exotic Cakes" },
        { "@type": "MenuSection", "name": "Signature Cakes" },
        { "@type": "MenuSection", "name": "Brownies" },
        { "@type": "MenuSection", "name": "Dessert Jars" },
        { "@type": "MenuSection", "name": "Eggless Vegan Macarons" }
      ]
    }
  },
  {
    path: '/custom-orders',
    title: "Custom Cake Orders — Kelly's Baking Stories | Bespoke Cakes Ahmedabad",
    description: "Order a custom cake for birthdays, weddings, anniversaries & special occasions. Tell us your vision and we'll craft it fresh to order.",
    ogTitle: "Custom Orders — Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Cake Orders",
      "description": "Bespoke, made-to-order celebration cakes for all occasions",
      "url": `${BASE_URL}/custom-orders`,
      "provider": {
        "@type": "Bakery",
        "name": "Kelly's Baking Stories",
        "url": BASE_URL
      }
    }
  },
  {
    path: '/gallery',
    title: "Gallery — Kelly's Baking Stories | Our Cake Creations",
    description: "Browse our gallery of handcrafted cakes, brownies, desserts and custom creations. See the artistry behind every order.",
    ogTitle: "Gallery — Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Kelly's Baking Stories Gallery",
      "description": "Photos of our handcrafted cakes and desserts",
      "url": `${BASE_URL}/gallery`
    }
  },
  {
    path: '/contact',
    title: "Contact Us — Kelly's Baking Stories | Order & Inquiries",
    description: "Get in touch with Kelly's Baking Stories. Reach us on WhatsApp, Instagram, or visit us in Ahmedabad. Order cakes and desserts today.",
    ogTitle: "Contact — Kelly's Baking Stories",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Kelly's Baking Stories",
      "description": "Get in touch for orders and inquiries",
      "url": `${BASE_URL}/contact`,
      "mainEntity": {
        "@type": "Bakery",
        "name": "Kelly's Baking Stories",
        "url": BASE_URL,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressCountry": "IN"
        }
      }
    }
  }
];

function generateHead(route) {
  return `    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta property="og:title" content="${route.ogTitle}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${BASE_URL}${route.path === '/' ? '' : route.path}" />
    <link rel="canonical" href="${BASE_URL}${route.path === '/' ? '' : route.path}" />
    <script type="application/ld+json">
    ${JSON.stringify(route.jsonLd, null, 2).split('\n').join('\n    ')}
    </script>`;
}

async function prerender() {
  const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  // Pattern to match the existing <title> through closing </script> of JSON-LD
  const headPattern = /\s*<title>.*?<\/script>/s;

  for (const route of routes) {
    const newHead = generateHead(route);
    const html = indexHtml.replace(headPattern, '\n' + newHead);

    if (route.path === '/') {
      // Overwrite root index.html
      fs.writeFileSync(path.join(DIST, 'index.html'), html);
      console.log(`✓ / → dist/index.html`);
    } else {
      // Create directory and index.html for each route
      const dir = path.join(DIST, route.path);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      console.log(`✓ ${route.path} → dist${route.path}/index.html`);
    }
  }

  console.log(`\n✅ Pre-rendered ${routes.length} routes with unique meta tags & JSON-LD`);
}

prerender();
