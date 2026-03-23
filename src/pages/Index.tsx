import { Link } from "react-router-dom";
import { MessageCircle, Sparkles, Heart, Clock, Quote, Leaf, ShieldCheck, Paintbrush, ArrowRight, Truck, CalendarDays, Gift, Cake } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import heroCake from "@/assets/hero-cake.jpg";
import celebrationCake from "@/assets/celebration-cake.jpg";
import dessertBox from "@/assets/dessert-box.jpg";
import customCake from "@/assets/custom-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import pistachioCake from "@/assets/pistachio-cake.jpg";
import chocoAlmondCake from "@/assets/choco-almond-cake.jpg";
import macarons from "@/assets/macarons.jpg";
import cookieKit from "@/assets/cookie-kit.jpg";
import cheesecake from "@/assets/cheesecake.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to place an order.")}`;
const WA_CUSTOM = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to discuss a custom cake.")}`;
const IG_LINK = "https://instagram.com/Kellys_baking_stories";

const testimonials = [
  { name: "Rutu Kate", text: "Ordered a pistachio cake for my husband's birthday — rich, perfectly balanced, and so moist. The design was exactly what we had in mind and made the celebration truly special." },
  { name: "Anubhav Saxena", text: "Ordered a cake for my wife's birthday — beautiful design, unique flavor, and a light, delicious sponge. It truly made the celebration extra special." },
  { name: "Nisarg Mehta", text: "Ordered a custom cake — beautifully designed, delicious, and exactly as we envisioned. The entire experience was smooth, professional, and effortless." },
  { name: "Harsh Zaveri", text: "Ordered a cake for my girlfriend — the design was absolutely on point and it tasted delicious. Despite being eggless, they were the best ever macarons I have ever had." },
  { name: "Salonee Patel", text: "Ordered a DIY Christmas cookie kit — the quality was outstanding and everything was thoughtfully put together. The demo made it so easy and fun. Such a lovely experience." },
  { name: "Lalit Grade", text: "Ordered a sugar-free chocolate almond treat — rich, light, and absolutely delicious. Fully customized with almond flour and beautiful garnishing. Perfect for a healthy indulgence." },
];

const signatures = [
  { title: "White Chocolate Pistachio Cake", desc: "Rich white chocolate ganache layered with roasted pistachios", image: pistachioCake },
  { title: "Chocolate Almond Cake", desc: "Sugar-free indulgence with premium almond flour", image: chocoAlmondCake, badge: "Sugar Free" },
  { title: "Eggless Macarons", desc: "Delicate, colorful, and completely eggless", image: macarons, badge: "Eggless" },
  { title: "DIY Cookie Kits", desc: "Fun, creative kits perfect for gifting and family time", image: cookieKit },
  { title: "Gluten Free Cheesecake", desc: "Light, creamy, and crafted without gluten", image: cheesecake, badge: "Gluten Free" },
];

const whyUs = [
  { icon: Clock, title: "Made-to-Order Only", desc: "Every single item is baked fresh when you order. No pre-made stock, ever." },
  { icon: Paintbrush, title: "Pinterest to Reality", desc: "Share your inspiration and we'll bring it to life — exactly as you envisioned." },
  { icon: Sparkles, title: "Premium Ingredients", desc: "We use only the finest butter, chocolate, and seasonal produce in every creation." },
  { icon: Leaf, title: "Healthy & Conscious", desc: "Sugar-free, gluten-free, vegan options. No palm oil or chemical-based enhancers." },
];

const occasions = [
  { title: "Birthday Cakes", icon: Cake, link: "/menu" },
  { title: "Anniversary Cakes", icon: Heart, link: "/menu" },
  { title: "Custom Cakes", icon: Paintbrush, link: "/custom-orders" },
  { title: "Healthy Desserts", icon: Leaf, link: "/menu" },
  { title: "Dessert Boxes & Gifting", icon: Gift, link: "/menu" },
];

