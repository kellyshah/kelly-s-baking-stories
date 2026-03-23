import heroCake from "@/assets/hero-cake.jpg";
import celebrationCake from "@/assets/celebration-cake.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import matchaCake from "@/assets/matcha-birthday-cake.jpg";
import healthyCake from "@/assets/healthy-cake.jpg";
import renneCake from "@/assets/renne-cake.jpg";
import macaronBoxes from "@/assets/macaron-boxes.png";
import luxuryHampers from "@/assets/luxury-hampers.png";
import cupcakesDisplay from "@/assets/cupcakes-display.png";

const images = [
  { src: heroCake, alt: "Blush pink celebration cake with florals" },
  { src: matchaCake, alt: "Matcha birthday cake with strawberries and macarons" },
  { src: celebrationCake, alt: "Two-tier gold accent cake" },
  { src: gallery1, alt: "Rose buttercream cupcakes" },
  { src: healthyCake, alt: "Orange topped healthy cake" },
  { src: renneCake, alt: "Custom branded Renée Cosmetics cake" },
  { src: cupcakesDisplay, alt: "Assorted pastel cupcakes display" },
  { src: macaronBoxes, alt: "Boxed macaron gift sets" },
  { src: gallery4, alt: "Pastel cake pops" },
  { src: luxuryHampers, alt: "Luxury gift hampers with cookies and chocolates" },
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
