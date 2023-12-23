import ProductCard from "@/components/ui/ProductCard";
import { client, urlFor } from "@/lib/sanity";
import PaginationControl from "./_components/PaginationControl";

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

const ShopPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const data = await getData();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "9";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = data.slice(start, end);

  // console.log(entries.length);

  return (
    <div>
      <div className="category"></div>
      <div className="products flex flex-wrap justify-center gap-12">
        {entries.length === 0 ? (
          <div className="w-full h-72 flex items-center justify-center border border-dashed rounded-lg border-gray-200">
            <h1 className="text-xl">Nothing to show</h1>
          </div>
        ) : (
          <ProductCard data={entries} />
        )}
      </div>
      <div>
        <PaginationControl
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
        />
      </div>
    </div>
  );
};

export default ShopPage;