const orderSteps = [
  { num: "01", title: "Choose or Inspire", desc: "Pick from our menu or share your Pinterest board" },
  { num: "02", title: "Chat on WhatsApp", desc: "Discuss flavors, design, and customization" },
  { num: "03", title: "Confirm & Pay", desc: "Finalize details and secure your order" },
  { num: "04", title: "Fresh Delivery", desc: "Baked fresh and delivered to your doorstep" },
];

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (!isHovered) api.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container-narrow w-full px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="font-serif text-base italic text-muted-foreground tracking-wide">
              Award-winning baker
            </p>
            <h1 className="heading-xl">
              Crafting stories,<br />
              <em className="text-primary">one cake at a time.</em>
            </h1>
            <div className="space-y-1.5 max-w-md">
              <p className="font-serif text-base italic text-muted-foreground/80">
                Recognized for Healthy Treats — Cakeology Awards
              </p>
              <p className="font-serif text-base italic text-muted-foreground/80">
                Featured: Recipe of the Year — Rising Star India Magazine
              </p>
            </div>
            <p className="body-text max-w-md pt-2">
              Every dessert from Kelly's kitchen is made fresh to order — with premium ingredients, 
              heartfelt design, and a story worth sharing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>
              <Link to="/menu" className="btn-outline">View Menu</Link>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={heroCake} alt="Elegant celebration cake with floral decorations" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border/50">
              <p className="font-serif text-sm">★★★★★</p>
              <p className="text-xs text-muted-foreground mt-1">1000+ happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container-narrow px-6">
          <div className="text-center mb-10">
            <p className="caption-text mb-3">Kind Words</p>
            <h2 className="heading-lg">Loved by Our Customers</h2>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4 md:-ml-6">
                {testimonials.map((t) => (
                  <CarouselItem key={t.name} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="bg-background rounded-2xl p-8 border border-border/40 shadow-sm h-full flex flex-col justify-between">
                      <div>
                        <Quote size={20} className="text-primary/30 mb-4" />
                        <p className="font-sans text-sm leading-relaxed text-foreground/80 italic mb-6">
                          "{t.text}"
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-sm text-foreground">{t.name}</p>
                        <p className="text-primary text-xs tracking-wider">★★★★★</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* ── Customer Favorites / Signatures ── */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="caption-text mb-3">Bestsellers</p>
            <h2 className="heading-lg">Customer Favorites</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatures.map((item) => (
              <div key={item.title} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-5 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-sans tracking-wide px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="body-text text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-outline">
              View Full Menu <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="caption-text mb-3">The Difference</p>
            <h2 className="heading-lg">Why Kelly's</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="body-text text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Cake Experience ── */}
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={customCake} alt="Custom cake creation process" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-6">
            <p className="caption-text">Bespoke Creations</p>
            <h2 className="heading-lg">Designed Just for You</h2>
            <p className="body-text">
              From a whispered idea to a showstopping centrepiece — every custom cake begins with 
              your inspiration. Share a Pinterest board, a sketch, or simply a feeling, and we'll 
              craft something uniquely yours with meticulous attention to design and flavor.
            </p>
            <a href={WA_CUSTOM} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              <MessageCircle size={16} />
              Start Your Custom Cake
            </a>
          </div>
        </div>
      </section>

      {/* ── Occasion-Based Categories ── */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container-narrow px-6">
          <div className="text-center mb-12">
            <p className="caption-text mb-3">Shop by Occasion</p>
            <h2 className="heading-lg">Find the Perfect Treat</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {occasions.map((o) => (
              <Link
                key={o.title}
                to={o.link}
                className="flex items-center gap-3 bg-background rounded-full px-6 py-3 border border-border/50 hover:border-primary/40 transition-colors group"
              >
                <o.icon size={18} className="text-primary" />
                <span className="font-sans text-sm font-medium text-foreground group-hover:text-primary transition-colors">{o.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery / Instagram ── */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="caption-text mb-3">@Kellys_baking_stories</p>
          <h2 className="heading-lg mb-12">Our Sweet Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
              <a
                key={i}
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Cake gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <div className="mt-10">
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline">
              View More on Instagram <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="caption-text mb-3">Simple & Easy</p>
            <h2 className="heading-lg">How to Order</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step) => (
              <div key={step.num} className="text-center space-y-4">
                <span className="font-serif text-3xl text-primary/30">{step.num}</span>
                <h3 className="font-serif text-lg">{step.title}</h3>
                <p className="body-text text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Delivery & Order Info ── */}
      <section className="py-14 md:py-18">
        <div className="container-narrow px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <CalendarDays size={22} className="text-primary mx-auto" />
              <h3 className="font-serif text-base">Advance Notice</h3>
              <p className="body-text text-sm">3–4 days required for all orders</p>
            </div>
            <div className="space-y-2">
              <Truck size={22} className="text-primary mx-auto" />
              <h3 className="font-serif text-base">Delivery Area</h3>
              <p className="body-text text-sm">Ahmedabad — pickup & delivery</p>
            </div>
            <div className="space-y-2">
              <ShieldCheck size={22} className="text-primary mx-auto" />
              <h3 className="font-serif text-base">Full Customization</h3>
              <p className="body-text text-sm">Flavors, design, dietary needs — all tailored</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Story Strip ── */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container-narrow px-6 text-center max-w-3xl mx-auto">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed italic text-foreground/80">
            "A homegrown bakery crafting thoughtful, made-to-order desserts with a focus on 
            design, quality, and experience."
          </p>
          <p className="caption-text mt-6">— Kelly's Baking Stories, Ahmedabad</p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding">
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">Ready to Celebrate?</h2>
          <p className="body-text mb-8">
            Whether it's a birthday, an anniversary, or just a Tuesday that deserves cake — 
            let's create something beautiful together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
            <Link to="/custom-orders" className="btn-outline">
              Plan Your Celebration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
