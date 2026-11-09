import cakesImg from "@/assets/menu/cakes.jpg";
import browniesImg from "@/assets/menu/brownies.jpg";
import cheesecakeImg from "@/assets/menu/cheesecake.jpg";
import cookiesImg from "@/assets/menu/cookies.jpg";
import cupcakesImg from "@/assets/menu/cupcakes.jpg";
import donutsImg from "@/assets/menu/donuts.jpg";
import jarCakesImg from "@/assets/menu/jar-cakes.jpg";
import corporateHampersImg from "@/assets/menu/corporate-hampers.jpg";

export const fullMenu = [
  {
    section: "Exotic Cakes",
    image: cakesImg,
    description: "500g · Rich, layered cakes made for a little indulgence.",
    items: [
      { name: "Gianduja", price: "₹1,099", description: "Rich & moist chocolate cake with a molten hazelnut praline & chocolate cream that oozes out with every bite, creating a luscious and irresistible experience.", bestseller: true },
      { name: "Chocolate Truffle", price: "₹1,027" },
      { name: "Dark Chocolate Salted Caramel", price: "₹987" },
      { name: "Mocha Frappe Cake", price: "₹973", description: "Delightful blend of rich coffee-infused cake with creamy mocha frosting, creating a perfect balance of coffee and chocolate in every bite — gâteau au moka.", bestseller: true },
      { name: "Hazelnut Praline Dark Chocolate", price: "₹1,419" },
      { name: "Biscoff", price: "₹1,099" },
      { name: "Swiss Chocolate", price: "₹897", description: "Made with premium Swiss cocoa, this treat boasts a moist & creamy center, delivering a luxurious experience that is simply irresistible.", bestseller: true },
      { name: "Red Velvet", price: "₹897" },
    ],
  },
  {
    section: "Signature Cakes",
    image: cakesImg,
    description: "500g · Kelly’s signature pairings and seasonal favourites.",
    items: [
      { name: "Pistachio White Chocolate", price: "₹1,099", description: "Harmonious blend of finely ground pistachios and creamy white chocolate creating a balance of texture & flavor with every bite.", bestseller: true },
      { name: "Rose Pistachio", price: "₹1,099" },
      { name: "Mango Madness", price: "₹947", description: "Featuring layers of light and fluffy mango gâteau, filled and topped with fresh mangoes — gâteau à la mangue.", bestseller: true },
      { name: "Tiramisu", price: "₹1,097" },
      { name: "Lemon Curd", price: "₹987" },
      { name: "Vanilla Salted Caramel", price: "₹847" },
      { name: "Pineapple", price: "₹947" },
      { name: "Hazelnut Crunch", price: "₹1,419" },
      { name: "Classic Vanilla", price: "₹847" },
      { name: "Strawberry Hibiscus", price: "₹979", description: "Layers of delicate hibiscus-infused cake filled with a sweet & tangy strawberry compote creating a perfect balance.", bestseller: true },
      { name: "Vanilla Praline", price: "₹943" },
    ],
  },
  {
    section: "Brownies",
    image: browniesImg,
    description: "Priced per piece · Rich, freshly baked chocolate treats.",
    items: [
      { name: "Double Chocolate", price: "₹129", description: "A rich indulgence of premium cocoa and 46% dark couverture chocolate.", bestseller: true },
      { name: "Walnut Brownie", price: "₹145" },
      { name: "Salted Caramel Brownie", price: "₹129" },
      { name: "Biscoff Brownie", price: "₹145", description: "A heavenly blend of rich chocolate swirled with creamy Biscoff, creating a perfect balance of indulgence in every bite.", bestseller: true },
    ],
  },
  {
    section: "Cheesecakes",
    image: cheesecakeImg,
    description: "300g · Smooth, creamy cheesecakes in much-loved flavours.",
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
    image: cookiesImg,
    description: "A little something sweet for teatime or gifting.",
    items: [
      { name: "Oatmeal Cookies" },
      { name: "Butter Cookies" },
      { name: "Sandwich Cookies" },
      { name: "Chocolate Chips Cookies" },
    ],
  },
  {
    section: "Cupcakes",
    image: cupcakesImg,
    description: "Priced per piece · Soft sponge with a swirl of frosting.",
    items: [
      { name: "Swiss Chocolate", price: "₹120", bestseller: true },
      { name: "Classic Vanilla", price: "₹110" },
      { name: "Red Velvet", price: "₹110" },
      { name: "Pineapple", price: "₹125", bestseller: true },
      { name: "Seasonal Fruit", price: "₹130" },
    ],
  },
  {
    section: "Pies & Tarts",
    image: browniesImg,
    description: "Classic favourites, freshly made to order.",
    items: [
      { name: "Salted Caramel" },
      { name: "Lemon Tart" },
      { name: "Chocolate Tart" },
    ],
  },
  {
    section: "Donuts",
    image: donutsImg,
    description: "Glazed, filled and made for an extra-sweet moment.",
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
    image: jarCakesImg,
    description: "Layered dessert jars in chocolate, fruit and nut flavours.",
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
    image: corporateHampersImg,
    items: [
      { name: "Hampers" },
      { name: "Corporate Orders" },
      { name: "Party Orders" },
    ],
  },
];

const MenuPage = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <p className="caption-text mb-3">Explore</p>
          <h1 className="heading-xl mb-4">Our Menu</h1>
          <p className="body-text max-w-xl mx-auto">
            Every creation is made fresh to order using premium ingredients — no preservatives,
            no palm oil, no shortcuts. Just honest, beautiful desserts.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding pt-0 pb-16">
        <div className="container-narrow max-w-5xl mx-auto space-y-16">
          {fullMenu.map((section) => (
            <div key={section.section}>
              {/* Section header with image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 h-48 sm:h-56">
                <img
                  src={section.image}
                  alt={section.section}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white drop-shadow-lg">
                    {section.section}
                  </h2>
                  {section.description && (
                    <p className="font-sans text-sm text-white/80 mt-1">{section.description}</p>
                  )}
                </div>
              </div>

              {/* Items list */}
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
                    {!item.price && (
                      <span className="font-sans text-xs text-muted-foreground whitespace-nowrap">
                        Ask for pricing
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container-narrow max-w-5xl mx-auto mt-10 p-4 bg-accent/30 rounded-xl text-center">
          <p className="font-sans text-sm text-muted-foreground">
            ★ Represents Bestsellers · Additional customization options are available in terms of theme, size, or flavors, with prices subject to change based on customization.
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-2">
            We use the finest ingredients, real fruits, no artificial flavors, essence or preservatives.
          </p>
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
