import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroCarousel } from "./HeroCarousel";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == "product"][0...6]{
        "imageUrl": images[0].asset->url,
    }`;
  const data = await client.fetch(query, { caches: "no-store" });
  return data;
}

const Hero = async () => {
  const data = await getData();
  return (
    <section className="w-full mx-auto flex justify-between items-center gap-12 md:gap-0 flex-wrap sm:pb-6">
      <div className="w-full md:w-[50%]">
        <div className="w-full py-12 md:py-0 flex flex-col justify-center items-center md:items-start sm:mb-12 lg:mb-0 lg:pb-24 lg:pt-40">
          <h1 className="mb-4 max-w-xl text-4xl font-bold text-center md:text-left text-black sm:text-5xl md:mb-6 md:text-6xl">
            Unleash Innovation in{" "}
            <span className="text-primary">Every Byte.</span>
          </h1>

          <p className="max-w-md leading-relaxed text-lg text-muted-foreground">
            Explore a World of Cutting-Edge Tech
          </p>

          <div className="mt-6">
            <Button size={"lg"}>
              <Link href={"/products"}>Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%] flex justify-center md:items-end md:justify-end">
        <div className="px-6">
          <HeroCarousel data={data} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
