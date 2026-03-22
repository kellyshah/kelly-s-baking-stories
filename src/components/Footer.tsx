import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import bakeryLogo from "@/assets/bakery-logo.png";

const Footer = () => (
  <footer className="section-padding bg-card border-t border-border">
    <div className="container-narrow">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={bakeryLogo} alt="Kelly's Baking Stories" className="h-10 w-auto mb-4" />
          <p className="body-text text-sm">
            Crafting stories, one cake at a time. Every dessert is handmade with love, 
            premium ingredients, and a sprinkle of magic.
          </p>
        </div>
        <div>
          <p className="caption-text mb-4">Quick Links</p>
          <ul className="space-y-2">
            {[
              { to: "/about", label: "Our Story" },
              { to: "/menu", label: "Menu" },
              { to: "/custom-orders", label: "Custom Orders" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="body-text text-sm hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="caption-text mb-4">Connect</p>
          <div className="flex gap-4 mb-4">
            <a
              href="https://wa.me/918799055079"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com/Kellys_baking_stories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="body-text text-sm">Mon – Sun: 8am – 12:30am</p>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="body-text text-xs">
          © {new Date().getFullYear()} Kelly's Baking Stories. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
