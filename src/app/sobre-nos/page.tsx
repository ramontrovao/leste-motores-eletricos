import { AboutUsSection } from "./components/AboutUsSection";
import { LocationSection } from "./components/LocationSection";

export default function AboutUs() {
  return (
    <main className="pt-28 sm:pt-16 w-full bg-slate-100">
      <div className="py-8 m-auto max-w-5xl flex flex-col gap-8">
        <AboutUsSection />
        <LocationSection />
      </div>
    </main>
  );
}
