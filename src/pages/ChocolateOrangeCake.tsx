import { Link } from "react-router-dom";
import { MessageCircle, Cake } from "lucide-react";
import pistachioCake from "@/assets/pistachio-cake.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to order a Chocolate Orange Cake.")}`;

const ChocolateOrangeCake = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Signature Flavour
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Chocolate Orange Cake in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the perfect harmony of rich Belgian dark chocolate and fresh orange zest. Our Chocolate Orange Cake is one of the most loved creations at Kelly's Baking Stories - baked fresh to order in Ahmedabad with premium ingredients and no artificial flavours.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Order This Cake
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                What Makes It Special
              </h2>
              <p className="text-muted-foreground mb-4">
                Our Chocolate Orange Cake combines moist dark chocolate sponge layers infused with real orange zest, filled with homemade orange curd and dark chocolate ganache. The result is a sophisticated flavour profile - citrusy, rich and deeply satisfying.
              </p>
              <p className="text-muted-foreground mb-4">
                We use premium Belgian chocolate, freshly squeezed orange juice, real orange zest and pure cocoa. No orange essence, no artificial colouring - just real ingredients that create an unforgettable taste.
              </p>
              <p className="text-muted-foreground">
                Available in 500g and 1kg sizes. Perfect for birthdays, dinner parties, or as a thoughtful gift for the chocolate lover in your life.
              </p>
            </div>
            <img
              src={pistachioCake}
              alt="Rich chocolate orange cake with ganache glaze and orange zest decoration in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Details */}
          <div className="bg-card rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Cake Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { label: "Flavour", value: "Dark Chocolate + Fresh Orange" },
                { label: "Filling", value: "Orange curd & chocolate ganache" },
                { label: "Frosting", value: "Dark chocolate ganache glaze" },
                { label: "Sizes", value: "500g / 1 kg" },
                { label: "Egg Option", value: "Eggless available" },
                { label: "Advance Notice", value: "24-48 hours" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-muted-foreground text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Order Your Chocolate Orange Cake
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Available for delivery across Ahmedabad - Satellite, Bopal, Prahlad Nagar, Bodakdev, Thaltej and more. Message us on WhatsApp to order.
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
              Explore more flavours on our <Link to="/menu" className="text-primary underline">full menu</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChocolateOrangeCake;
