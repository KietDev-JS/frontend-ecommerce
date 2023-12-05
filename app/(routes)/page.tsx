import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/productlist";
import Container from "@/components/ui/container";
import Image from "next/image";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("23865e89-0400-45b4-b2ef-83f9ef4ad26e");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4">
          <ProductList data={products} title="Featured" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
