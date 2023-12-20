"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="h-16 flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-8 md:px-16 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold">
            Next <span className="text-primary">Ecommerce</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden gap-10 lg:flex 2xl:ml-16">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link href={link.href} className="text-lg text-primary">
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Button variant={"ghost"} onClick={() => handleCartClick()}>
            <ShoppingBag className="w-5 h-5 text-[#333]" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
