import { client, urlFor } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

async function getData() {
  const query = `*[_type == "product"][0...3]{
    name,
      price,
      description,
      "imageUrl": images[0].asset->url,
      "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

interface Collections {
  name: string;
  description: string;
  slug: string;
  price: string;
  imageUrl: string;
}

const NewCollection = async () => {
  const data: Collections[] = await getData();
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
        {data.map((item, idx) => (
          <div key={idx}>
            <Link href={`/products/${item.slug}`}>
              <div className="w-[340px] h-[400px] p-3">
                <div className="image-container w-full h-[320px] flex items-center justify-center bg-gray-100 rounded-md overflow-hidden cursor-pointer">
                  <Image
                    src={item.imageUrl}
                    alt="Product Image"
                    width={300}
                    height={300}
                    className="w-[230px] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                  />
                </div>

                <div className="product-desc pt-4 space-y-1">
                  <h1 className="text-lg md:text-xl text-[#222] font-semibold">
                    {item.name}
                  </h1>
                  <p className="truncate ... text-muted-foreground text-lg">
                    {item.description}
                  </p>
                  <h2 className="text-xl text-primary font-semibold">
                    $ {Number(item.price).toFixed(2)}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCollection;
