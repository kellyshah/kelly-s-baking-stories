import kellyImg from "@/assets/kelly-founder.jpg";

const About = () => (
  <>
    {/* Hero */}
    <section className="section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <p className="caption-text mb-3">Our Story</p>
        <h1 className="heading-xl mb-6">A Passion Born in a Home Kitchen</h1>
        <p className="body-text">
          What started as a hobby - baking cakes for friends and family - grew into something 
          far more beautiful. Kelly's Baking Stories is the story of love, creativity, and the 
          belief that every celebration deserves something extraordinary.
        </p>
      </div>
    </section>

    {/* Founder */}
    <section className="section-padding pt-0">
      <div className="container-narrow grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden">
          <img src={kellyImg} alt="Kelly, the founder" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="heading-lg">Meet Kelly</h2>
          <p className="body-text">
            I'm Kelly - a self-taught baker, a dreamer, and someone who believes that food 
            should tell a story. I started baking in my tiny kitchen with nothing but a hand 
            mixer and a whole lot of passion.
          </p>
          <p className="body-text">
            Today, every cake that leaves my kitchen is still made the same way - by hand, 
            with heart, and with the freshest ingredients I can find. No shortcuts, no 
            preservatives, no compromises.
          </p>
          <p className="body-text">
            Whether it's a towering wedding cake or a simple box of brownies, I pour the 
            same love into every creation. Because I believe that desserts aren't just food - 
            they're memories waiting to happen.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { number: "15000+", label: "Happy Customers" },
              { number: "25000+", label: "Desserts Served" },
              { number: "6+", label: "Years of Love" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-primary">{stat.number}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-card">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <h2 className="heading-lg mb-12">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { title: "Quality First", text: "We use only premium, ethically-sourced ingredients. Real butter, Belgian chocolate, fresh fruits - no artificial anything." },
            { title: "Design Matters", text: "Every cake is a canvas. We treat design with the same care as taste, creating pieces that are as beautiful as they are delicious." },
            { title: "Personal Touch", text: "We're not a factory. Every order gets our full attention, care, and a personal touch that makes it uniquely yours." },
          ].map((val) => (
            <div key={val.title} className="space-y-3">
              <h3 className="font-serif text-lg">{val.title}</h3>
              <p className="body-text text-sm">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
