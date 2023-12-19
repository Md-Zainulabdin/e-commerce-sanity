import ProductCard from "@/components/ui/ProductCard";
import { client, urlFor } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == "product"]{
    name,
      price,
      description,
      "imageUrl": images[0].asset->url,
      "slug": slug.current
  }`;
  const data = await client.fetch(query, { caches: "no-store" });
  return data;
}

const ShopPage = async () => {
  const data = await getData();

  return (
    <div>
      <div className="category"></div>
      <div className="products flex flex-wrap gap-12">
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default ShopPage;
