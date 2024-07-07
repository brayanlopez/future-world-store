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
  return <h1>Categoria dinámica: {categories}</h1>;
}
