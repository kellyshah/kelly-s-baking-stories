import { Link } from "react-router-dom";
import { MessageCircle, Sparkles, Heart, Clock, Quote } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
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

const categories = [
  { title: "Celebration Cakes", description: "Birthdays, anniversaries & milestones", image: celebrationCake, link: "/menu" },
  { title: "Dessert Boxes", description: "Curated boxes of sweet happiness", image: dessertBox, link: "/menu" },
  { title: "Custom Orders", description: "Your vision, our craft", image: customCake, link: "/custom-orders" },
];

const testimonials = [
  { name: "Priya M.", text: "Kelly made the most gorgeous cake for my daughter's first birthday. It was almost too pretty to eat — but tasted even better!", rating: 5 },
  { name: "Arun & Sneha", text: "Our wedding cake was an absolute dream. Every guest asked where we got it. Thank you, Kelly!", rating: 5 },
  { name: "Meera R.", text: "The dessert box I ordered as a gift was beautifully packaged and the flavours were divine. My go-to for gifting now!", rating: 5 },
  { name: "Divya K.", text: "The attention to detail is unmatched. Every layer, every flavour — pure perfection. Kelly is a true artist.", rating: 5 },
  { name: "Rahul S.", text: "Ordered a custom cake for our anniversary. The design exceeded all expectations and the taste was heavenly.", rating: 5 },
  { name: "Nisha T.", text: "I've never seen cakes this beautiful in person. And they taste even better than they look. Absolutely worth every penny.", rating: 5 },
];

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container-narrow w-full px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="font-serif text-sm italic text-muted-foreground tracking-wide">
              Award-winning bakery
            </p>
            <h1 className="heading-xl">
              Crafting stories,<br />
              <em className="text-primary">one cake at a time.</em>
            </h1>
            <div className="space-y-1.5 max-w-md">
              <p className="font-serif text-sm italic text-muted-foreground/80">
                Recognized for Healthy Treats — Cakeology Awards
              </p>
              <p className="font-serif text-sm italic text-muted-foreground/80">
                Featured: Recipe of the Year — Rising Star India Magazine
              </p>
            </div>
            <p className="body-text max-w-md pt-2">
              Every dessert from Kelly's kitchen is made fresh to order — with premium ingredients, 
              heartfelt design, and a story worth sharing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/1234567890?text=Hi%20Kelly!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Order Now
              </a>
              <Link to="/menu" className="btn-outline">
                View Menu
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={heroCake} alt="Elegant celebration cake with floral decorations" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border/50">
              <p className="font-serif text-sm">★★★★★</p>
              <p className="text-xs text-muted-foreground mt-1">200+ happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — immediately after hero */}
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
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
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

      {/* Categories */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="caption-text mb-3">What We Create</p>
            <h2 className="heading-lg">Our Specialties</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group block animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">{cat.title}</h3>
                <p className="body-text text-sm">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness Promise */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <p className="caption-text mb-3">Our Promise</p>
          <h2 className="heading-lg mb-12">Made Fresh. Made to Order.<br />No Mass Production.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Premium Ingredients", text: "Only the finest butter, chocolate, and seasonal fruits make it into our kitchen." },
              { icon: Heart, title: "Handcrafted with Love", text: "Every cake is individually designed and decorated by hand — never from a factory line." },
              { icon: Clock, title: "Made to Order", text: "We bake only when you order. That means peak freshness, every single time." },
            ].map((item) => (
              <div key={item.title} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="body-text text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="caption-text mb-3">@kellysbakingstories</p>
          <h2 className="heading-lg mb-12">Follow Our Sweet Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <a
                key={i}
                href="https://instagram.com/kellysbakingstories"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
