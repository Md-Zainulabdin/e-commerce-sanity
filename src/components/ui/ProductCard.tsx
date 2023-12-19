import Image from "next/image";
import Link from "next/link";

interface ICollections {
  name: string;
  description: string;
  slug: string;
  price: string;
  imageUrl: string;
}

const ProductCard = ({ data }: { data: ICollections[] }) => {
  return (
    <>
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
                <h1 className="truncate ... text-lg md:text-xl text-[#222] font-semibold">
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
    </>
  );
};

export default ProductCard;
