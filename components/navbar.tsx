"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import Image from "next/image";
import ItemsMenuMobile from "./items-menu-mobile";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <div onClick={() => router.push("/")}>
        <Image
          src="/rufina.png"
          alt="Logo de Rufina"
          width={90}
          height={90}
          layout="fixed"
        />
      </div>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />
        <User strokeWidth="1" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
