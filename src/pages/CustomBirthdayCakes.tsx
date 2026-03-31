import { Link } from "react-router-dom";
import { Cake, Heart, ArrowRight, MessageCircle } from "lucide-react";
import celebrationCake from "@/assets/celebration-cake.jpg";
import customCake from "@/assets/custom-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to order a custom birthday cake.")}`;

const CustomBirthdayCakes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Made Fresh to Order
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Custom Birthday Cakes in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Celebrate every milestone with a handcrafted birthday cake made with real fruits, premium chocolate, homemade fillings and no artificial essence. At Kelly's Baking Stories, every birthday cake is baked fresh to order in Ahmedabad.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Order Your Birthday Cake
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Why Choose Our Birthday Cakes?
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe birthdays deserve something truly special. Our custom birthday cakes in Ahmedabad are crafted from scratch using the finest ingredients — real Belgian chocolate, fresh seasonal fruits, homemade cream cheese fillings and pure vanilla extract. We never use artificial flavours or preservatives.
              </p>
              <p className="text-muted-foreground">
                Whether you want a simple elegant design or an elaborate themed creation, we work closely with you to bring your vision to life. From kids' character cakes to sophisticated adult celebrations, every cake is a unique masterpiece.
              </p>
            </div>
            <img
              src={celebrationCake}
              alt="Custom birthday cake with fresh fruits and premium chocolate decoration in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src={customCake}
              alt="Handcrafted custom celebration cake for birthday party in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover md:order-first"
            />
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Popular Birthday Cake Flavours
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Belgian Chocolate Truffle with Ganache",
                  "Fresh Fruit Vanilla Sponge",
                  "Blueberry Cheesecake",
                  "Red Velvet with Cream Cheese",
                  "Pistachio & Rose",
                  "Mango Delight (Seasonal)",
                  "Chocolate Orange Crunch",
                  "Butterscotch Caramel"
                ].map((flavour) => (
                  <li key={flavour} className="flex items-center gap-2">
                    <Cake className="w-4 h-4 text-primary flex-shrink-0" />
                    {flavour}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to Order */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              How to Order Your Birthday Cake
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ordering a custom birthday cake in Ahmedabad is simple. Just message us on WhatsApp with your preferred flavour, size, design ideas and delivery date. We recommend ordering at least 2-3 days in advance for custom designs.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { step: "1", label: "Share Your Vision", desc: "Tell us the flavour, size & design" },
                { step: "2", label: "We Bake Fresh", desc: "Made to order on your chosen date" },
                { step: "3", label: "Celebrate!", desc: "Pickup or delivery in Ahmedabad" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary/15 text-primary rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas Served */}
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Delivering Birthday Cakes Across Ahmedabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We deliver custom birthday cakes to Satellite, Bopal, South Bopal, Prahlad Nagar, Bodakdev, Thaltej and surrounding areas in Ahmedabad. Self-pickup is also available.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Satellite", "Bopal", "South Bopal", "Prahlad Nagar", "Bodakdev", "Thaltej"].map((area) => (
                <span key={area} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Order Now on WhatsApp
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Or explore our <Link to="/menu" className="text-primary underline">full menu</Link> for more options.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomBirthdayCakes;
