import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../../services/api";

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductsProviderData {
    getProductsFromApi: () => void;
    productsList: any;
}

interface ProductTypes {
    name: string;
    image: string;
    category: string;
    id: number;
    price: number;
    userId?: number;
}

const ProductsContext = createContext<ProductsProviderData>(
    {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {

    const [ productsList, setProductsList ] = useState<ProductTypes[]>({} as ProductTypes[])

    const getProductsFromApi = () => {
        api.get<ProductTypes[]>("/products")
            .then((response) => {                
                setProductsList(response.data)
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getProductsFromApi()
    },[])

    return(
        <ProductsContext.Provider
            value={{ getProductsFromApi, productsList }}
        >
            {children}
        </ProductsContext.Provider>
    )
};

export const useProducts = () => useContext(ProductsContext);