import { ReactNode } from "react";
import { UserProvider } from "./user";
import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <UserProvider>
            <ProductsProvider>
                <CartProvider>{children}</CartProvider>
            </ProductsProvider>
        </UserProvider>
    );
};

export default Providers;
