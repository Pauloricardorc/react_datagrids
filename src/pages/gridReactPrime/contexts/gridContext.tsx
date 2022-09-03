import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../../core/service/axios";

interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IPropsGrid {
  newMarker: (name: string) => void;
  products?: IProducts[];
  rowClass?: any;
}

interface GridProviderProps {
  children: ReactNode;
}

export const GridContext = createContext({} as IPropsGrid);

export function GridProvider({ children }: GridProviderProps) {
  const [select, setSelect] = useState("");
  const [products, setProducts] = useState<IProducts[]>([]);

  async function getAllProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  const rowClass = (products: { category: string }) => {
    return {
      "row-accessories": products.category === select,
    };
  };

  const newMarker = (name: string) => {
    setSelect(name);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // const rowClass = (products: { category: string }) => {
  //   return {
  //     "row-accessories": products.category === "select",
  //   };
  // };

  return (
    <GridContext.Provider value={{ products, rowClass, newMarker }}>
      {children}
    </GridContext.Provider>
  );
}
