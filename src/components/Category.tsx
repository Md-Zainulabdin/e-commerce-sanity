import { client, urlFor } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "category"][0...6]{
    name,
      "imageUrl": images.asset->url
  }`;
  const data = await client.fetch(query, { caches: "no-store" });
  return data;
}

type Data = {
  name: string;
  imageUrl: string;
};

const Category = async () => {
  const data: Data[] = await getData();
  // console.log(data);

  return (
    <section>
      <div className="title text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl text-[#111] font-bold">
          Shop by Category
        </h1>
      </div>

      <div className="categories flex flex-wrap items-center justify-center gap-12 py-12 cursor-pointer">
        {data.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="w-[340px] h-[300px] bg-gray-100 rounded-lg">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt="category"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="mt-2 flex items-center">
              <h1 className="text-xl font-semibold text-muted-foreground">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
