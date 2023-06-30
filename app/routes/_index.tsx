import type { V2_MetaFunction } from "@remix-run/node";
import { useContext } from "react";
import About from "~/components/About";
import Hero from "~/components/Hero";
import PricingTable from "~/components/PricingTable";
import VideoBanner from "~/components/VideoBanner";
import Navbar from "~/components/navbar";
import { SettingsContext } from "~/contexts/SettingsContext";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { dyslexiaFriendly } = useContext(SettingsContext);
  return (
    <div className={`w-full min-h-screen max-w-screen-xl mx-auto ${dyslexiaFriendly ? "font-dyslexia" : "font-sans"}`}>
      <Navbar />
      <main>
        <Hero />
        <VideoBanner />
        <About />
        <PricingTable />
      </main>
    </div>
  );
}
