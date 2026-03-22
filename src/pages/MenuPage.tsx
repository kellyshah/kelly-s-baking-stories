import celebrationCake from "@/assets/celebration-cake.jpg";
import customCake from "@/assets/custom-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import dessertBox from "@/assets/dessert-box.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import seasonal from "@/assets/seasonal.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const menuSections = [
  {
    title: "Cakes",
    items: [
      { name: "Classic Buttercream Cake", description: "Soft sponge with silky buttercream frosting. Available in vanilla, chocolate, and red velvet.", price: "From ₹1,200", image: celebrationCake },
      { name: "Fondant Art Cake", description: "Custom-designed fondant cakes for birthdays, baby showers, and special celebrations.", price: "From ₹2,500", image: customCake },
      { name: "Cupcake Collection", description: "Box of 6 or 12 beautifully piped cupcakes in assorted flavours.", price: "From ₹600", image: gallery1 },
      { name: "Chocolate Drip Cake", description: "Rich chocolate cake with ganache drip, perfect for chocolate lovers.", price: "From ₹1,800", image: gallery5 },
    ],
  },
  {
    title: "Dessert Boxes",
    items: [
      { name: "The Classic Box", description: "A curated selection of brownies, cookies, and mini cakes. Perfect for gifting.", price: "From ₹800", image: dessertBox },
      { name: "Macaron Box", description: "12 handcrafted French macarons in seasonal flavours.", price: "From ₹1,000", image: gallery4 },
    ],
  },
  {
    title: "Seasonal Specials",
    items: [
      { name: "Strawberry Shortcake", description: "Light sponge layered with fresh strawberries and whipped cream. Available in season.", price: "From ₹1,400", image: seasonal },
      { name: "Berry Naked Cake", description: "A rustic, semi-frosted cake topped with seasonal berries and cream.", price: "From ₹1,600", image: gallery2 },
    ],
  },
];

const MenuPage = () => (
  <>
    <section className="section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto mb-16">
        <p className="caption-text mb-3">Our Menu</p>
        <h1 className="heading-xl mb-4">Sweet Creations</h1>
        <p className="body-text">
          Every item on our menu is made fresh to order using premium ingredients. 
          Prices may vary based on design complexity and customisation.
        </p>
        <div className="mt-6 inline-block bg-primary/10 px-6 py-3 rounded-full">
          <p className="text-sm font-sans text-foreground">✨ All products are made to order</p>
        </div>
      </div>
    </section>

    {menuSections.map((section) => (
      <section key={section.title} className="section-padding pt-0">
        <div className="container-narrow">
          <h2 className="heading-md mb-10 text-center">{section.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {section.items.map((item) => (
              <div key={item.name} className="flex gap-5 bg-card rounded-2xl overflow-hidden border border-border/50 group">
                <div className="w-32 md:w-40 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="py-5 pr-5 flex flex-col justify-center">
                  <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                  <p className="body-text text-sm mb-2">{item.description}</p>
                  <p className="font-sans text-sm font-medium text-primary">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <section className="section-padding bg-card text-center">
      <div className="container-narrow max-w-2xl mx-auto">
        <h2 className="heading-md mb-4">Want something special?</h2>
        <p className="body-text mb-8">
          Don't see what you're looking for? We love creating custom desserts tailored to your taste and occasion.
        </p>
        <a
          href="https://wa.me/1234567890?text=Hi%20Kelly!%20I'd%20like%20to%20discuss%20a%20custom%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Chat with Kelly
        </a>
      </div>
    </section>
  </>
);

export default MenuPage;
