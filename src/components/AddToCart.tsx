"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

const AddToCart = ({
  name,
  currency,
  image,
  description,
  price,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "dfhdf",
  };
  return (
    <Button
      className="w-full"
      size={"lg"}
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
