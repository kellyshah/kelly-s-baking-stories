import { Link } from "react-router-dom";
import { MessageCircle, Cake, Paintbrush } from "lucide-react";
import customCake from "@/assets/custom-cake.jpg";
import celebrationCake from "@/assets/celebration-cake.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to discuss a custom cake.")}`;

const CustomCakesAhmedabad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Your Vision, Our Craft
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Custom Celebration Cakes in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From weddings to anniversaries, baby showers to milestones — our custom cakes in Ahmedabad are designed and baked uniquely for your occasion. Made with premium ingredients, real fruits and zero artificial essence.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Discuss Your Custom Cake
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Every Cake Tells a Story
              </h2>
              <p className="text-muted-foreground mb-4">
                At Kelly's Baking Stories, we believe every celebration deserves a cake as unique as the moment it marks. Our custom cakes in Ahmedabad are designed from scratch — you share your vision, and we bring it to life with meticulous attention to flavour, design and presentation.
              </p>
              <p className="text-muted-foreground">
                We work with premium Belgian chocolate, fresh seasonal fruits, homemade buttercream and ganache, imported cream cheese and natural flavourings. Every tier is baked fresh, never frozen, and assembled with care on your chosen date.
              </p>
            </div>
            <img
              src={customCake}
              alt="Beautifully designed custom celebration cake handcrafted in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img
              src={celebrationCake}
              alt="Custom wedding and anniversary cakes with elegant decoration in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover md:order-first"
            />
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Occasions We Cater To
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Birthday Celebrations",
                  "Wedding & Engagement Cakes",
                  "Anniversary Cakes",
                  "Baby Shower & Gender Reveal",
                  "Graduation Celebrations",
                  "Corporate Events & Launches",
                  "Festival & Holiday Specials",
                  "Farewell & Retirement Parties"
                ].map((occasion) => (
                  <li key={occasion} className="flex items-center gap-2">
                    <Paintbrush className="w-4 h-4 text-primary flex-shrink-0" />
                    {occasion}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Custom Cake Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We recommend ordering custom cakes at least 3-5 days in advance. For multi-tier or heavily decorated cakes, please allow 5-7 days. Here's how it works:
            </p>
            <div className="grid sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { step: "1", label: "Consultation", desc: "Share your ideas via WhatsApp" },
                { step: "2", label: "Design", desc: "We create a custom design brief" },
                { step: "3", label: "Bake Fresh", desc: "Made on your chosen date" },
                { step: "4", label: "Deliver", desc: "Pickup or delivery in Ahmedabad" },
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

          {/* CTA */}
          <div className="text-center">
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Start Your Custom Order
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              See our <Link to="/menu" className="text-primary underline">menu & prices</Link> or visit our <Link to="/gallery" className="text-primary underline">gallery</Link> for inspiration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomCakesAhmedabad;
