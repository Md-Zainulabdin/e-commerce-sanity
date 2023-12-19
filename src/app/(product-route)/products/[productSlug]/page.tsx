import ImageGallery from "@/components/imageGallery";
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
      "categoryName": category->name
  
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
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
