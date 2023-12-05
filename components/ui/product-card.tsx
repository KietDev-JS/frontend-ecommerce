"use client";

import { Product } from "@/type";
import Image from "next/image";
import { Button } from "./button";
import { Menu, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
interface ProductCardData {
  data: Product;
}
const ProductCard: React.FC<ProductCardData> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 max-w-[300px]"
      onClick={() => router.push(`/products/${data.id}`)}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={data?.images?.[0].url} fill alt="img" />
        <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 absolute bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button className="rounded-full  flex items-center justify-center bg-white shadow border ">
              <ShoppingCart color="black" />
            </Button>
            <Button className="rounded-full  flex items-center justify-center bg-white shadow border ">
              <Menu color="black" />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
        <p className="text-md pt-2 font-semibold text-black">
          {data.price}.VND
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
