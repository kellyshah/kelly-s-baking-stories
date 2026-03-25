import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Cake, Cookie, IceCream, Star, BookOpen } from "lucide-react";

import cakesImg from "@/assets/menu/cakes.jpg";
import cheesecakeImg from "@/assets/menu/cheesecake.jpg";
import designerHampersImg from "@/assets/menu/designer-hampers.jpg";
import cupcakesImg from "@/assets/menu/cupcakes.jpg";
import browniesImg from "@/assets/menu/brownies.jpg";
import cookiesImg from "@/assets/menu/cookies.jpg";
import donutsImg from "@/assets/menu/donuts.jpg";
import chocolateImg from "@/assets/menu/chocolate.jpg";
import truffleBallsImg from "@/assets/menu/truffle-balls.jpg";
import jarCakesImg from "@/assets/menu/jar-cakes.jpg";
import mousseImg from "@/assets/menu/mousse.jpg";
import tiramisuImg from "@/assets/menu/tiramisu.jpg";
import puddingsImg from "@/assets/menu/puddings.jpg";
import macaronsImg from "@/assets/menu/macarons.jpg";
import corporateHampersImg from "@/assets/menu/corporate-hampers.jpg";
import customizedHampersImg from "@/assets/menu/customized-hampers.jpg";

const fullMenu = [
  {
    section: "Exotic Cakes",
    items: [
      { name: "Gianduja", price: "₹899", description: "Rich & moist chocolate cake with a molten hazelnut praline & chocolate cream that oozes out with every bite, creating a luscious and irresistible experience.", bestseller: true },
      { name: "Chocolate Truffle", price: "₹699" },
      { name: "Dark Chocolate Salted Caramel", price: "₹799", bestseller: true },
      { name: "Mocha Frappe Cake", price: "₹699", description: "Delightful blend of rich coffee-infused cake with creamy mocha frosting, creating a perfect balance of coffee and chocolate in every bite — gateau au moka.", bestseller: true },
      { name: "Hazelnut Praline Dark Chocolate", price: "₹949" },
      { name: "Biscoff", price: "₹899" },
      { name: "Swiss Chocolate", price: "₹749", description: "Made with premium Swiss cocoa, this treat boasts a moist & creamy center, delivering a luxurious experience that is simply irresistible.", bestseller: true },
      { name: "Red Velvet Cake Cream Cheese", price: "₹775" },
    ],
  },
  {
    section: "Signature Cakes",
    items: [
      { name: "Pistachio White Chocolate", price: "₹899", description: "Harmonious blend of finely ground pistachios and creamy white chocolate creating a balance of texture & flavor with every bite.", bestseller: true },
      { name: "Rose Pistachio", price: "₹899" },
      { name: "Mango Madness", price: "₹729", description: "Featuring layers of light and fluffy mango gateau, filled and topped with fresh mangoes — gateau à la mangue.", bestseller: true },
      { name: "Tiramisu", price: "₹849" },
      { name: "Lemon Curd", price: "₹729" },
      { name: "Vanilla Salted Caramel", price: "₹749" },
      { name: "Pineapple", price: "₹699" },
      { name: "Hazelnut Crunch", price: "₹849" },
      { name: "Classic Vanilla", price: "₹699" },
      { name: "Strawberry Hibiscus", price: "₹849", description: "Layers of delicate hibiscus-infused cake filled with a sweet & tangy strawberry compote creating a perfect balance.", bestseller: true },
      { name: "Vanilla Praline", price: "₹749" },
    ],
  },
  {
    section: "Brownies",
    items: [
      { name: "Double Chocolate", price: "₹129", description: "A rich indulgence of premium cocoa and 46% dark coverture chocolate.", bestseller: true },
      { name: "Walnut Brownie", price: "₹145" },
      { name: "Salted Caramel Brownie", price: "₹129" },
      { name: "Biscoff Brownie", price: "₹145", description: "A heavenly blend of rich chocolate swirled with creamy Biscoff, creating a perfect balance of indulgence in every bite.", bestseller: true },
    ],
  },
  {
    section: "Cheesecakes",
    items: [
      { name: "Nutella", price: "₹799" },
      { name: "Biscoff", price: "₹849", bestseller: true },
      { name: "Blueberry", price: "₹699" },
      { name: "Salted Caramel", price: "₹699" },
      { name: "Seasonal Fruit", price: "₹699" },
      { name: "Strawberry", price: "₹699", bestseller: true },
    ],
  },
  {
    section: "Cookies",
    items: [
      { name: "Oatmeal Cookies" },
      { name: "Butter Cookies" },
      { name: "Sandwich Cookies" },
      { name: "Chocolate Chips Cookies" },
    ],
  },
  {
    section: "Cupcakes",
    items: [
      { name: "Swiss Chocolate", bestseller: true },
      { name: "Classic Vanilla" },
      { name: "Red Velvet" },
      { name: "Pineapple", bestseller: true },
      { name: "Seasonal Fruit" },
    ],
  },
  {
    section: "Pies & Tarts",
    items: [
      { name: "Salted Caramel" },
      { name: "Lemon Tart" },
      { name: "Chocolate Tart" },
    ],
  },
  {
    section: "Donuts",
    items: [
      { name: "OG Donut" },
      { name: "KitKat Donut" },
      { name: "Sugar Cinnamon Donut" },
      { name: "Nutella Bombolini" },
      { name: "Jelly Bombolini" },
      { name: "Creme Donut" },
      { name: "Creamy Tiramisu Donut" },
    ],
  },
  {
    section: "Jar Cakes",
    items: [
      { name: "Dark Chocolate Salted Caramel" },
      { name: "Blueberry" },
      { name: "Lemon Curd" },
      { name: "Swiss Chocolate" },
      { name: "Hazelnut Dark Chocolate" },
      { name: "Pistachio White Chocolate" },
      { name: "White Chocolate" },
    ],
  },
  {
    section: "Corporate / Wedding Hampers",
    items: [
      { name: "Hampers" },
      { name: "Corporate Orders" },
      { name: "Party Orders" },
    ],
  },
];

