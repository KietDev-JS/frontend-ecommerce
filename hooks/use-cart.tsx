import { Product } from "@/type";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get)) => ({
        items:[],
        addItem:(data:Product) => {
            const currentItem = get().items;
            const existingItem = currentItem.find((item)=> item.id === data.id)
            if(existingItem){
                return toast("Item already in cart")
            }
            set({items:[..get().items, data]})
            toast.success("Item added to cart")
        },
        removeItem: 

    })
)
export default useCart