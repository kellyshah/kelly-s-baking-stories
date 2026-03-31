import { Link } from "react-router-dom";
import { MessageCircle, Cake } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import chocoAlmondCake from "@/assets/choco-almond-cake.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to order brownies.")}`;

const BrowniesAhmedabad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Fudgy & Irresistible
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Handcrafted Brownies in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Indulge in rich, fudgy brownies made with premium Belgian chocolate, real butter and no artificial flavours. At Kelly's Baking Stories, our brownies are baked fresh to order in Ahmedabad — perfect for gifting, parties or a personal treat.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Order Brownies
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                What Makes Our Brownies Special
              </h2>
              <p className="text-muted-foreground mb-4">
                Our brownies are unapologetically decadent. Made with premium dark Belgian chocolate, real unsalted butter, and baked at low temperatures for that perfect fudgy centre with a crackly top. Every batch is made fresh — never stored, never reheated.
              </p>
              <p className="text-muted-foreground">
                Available as a box of 4 or 6, our brownies make the perfect gift for birthdays, anniversaries, Diwali hampers, or just because. We also offer brownie platters for parties and corporate events across Ahmedabad.
              </p>
            </div>
            <img
              src={chocoAlmondCake}
              alt="Rich fudgy chocolate brownies with nuts baked fresh in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Our Brownie Flavours
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Classic Fudge Brownie", desc: "Pure Belgian chocolate, perfectly fudgy" },
                { name: "Walnut Brownie", desc: "Loaded with premium California walnuts" },
                { name: "Nutella Brownie", desc: "Swirled with generous Nutella filling" },
                { name: "Salted Caramel Brownie", desc: "Sea salt meets homemade caramel" },
                { name: "Biscoff Brownie", desc: "Lotus Biscoff spread and crumble topping" },
                { name: "Cream Cheese Brownie", desc: "Tangy cream cheese swirl on dark chocolate" },
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

          {/* CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Order Brownies in Ahmedabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our brownies are available in boxes of 4 and 6. We deliver across Ahmedabad — Satellite, Bopal, South Bopal, Prahlad Nagar, Bodakdev and Thaltej. Order via WhatsApp with 24 hours notice.
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
              Browse our <Link to="/menu" className="text-primary underline">full menu & prices</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowniesAhmedabad;
