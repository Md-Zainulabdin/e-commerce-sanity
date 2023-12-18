import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "heroImage"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data = await getData();

  // console.log(data);
  
  return (
    <section className="w-full mx-auto sm:pb-6">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="w-full flex flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a Top Price
          </h1>

          <p className="max-w-md leading-relaxed text-lg text-muted-foreground">
            We sell only most exclusive and high quality product for you. We are
            the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 sahdow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