const categories = [
  {
    id: "cakes",
    label: "Cakes & Custom Cakes",
    icon: Cake,
    description: "From elegant celebrations to bespoke designer hampers — every cake is a canvas.",
    items: [
      { name: "Cakes", description: "Signature flavours crafted with premium ingredients, made fresh for every occasion.", image: cakesImg },
      { name: "Cheesecake", description: "Rich, creamy, and perfectly set — classic and seasonal varieties available.", image: cheesecakeImg },
      { name: "Customised Designer Hampers", description: "Curated dessert collections, beautifully packaged for gifting and celebrations.", image: designerHampersImg },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Treats",
    icon: Cookie,
    description: "Bite-sized indulgences and everyday favourites, made with love and zero shortcuts.",
    items: [
      { name: "Cupcakes", description: "Beautifully piped, moist cupcakes in a variety of flavours.", image: cupcakesImg },
      { name: "Brownies", description: "Fudgy, rich, and deeply chocolatey — a crowd favourite.", image: browniesImg },
      { name: "Cookies", description: "Crispy on the edges, chewy in the center. Available in classic and seasonal flavours.", image: cookiesImg },
      { name: "Donuts", description: "Soft, fluffy donuts with artisan glazes and toppings.", image: donutsImg },
      { name: "Chocolate", description: "Handcrafted chocolates and bark made with premium cocoa.", image: chocolateImg },
      { name: "Truffle Balls", description: "Melt-in-your-mouth truffles in indulgent flavour combinations.", image: truffleBallsImg },
    ],
  },
  {
    id: "premium",
    label: "Premium Desserts",
    icon: IceCream,
    description: "Elevated desserts for the refined palate — layered, textured, and unforgettable.",
    items: [
      { name: "Jar Cakes", description: "Layered cakes in a jar — perfect for personal indulgence or gifting.", image: jarCakesImg },
      { name: "Mousse", description: "Light, airy, and velvety smooth — available in classic and exotic flavours.", image: mousseImg },
      { name: "Tiramisu", description: "An Italian classic reimagined with our signature touch.", image: tiramisuImg },
      { name: "Puddings", description: "Comforting, creamy puddings with a homemade feel and premium finish.", image: puddingsImg },
    ],
  },
  {
    id: "special",
    label: "Special",
    icon: Star,
    description: "Our pride — handcrafted specialties that set us apart.",
    items: [
      { name: "Macarons (Eggless)", description: "Delicate, flavourful, and completely eggless — a Kelly's signature that redefines what's possible.", image: macaronsImg },
      { name: "Corporate Hampers", description: "Professionally curated dessert hampers perfect for corporate gifting and events.", image: corporateHampersImg },
      { name: "Customized Hampers", description: "Bespoke dessert hampers tailored to your theme, preferences, and occasion.", image: customizedHampersImg },
    ],
  },
];

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("cakes");

  return (
    <>
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <p className="caption-text mb-3">Explore</p>
          <h1 className="heading-xl mb-4">Our Creations</h1>
          <p className="body-text max-w-xl mx-auto">
            Every creation is made fresh to order using premium ingredients — no preservatives, 
            no palm oil, no shortcuts. Just honest, beautiful desserts.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="section-padding pt-0 pb-16">
        <div className="container-narrow max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-card text-muted-foreground font-sans text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md hover:border-primary/40"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
                  </TabsTrigger>
                );
              })}
              <TabsTrigger
                value="full-menu"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 bg-card text-muted-foreground font-sans text-sm transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md hover:border-primary/40"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Full Menu & Prices</span>
                <span className="sm:hidden">Full Menu</span>
              </TabsTrigger>
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0 animate-fade-in">
                {/* Category header */}
                <div className="text-center mb-10">
                  <h2 className="heading-md mb-3">{cat.label}</h2>
                  <p className="body-text max-w-lg mx-auto text-sm">{cat.description}</p>
                </div>

                {/* Items grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((item) => (
                    <a
                      key={item.name}
                      href={`https://wa.me/918799055079?text=${encodeURIComponent(`Hi Kelly! I'm interested in ${item.name}. Could you share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-card border border-border/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 block cursor-pointer no-underline"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          width={640}
                          height={640}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg mb-2 text-foreground">{item.name}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </TabsContent>
            ))}

            {/* Full Menu Tab */}
            <TabsContent value="full-menu" className="mt-0 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="heading-md mb-3">Full Menu & Prices</h2>
                <p className="body-text max-w-lg mx-auto text-sm">
                  Complete menu with all items and pricing. Tap any item to order on WhatsApp.
                </p>
              </div>

              <div className="space-y-10">
                {fullMenu.map((section) => (
                  <div key={section.section}>
                    <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border/40">
                      {section.section}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <a
                          key={item.name}
                          href={`https://wa.me/918799055079?text=${encodeURIComponent(`Hi Kelly! I'm interested in ${item.name} (${section.section}). Could you share more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-4 py-3 px-4 rounded-lg hover:bg-accent/40 transition-colors cursor-pointer no-underline"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-sans font-medium text-foreground">{item.name}</span>
                              {item.bestseller && (
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-sans">
                                  ★ Bestseller
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                          {item.price && (
                            <span className="font-sans font-semibold text-foreground whitespace-nowrap">
                              {item.price}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-accent/30 rounded-xl text-center">
                <p className="font-sans text-sm text-muted-foreground">
                  ★ Represents Bestsellers · Additional customization options are available in terms of theme, size, or flavors, with prices subject to change based on customization.
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-2">
                  We use the finest ingredients, real fruits, no artificial flavors, essence or preservatives.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/30 text-center">
        <div className="container-narrow max-w-2xl mx-auto">
          <h2 className="heading-md mb-3">Have something in mind?</h2>
          <p className="body-text mb-8 text-sm">
            Every order is custom. Share your vision and we'll bring it to life.
          </p>
          <a
            href="https://wa.me/918799055079?text=Hi%20Kelly!%20I'd%20like%20to%20discuss%20a%20custom%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start Your Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
