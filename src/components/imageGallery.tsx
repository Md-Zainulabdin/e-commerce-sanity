"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";

interface IImageProps {
  images: any;
}

const ImageGallery = ({ images }: IImageProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-6 lg:order-none lg:flex-col">
        {images?.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
