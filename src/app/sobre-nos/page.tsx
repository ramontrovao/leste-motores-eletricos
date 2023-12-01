import { AboutUsSection } from "./components/AboutUsSection";

export default function AboutUs() {
  return (
    <main className="pt-28 sm:pt-16 w-full bg-slate-100">
      <div className="py-8 m-auto max-w-7xl flex flex-col gap-8">
        <AboutUsSection />
      </div>
    </main>
  );
}
