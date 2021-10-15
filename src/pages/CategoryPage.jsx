import { useParams } from "react-router-dom";
import { useCategory } from "../state/CategoryProvider";
import { useProduct } from "../state/ProductProvider";
import ProductCard from "../components/ProductCard";
export default function CategoryPage() {
  const { categoryname } = useParams();
  const { categories } = useCategory();
  const { products } = useProduct();
  const filteredItems = products.filter(
    (product) => product.category === categoryname
  );
  const category = categories.filter(
    (category) => category.name === categoryname
  );

  const cards = filteredItems.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));
  return (
    <div className="category-wrapper">
      <img className="hero" src={category[0].imgURL} alt=''/>
      <h1>{category[0].name}</h1>
      <p>{category[0].description}</p>
      <ul>{cards}</ul>
    </div>
  );
}
