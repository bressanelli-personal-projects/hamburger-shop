import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useUser } from "../user/index";

interface CartProviderProps {
    children: ReactNode;
}

interface ProductTypes {
    name: string;
    category: string;
    price: number;
    image: string;
    userId: number;
    id?: number;
}

interface CartProviderData {
    getCartFromApi: () => void;
    addItemToCart: (product: ProductTypes) => void;
    delItenFromCart: (productId: number) => void;
    cartItems: any;
    deleteAllItemsFromCart: (product: ProductTypes) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
    const { accessToken, isLoggedIn } = useUser();
    const [cartItems, setCartItems] = useState<ProductTypes[]>([]);
    const [checkMove, setCheckMove] = useState<boolean>(false);

    const getCartFromApi = () => {
        if (!accessToken) { return };
        api
            .get<ProductTypes[]>(`/cart`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        accessToken && getCartFromApi(); // eslint-disable-next-line
    }, [isLoggedIn, checkMove]);

    const addItemToCart = ({ ...product }: ProductTypes) => {
        if (!accessToken) {
            toast.info("Usuário precisa estar logado!");
            return;
        }
        api.post<ProductTypes[]>(
            "/cart",
            {
                name: product.name,
                category: product.category,
                price: product.price,
                image: product.image,
                userId: product.userId,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((response) => setCheckMove(!checkMove))
            .catch((err) => console.log(err));
    };

    const delItenFromCart = (productId: number) => {
        api.delete<ProductTypes[]>(`/cart/${productId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                setCheckMove(!checkMove);
                setCartItems([]);
            })
            .catch((err) => console.log(err, accessToken));
    };

    useEffect(() => {
        setCartItems([]);
    }, [isLoggedIn]);

    const deleteAllItemsFromCart = async () => {
        await cartItems.forEach((product: ProductTypes) => {
            api.delete<ProductTypes[]>(`/cart/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }).then((response) => {
                setCheckMove(!checkMove);
                setCartItems([]);
            });
        });
    };

    return (
        <CartContext.Provider
            value={{
                getCartFromApi,
                addItemToCart,
                delItenFromCart,
                cartItems,
                deleteAllItemsFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
