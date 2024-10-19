import BestOfBest from "../lib/sections/best-of-best/best-of-best";
import GrowFooter from "../lib/sections/section/section";
import GrowYourCollection from "../lib/sections/grow-your-collection/grow-your-collection";
import Hero from "../lib/sections/hero/hero";
import TheyLoveUs from "../lib/sections/they-love-us/they-love-us";
import WhyJoinUs from "../lib/sections/why-join-us/why-join-us";
import Footer from "../lib/sections/footer/footer";

export default function Home() {
  return (
   <main >
    <Hero/>
    <BestOfBest />
    <WhyJoinUs />
    <TheyLoveUs />
    <GrowYourCollection/>
    <GrowFooter/>
    <Footer/>
  </main>
  );
}
