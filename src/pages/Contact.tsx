import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <>
    <section className="section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto mb-16">
        <p className="caption-text mb-3">Get in Touch</p>
        <h1 className="heading-xl mb-4">Let's Create Something Sweet</h1>
        <p className="body-text">
          Have a question, want to place an order, or just want to say hello? 
          We'd love to hear from you.
        </p>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container-narrow grid md:grid-cols-2 gap-12">
        {/* Contact cards */}
        <div className="space-y-6">
          <a
            href="https://wa.me/918799055079?text=Hi%20Kelly!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)]/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={20} className="text-[hsl(142,70%,45%)]" />
            </div>
            <div>
              <h3 className="font-serif text-lg mb-1">WhatsApp</h3>
              <p className="body-text text-sm">Our preferred way to connect. Quick responses, easy sharing of designs and inspiration.</p>
              <p className="text-sm font-sans font-medium text-primary mt-2">Chat Now →</p>
            </div>
          </a>

          <a
            href="https://instagram.com/Kellys_baking_stories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Instagram size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg mb-1">Instagram</h3>
              <p className="body-text text-sm">Follow us for daily inspiration, new creations, and behind-the-scenes moments.</p>
              <p className="text-sm font-sans font-medium text-primary mt-2">@kellysbakingstories →</p>
            </div>
          </a>

          <div className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border/50">
            <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg mb-1">Location</h3>
              <p className="body-text text-sm">Home Studio, Mumbai, India</p>
              <p className="body-text text-sm">Delivery available across the city</p>
            </div>
          </div>

          <div className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border/50">
            <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
              <Clock size={20} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg mb-1">Business Hours</h3>
              <p className="body-text text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="body-text text-sm">Sunday: By appointment only</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border/50 min-h-[400px]">
          <iframe
            title="Kelly's Baking Stories Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
