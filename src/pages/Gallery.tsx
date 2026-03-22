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

const images = [
  { src: heroCake, alt: "Blush pink celebration cake with florals" },
  { src: gallery3, alt: "Minimalist white wedding cake" },
  { src: celebrationCake, alt: "Two-tier gold accent cake" },
  { src: gallery1, alt: "Rose buttercream cupcakes" },
  { src: dessertBox, alt: "Premium macaron gift box" },
  { src: gallery5, alt: "Chocolate drip cake with gold leaf" },
  { src: customCake, alt: "Hand-painted watercolor cake" },
  { src: gallery2, alt: "Berry naked cake" },
  { src: gallery4, alt: "Pastel cake pops" },
  { src: gallery6, alt: "Fresh pastry display" },
];

const Gallery = () => (
  <>
    <section className="section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto mb-16">
        <p className="caption-text mb-3">Gallery</p>
        <h1 className="heading-xl mb-4">A Taste of Our Work</h1>
        <p className="body-text">
          Every creation tells a story. Here's a glimpse of the cakes, desserts, and sweet 
          moments we've been honoured to be part of.
        </p>
      </div>
    </section>

    <section className="px-6 md:px-12 lg:px-20 pb-24">
      <div className="container-narrow columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-2xl overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-card text-center">
      <div className="container-narrow max-w-2xl mx-auto">
        <h2 className="heading-md mb-4">Love what you see?</h2>
        <p className="body-text mb-8">
          Follow us on Instagram for daily inspiration, behind-the-scenes peeks, and new creations.
        </p>
        <a
          href="https://instagram.com/Kellys_baking_stories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Follow @Kellys_baking_stories
        </a>
      </div>
    </section>
  </>
);

export default Gallery;
