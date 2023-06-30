import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import VideoBanner from "~/components/VideoBanner";
import Navbar from "~/components/navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VideoBanner />
        {/* <AboutUs />
        <PricingTable /> */}
      </main>
    </div>
  );
}
