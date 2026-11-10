import { useState } from "react";
import { MessageCircle, CalendarDays, Palette, CheckCircle } from "lucide-react";
import customCake from "@/assets/custom-cake.jpg";

const steps = [
  { icon: MessageCircle, title: "Tell Us Your Vision", text: "Share your ideas, theme, colour palette, and any inspiration images via WhatsApp or our inquiry form." },
  { icon: Palette, title: "We Design & Quote", text: "Kelly will create a custom design proposal and share a detailed quote based on your requirements." },
  { icon: CalendarDays, title: "Confirm & Schedule", text: "Once approved, confirm your order with a deposit and we'll schedule the baking date." },
  { icon: CheckCircle, title: "Fresh Delivery", text: "Your custom creation is baked fresh and delivered (or ready for pickup) on your chosen date." },
];

const CustomOrders = () => {
  const [form, setForm] = useState({ name: "", date: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Kelly! I'd like to place a custom order.\n\nName: ${form.name}\nDate: ${form.date}\nRequirement: ${form.requirement}`;
    window.open(`https://wa.me/918799055079?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="caption-text mb-3">Custom Orders</p>
            <h1 className="heading-xl mb-6">Your Dream Cake, Made Real</h1>
            <p className="body-text mb-8">
              Have a specific design in mind? Whether it's a whimsical birthday cake, an elegant 
              wedding centrepiece, or a themed dessert table - we bring your vision to life with 
              precision and love.
            </p>
            <a
              href="https://wa.me/918799055079?text=Hi%20Kelly!%20I'd%20like%20to%20discuss%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Start a Conversation
            </a>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={customCake} alt="Custom cake creation" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <p className="caption-text mb-3">The Process</p>
          <h2 className="heading-lg mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto relative">
                  <step.icon size={22} className="text-primary" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-sans font-medium">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg">{step.title}</h3>
                <p className="body-text text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="container-narrow max-w-xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Send Us Your Brief</h2>
          <p className="body-text mb-10">
            Fill in the basics below and we'll get back to you on WhatsApp with a custom quote.
          </p>

          {submitted ? (
            <div className="bg-card rounded-2xl p-10 border border-border/50 text-center">
              <CheckCircle size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-2">Thank you!</h3>
              <p className="body-text text-sm">Your inquiry has been sent via WhatsApp. We'll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="caption-text block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors font-sans text-sm"
                  placeholder="e.g. Priya Sharma"
                />
              </div>
              <div>
                <label className="caption-text block mb-2">Event Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors font-sans text-sm"
                />
              </div>
              <div>
                <label className="caption-text block mb-2">Tell Us What You Need</label>
                <textarea
                  required
                  rows={4}
                  value={form.requirement}
                  onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors font-sans text-sm resize-none"
                  placeholder="e.g. A two-tier floral cake for a baby shower, serving 30 guests, in pastel pink and white..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <MessageCircle size={16} />
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default CustomOrders;
