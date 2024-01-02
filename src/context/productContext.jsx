import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [products, setProducts] = useState();
    const [selectedCategory, setSelectedCategory] = useState();

    // Kategori yoksa şu linke istek at:
    // https://fakestoreapi.com/products
    // Kategori varsa:
    // https://fakestoreapi.com/products/category/category_ismi
    
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products${selectedCategory ? "/category/" + selectedCategory: ""}`)
            .then((res) => setProducts(res.data));
    }, [selectedCategory]);

    //   Sağlayıcı
    return (
        <ProductContext.Provider 
        value={{ products, setSelectedCategory}}>
            {children}
        </ProductContext.Provider>
    )
};