"use client";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/item";
import Summary from "@/components/summary";

const CartPage = () => {
  //   const [isMounted, setIsMounted] = useState(false);
  //   useEffect(() => {
  //     setIsMounted(false);
  //   }, []);
  //   if (!isMounted) return null;
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-8">
          <h1 className="text-3xl font-bold ">Cart</h1>
          <div className="mt-12 grid grid-cols-12 items-start gap-x-12">
            <div className="col-span-7">
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
