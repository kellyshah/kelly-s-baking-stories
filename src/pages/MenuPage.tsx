import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Cake, Cookie, IceCream, Star } from "lucide-react";

const categories = [
  {
    id: "cakes",
    label: "Cakes & Custom Cakes",
    icon: Cake,
    description: "From elegant celebrations to bespoke designer hampers — every cake is a canvas.",
    items: [
      { name: "Cakes", description: "Signature flavours crafted with premium ingredients, made fresh for every occasion." },
      { name: "Cheesecake", description: "Rich, creamy, and perfectly set — classic and seasonal varieties available." },
      { name: "Customised Designer Hampers", description: "Curated dessert collections, beautifully packaged for gifting and celebrations." },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Treats",
    icon: Cookie,
    description: "Bite-sized indulgences and everyday favourites, made with love and zero shortcuts.",
    items: [
      { name: "Cupcakes", description: "Beautifully piped, moist cupcakes in a variety of flavours." },
      { name: "Brownies", description: "Fudgy, rich, and deeply chocolatey — a crowd favourite." },
      { name: "Cookies", description: "Crispy on the edges, chewy in the center. Available in classic and seasonal flavours." },
      { name: "Donuts", description: "Soft, fluffy donuts with artisan glazes and toppings." },
      { name: "Chocolate", description: "Handcrafted chocolates and bark made with premium cocoa." },
      { name: "Truffle Balls", description: "Melt-in-your-mouth truffles in indulgent flavour combinations." },
    ],
  },
  {
    id: "premium",
    label: "Premium Desserts",
    icon: IceCream,
    description: "Elevated desserts for the refined palate — layered, textured, and unforgettable.",
    items: [
      { name: "Jar Cakes", description: "Layered cakes in a jar — perfect for personal indulgence or gifting." },
      { name: "Mousse", description: "Light, airy, and velvety smooth — available in classic and exotic flavours." },
      { name: "Tiramisu", description: "An Italian classic reimagined with our signature touch." },
      { name: "Puddings", description: "Comforting, creamy puddings with a homemade feel and premium finish." },
    ],
  },
  {
    id: "special",
    label: "Special",
    icon: Star,
    description: "Our pride — handcrafted specialties that set us apart.",
    items: [
      { name: "Macarons (Eggless)", description: "Delicate, flavourful, and completely eggless — a Kelly's signature that redefines what's possible." },
      { name: "Corporate Hampers", description: "Professionally curated dessert hampers perfect for corporate gifting and events." },
      { name: "Customized Hampers", description: "Bespoke dessert hampers tailored to your theme, preferences, and occasion." },
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
                    <div
                      key={item.name}
                      className="group relative bg-card border border-border/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg mb-2 text-foreground">{item.name}</h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
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
