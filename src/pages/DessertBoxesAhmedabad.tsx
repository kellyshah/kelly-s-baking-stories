import { Link } from "react-router-dom";
import { MessageCircle, Gift, Cake } from "lucide-react";
import dessertBox from "@/assets/dessert-box.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const WA_LINK = "https://wa.me/918799055079";
const WA_ORDER = `${WA_LINK}?text=${encodeURIComponent("Hi Kelly! I'd like to order a dessert box.")}`;

const DessertBoxesAhmedabad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium mb-6">
            Perfect for Gifting
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dessert Boxes in Ahmedabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Send a curated box of handcrafted desserts for birthdays, festivals, housewarmings or corporate gifts. Our dessert boxes in Ahmedabad include a mix of brownies, cookies, cake slices and treats — all made fresh with premium ingredients.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Order a Dessert Box
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Curated with Love
              </h2>
              <p className="text-muted-foreground mb-4">
                Our dessert boxes are more than just treats — they're a complete gifting experience. Each box is carefully assembled with a variety of our bestselling desserts, beautifully packed and ready to delight. We use premium chocolate, real butter, fresh fruits and homemade fillings in every item.
              </p>
              <p className="text-muted-foreground">
                Whether it's Diwali, Rakhi, Christmas, a housewarming or a corporate thank-you — our dessert boxes in Ahmedabad are the sweetest way to celebrate. Custom boxes available on request.
              </p>
            </div>
            <img
              src={dessertBox}
              alt="Curated dessert gift box with brownies, cookies and treats in Ahmedabad"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              What's Inside Our Dessert Boxes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Assorted Brownie Box", desc: "4-6 flavoured brownies beautifully packed" },
                { name: "Cookie & Brownie Combo", desc: "Mix of cookies and brownies for variety" },
                { name: "Celebration Box", desc: "Cake slice, brownies, cookies and macarons" },
                { name: "Festival Hamper", desc: "Premium curated box for Diwali, Rakhi & more" },
                { name: "Corporate Gift Box", desc: "Customizable for teams and clients" },
                { name: "Mini Treats Box", desc: "Bite-sized assortment for smaller celebrations" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-4 bg-card rounded-xl">
                  <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Order Dessert Boxes in Ahmedabad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We deliver dessert boxes across Ahmedabad — Satellite, Bopal, South Bopal, Prahlad Nagar, Bodakdev and Thaltej. Order 2-3 days in advance for custom hampers. Standard boxes available with 24 hours notice.
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

export default DessertBoxesAhmedabad;
