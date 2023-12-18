import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "category"][0...6]{
    name,
      "imageUrl": images.asset->url
  }`;
  const data = await client.fetch(query);
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
      <div className="title">
        <h1 className="text-2xl sm:text-4xl text-[#111] font-bold">
          Shop by Category
        </h1>
      </div>

      <div className="categories flex flex-wrap items-center justify-center gap-12 py-12 cursor-pointer">
        {data.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="w-[330px] h-[300px] md:w-[340px] md:h-[370px] bg-gray-100 rounded-md">
              <Image
                src={item.imageUrl}
                alt="Category Images"
                width={500}
                height={500}
              />

              <div className="category-title w-full absolute md:bottom-6 px-[20px]">
                <div className="w-full h-[45px] md:h-[60px] flex items-center justify-center bg-white hover:border transition-all duration-300 ease-in-out rounded-md">
                  <Link href={"/shop"} className="text-primary text-lg ">
                    {item.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
