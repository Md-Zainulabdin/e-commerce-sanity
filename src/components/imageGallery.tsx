"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface IImageProps {
  images: any;
}

const ImageGallery = ({ images }: IImageProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-6 lg:order-none lg:flex-col">
        {images?.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden w-[100px] h-[100px] flex items-center justify-center rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              alt="Product Image"
              width={200}
              height={200}
              onClick={() => handleSmallImageClick(image)}
              className="object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="relative w-[400px] h-[400px] flex items-center p-4 justify-center overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="product image"
          width={300}
          height={300}
          className="object-cover object-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
