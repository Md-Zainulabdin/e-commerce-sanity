"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You dont have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      key={entry.id}
                      className="flex mt-6 py-3 px-2 overflow-hidden rounded-md border border-gray-200"
                    >
                      <div className="h-20 w-20 flex justify-between items-center flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={entry?.image as string}
                          alt="Product Image"
                          width={60}
                          height={60}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p>$ {entry.price}</p>
                          </div>

                          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="mt-2 flex flex-1 items-end justify-between text-sm">
                          <p className="font-semibold">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Sub Total:</p>
              <p>$ {totalPrice}</p>
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              Shipping & taxes are calculated at checkout
            </p>

            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
