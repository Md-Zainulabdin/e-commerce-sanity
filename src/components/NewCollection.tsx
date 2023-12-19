import { client, urlFor } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";

async function getData() {
  const query = `*[_type == "product"][0...3]{
    name,
      price,
      description,
      "imageUrl": images[0].asset->url,
      "slug": slug.current
  }`;
  const data = await client.fetch(query, { caches: "no-store" });
  return data;
}

const NewCollection = async () => {
  const data = await getData();
  return (
    <section>
      <div className="title w-full flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl text-[#111] font-bold">
          New Collections
        </h1>

        <Button variant={"outline"}>
          <Link href={"/products"} className="text-primary">
            See All
          </Link>
        </Button>
      </div>

      <div className="NewCollections flex flex-wrap justify-center gap-12 py-12">
        <ProductCard data={data} />
      </div>
    </section>
  );
};

export default NewCollection;
