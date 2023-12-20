import AddToCart from "@/components/AddToCart";
import ImageGallery from "@/components/imageGallery";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "@/lib/sanity";
import { fullProduct } from "@/types/product.interface";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    name,
    images,
      price,
      _id,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      instock
  
  }`;
  const data = await client.fetch(query);
  return data;
}

async function getRelatedProducts(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]{
    name,
      description,price,
      "imageUrl": images[0].asset->url,
      "slug": slug.current,
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const SingleProductPage = async ({
  params,
}: {
  params: { productSlug: string };
}) => {
  const data: fullProduct = await getData(params.productSlug);
  const relatedProduct = await getRelatedProducts(data.categoryName);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-6 md:py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <h1 className="text-2xl md:text-4xl font-bold">{data.name}</h1>
            </div>

            <div className="flex items-center gap-4 my-2">
              <h2 className="text-muted-foreground">{data.categoryName}</h2>
              <span className="text-[#999]">|</span>
              <span className="text-green-500">
                {data.instock ? "In stock" : "Not InStock"}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-primary">
                ${Number(data.price).toFixed(2)}
              </h3>
            </div>

            <div className="mt-3 md:mt-6 max-w-md">
              <h2 className="mb-2 font-semibold">Description</h2>
              <p className="text-justify md:text-lg text-muted-foreground">
                {data.description}
              </p>
            </div>

            <div className="w-full mt-4">
              <AddToCart
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={Number(data.price)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="title p-3">
          <h1 className="text-3xl font-bold">Related Products</h1>
        </div>

        <div className=" flex flex-wrap items-center justify-center sm:justify-start gap-8 gap-y-12 md:gap-y-20 pb-12">
          <ProductCard data={relatedProduct} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
