import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/watches')
      .then(res => setProducts(res.data.data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
