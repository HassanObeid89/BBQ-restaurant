import { useState, useCallback, useEffect } from 'react';
import {useCategory} from '../state/CategoryProvider'
import CategoryItem from '../components/CategoryItem';
import { getCollection } from '../scripts/fireStore';
export default function MenuPage() {
      // Global state
  const { categories, dispatch } = useCategory();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const path = "categories";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const categories = await getCollection(path);

      dispatch({ type: "SET_CATEGORIES", payload: categories });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, [dispatch]);

  useEffect(() => fetchData(path), [fetchData]);

  const Categories = categories.map((item)=><CategoryItem key={item.id} item={item}/>)
    return (
        <div>{status===1 && <ul>{Categories}</ul>}</div>
    )
}
