import { ProductsWrapper } from "@/components/store";
import { getCollectionProducts, getCollections } from "@/services/collections";
import { getProducts } from "@/services/products";

interface CategoriesProps {
  params: {
    categories: string[];
  };
  searchParams: {
    search?: string;
  };
}

export default async function Category(props: CategoriesProps) {
  const { categories } = props.params;
  let products = [];

  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection) => collection.handle === categories[0]
    )?.id;
    products = await getCollectionProducts(`${selectedCollectionId}`);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
