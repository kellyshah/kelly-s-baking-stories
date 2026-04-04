import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import MenuPage from "./pages/MenuPage";
import CustomOrders from "./pages/CustomOrders";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import CustomBirthdayCakes from "./pages/CustomBirthdayCakes";
import CheesecakesAhmedabad from "./pages/CheesecakesAhmedabad";
import BrowniesAhmedabad from "./pages/BrowniesAhmedabad";
import DessertBoxesAhmedabad from "./pages/DessertBoxesAhmedabad";
import CustomCakesAhmedabad from "./pages/CustomCakesAhmedabad";
import ChocolateOrangeCake from "./pages/ChocolateOrangeCake";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

export function render(url: string) {
  const queryClient = new QueryClient();

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/custom-orders" element={<CustomOrders />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/custom-birthday-cakes-ahmedabad" element={<CustomBirthdayCakes />} />
              <Route path="/cheesecakes-ahmedabad" element={<CheesecakesAhmedabad />} />
              <Route path="/brownies-ahmedabad" element={<BrowniesAhmedabad />} />
              <Route path="/dessert-boxes-ahmedabad" element={<DessertBoxesAhmedabad />} />
              <Route path="/custom-cakes-ahmedabad" element={<CustomCakesAhmedabad />} />
              <Route path="/chocolate-orange-cake-ahmedabad" element={<ChocolateOrangeCake />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  return html;
}
