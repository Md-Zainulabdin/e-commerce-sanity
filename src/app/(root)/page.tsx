import Category from "@/components/Category";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div className="mt-12">
        <Category />
      </div>

      <div className="mt-12">
        <NewCollection />
      </div>

      <div>
        <Services />
      </div>
    </div>
  );
}
