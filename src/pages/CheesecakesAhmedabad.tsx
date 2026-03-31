import { Link } from "react-router-dom";
import { MessageCircle, Cake } from "lucide-react";
import cheesecake from "@/assets/cheesecake.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to order cheesecakes.")}`;

const CheesecakesAhmedabad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Freshly Baked to Order
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Handcrafted Cheesecakes in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            At Kelly's Baking Stories, our cheesecakes are freshly made to order in Ahmedabad using real fruits, homemade curds, premium cream cheese and no artificial essence. From baked cheesecakes to seasonal flavours, every dessert is made specially for your celebration.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Order Cheesecake
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Why Our Cheesecakes Stand Out
              </h2>
              <p className="text-muted-foreground mb-4">
                Every cheesecake from Kelly's Baking Stories is a labour of love. We use premium imported cream cheese, fresh seasonal fruits, handmade compotes and a buttery biscuit base made from scratch. No artificial flavours, no shortcuts — just real ingredients that you can taste in every bite.
              </p>
              <p className="text-muted-foreground">
                Whether you're celebrating a birthday, anniversary, or simply craving something indulgent, our cheesecakes in Ahmedabad are the perfect treat. Available in individual portions, 500g, and 1kg sizes.
              </p>
            </div>
            <img
              src={cheesecake}
              alt="Freshly baked cheesecake with berry compote topping made in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Our Cheesecake Flavours
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Classic Baked Cheesecake", desc: "Rich, creamy and perfectly set" },
                { name: "Blueberry Cheesecake", desc: "Topped with homemade blueberry compote" },
                { name: "Mango Cheesecake", desc: "Made with fresh Alphonso mangoes (seasonal)" },
                { name: "Lotus Biscoff Cheesecake", desc: "Caramelized Biscoff spread throughout" },
                { name: "Strawberry Cheesecake", desc: "Fresh strawberries and cream cheese perfection" },
                { name: "Chocolate Cheesecake", desc: "Belgian chocolate swirled into cream cheese" },
                { name: "Raspberry Cheesecake", desc: "Tangy raspberry compote on creamy base" },
                { name: "Peanut Butter Cheesecake", desc: "For PB lovers — rich and decadent" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                  <Cake className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Order */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Order Cheesecakes in Ahmedabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              All cheesecakes require 24-48 hours advance notice as they are freshly baked to order. Simply message us on WhatsApp with your preferred flavour and size. We deliver across Ahmedabad including Satellite, Bopal, Prahlad Nagar, Bodakdev and Thaltej.
            </p>
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              See our <Link to="/menu" className="text-primary underline">full menu & prices</Link> for all options.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheesecakesAhmedabad;
