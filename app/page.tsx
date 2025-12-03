import { NavbarHero } from "@/components/hero-with-video";
import RotatingGradientRight from "@/components/rotating-gradient-right";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarHero 
        brandName="AJ STUDIOZ"
        heroTitle="Smart Conversations, Smarter Solutions"
        heroDescription="Experience the future of AI-powered conversations with our advanced chatbot technology from AJ STUDIOZ."
        emailPlaceholder="Enter your email"
      />
      <RotatingGradientRight />
      <StackedCircularFooter />
    </div>
  );
}
