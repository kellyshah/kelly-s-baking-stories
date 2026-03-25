import cakesImg from "@/assets/menu/cakes.jpg";
import browniesImg from "@/assets/menu/brownies.jpg";
import cheesecakeImg from "@/assets/menu/cheesecake.jpg";
import cookiesImg from "@/assets/menu/cookies.jpg";
import cupcakesImg from "@/assets/menu/cupcakes.jpg";
import donutsImg from "@/assets/menu/donuts.jpg";
import jarCakesImg from "@/assets/menu/jar-cakes.jpg";
import corporateHampersImg from "@/assets/menu/corporate-hampers.jpg";
import tiramisuImg from "@/assets/menu/tiramisu.jpg";
import macaronsImg from "@/assets/menu/macarons.jpg";

const fullMenu = [
  {
    section: "Exotic Cakes",
    image: cakesImg,
    items: [
      { name: "Gianduja", price: "₹899", description: "Rich & moist chocolate cake with a molten hazelnut praline & chocolate cream that oozes out with every bite, creating a luscious and irresistible experience.", bestseller: true },
      { name: "Chocolate Truffle", price: "₹699" },
      { name: "Dark Chocolate Salted Caramel", price: "₹799", bestseller: true },
      { name: "Mocha Frappe Cake", price: "₹699", description: "Delightful blend of rich coffee-infused cake with creamy mocha frosting, creating a perfect balance of coffee and chocolate in every bite — gateau au moka.", bestseller: true },
      { name: "Hazelnut Praline Dark Chocolate", price: "₹949" },
      { name: "Biscoff", price: "₹899" },
      { name: "Swiss Chocolate", price: "₹749", description: "Made with premium Swiss cocoa, this treat boasts a moist & creamy center, delivering a luxurious experience that is simply irresistible.", bestseller: true },
      { name: "Red Velvet Cake Cream Cheese", price: "₹775" },
    ],
  },
  {
    section: "Signature Cakes",
    image: cakesImg,
    items: [
      { name: "Pistachio White Chocolate", price: "₹899", description: "Harmonious blend of finely ground pistachios and creamy white chocolate creating a balance of texture & flavor with every bite.", bestseller: true },
      { name: "Rose Pistachio", price: "₹899" },
      { name: "Mango Madness", price: "₹729", description: "Featuring layers of light and fluffy mango gateau, filled and topped with fresh mangoes — gateau à la mangue.", bestseller: true },
      { name: "Tiramisu", price: "₹849" },
      { name: "Lemon Curd", price: "₹729" },
      { name: "Vanilla Salted Caramel", price: "₹749" },
      { name: "Pineapple", price: "₹699" },
      { name: "Hazelnut Crunch", price: "₹849" },
      { name: "Classic Vanilla", price: "₹699" },
      { name: "Strawberry Hibiscus", price: "₹849", description: "Layers of delicate hibiscus-infused cake filled with a sweet & tangy strawberry compote creating a perfect balance.", bestseller: true },
      { name: "Vanilla Praline", price: "₹749" },
    ],
  },
  {
    section: "Brownies",
    image: browniesImg,
    items: [
      { name: "Double Chocolate", price: "₹129", description: "A rich indulgence of premium cocoa and 46% dark coverture chocolate.", bestseller: true },
      { name: "Walnut Brownie", price: "₹145" },
      { name: "Salted Caramel Brownie", price: "₹129" },
      { name: "Biscoff Brownie", price: "₹145", description: "A heavenly blend of rich chocolate swirled with creamy Biscoff, creating a perfect balance of indulgence in every bite.", bestseller: true },
    ],
  },
  {
    section: "Cheesecakes",
    image: cheesecakeImg,
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
    items: [
      { name: "Swiss Chocolate", bestseller: true },
      { name: "Classic Vanilla" },
      { name: "Red Velvet" },
      { name: "Pineapple", bestseller: true },
      { name: "Seasonal Fruit" },
    ],
  },
  {
    section: "Pies & Tarts",
    image: tiramisuImg,
    items: [
      { name: "Salted Caramel" },
      { name: "Lemon Tart" },
      { name: "Chocolate Tart" },
    ],
  },
  {
    section: "Donuts",
    image: donutsImg,
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
    section: "Eggless Vegan Macarons",
    image: macaronsImg,
    description: "Box of 6",
    items: [
      { name: "Loaded Chocolate", price: "₹490" },
      { name: "Pistachio Hazelnut", price: "₹510" },
      { name: "Tangy Lemon", price: "₹490" },
      { name: "Salted Caramel", price: "₹490" },
      { name: "Tiramisu", price: "₹490" },
      { name: "Birthday Cake", price: "₹490" },
      { name: "Rose Pistachio", price: "₹510" },
      { name: "Gianduja", price: "₹510" },
      { name: "Blueberry", price: "₹520" },
    ],
  },
  {
    section: "Jar Cakes",
    image: jarCakesImg,
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
