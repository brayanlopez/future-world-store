import { ProductsWrapper } from "@/components/store";
import { getProducts } from "@/services/products";

interface CategoriesProps {
  params: {
    categories: string[];
  };
  searchParams: {
    search?: string;
  };
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  const products = getProducts();
  return <ProductsWrapper products={products} />;
}
