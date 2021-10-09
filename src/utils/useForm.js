import { useState } from "react";

export default function useForm() {
  const [state, setstate] = useState({});
  
  const handleChange = (e) => {
    e.persist();
    setstate((state) => ({ ...state, [e.target.name]: e.target.value}));
  };
  return [state, handleChange];
}
