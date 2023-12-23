"use client";

import { cn } from "@/lib/cn";
import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ data }: { data: IProduct[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {data.map((item, idx) => (
        <Link
          href={`/products/${item.slug}`}
          key={idx}
          className="group w-[340px] h-[440px] sm:h-[400px]"
        >
          <div className="w-full h-[350px] sm:h-[300px] flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt="product image"
              width={200}
              height={200}
              className={
                (cn("group-hover:opacity-75 duration-700 ease-in-out"),
                isLoading
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100")
              }
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <h1 className="truncate ... text-xl font-semibold text-[#222]">
              {item.name}
            </h1>
            <p className="text-xl text-muted-foreground truncate ...">
              {item.description}
            </p>
            <h2 className="text-xl font-semibold text-primary">
              $ {Number(item.price).toFixed(2)}
            </h2>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
