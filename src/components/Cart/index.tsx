import { Button, Box, Modal } from "@material-ui/core";
import { useState } from "react";
import { useCart } from "../../Providers/cart";
import CartCard from "../CartCard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
    CartButton,
    CartItemQty,
    CartQtyContainer,
    CartProductsContainer,
    Header,
    Div,
    ButtonDiv,
    CartTotalCost,
    QtyDivContainer,
    style,
} from "./styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ActionButton from "../ActionButton";

interface ProductTypes {
    name: string;
    category: string;
    price: number;
    image: string;
    userId: number;
    id: number;
}

const Cart = () => {
    const {
        cartItems,
        addItemToCart,
        getCartFromApi,
        delItenFromCart,
        deleteAllItemsFromCart,
    } = useCart();
    const [updateRender, setUpdateRender] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const productCartCounterRender = [{} as const];

    const handleModalOpen = () => {
        if (cartItems[0]) {
            getCartFromApi();
        }
        setOpen(true);
    };
    const handleModalClose = () => setOpen(false);

    const removeProductFromCart = (productId: number) => {
        delItenFromCart(productId);
        setUpdateRender(!updateRender);
    };

    const addProductToCart = (product: ProductTypes) => {
        addItemToCart(product);
        setUpdateRender(!updateRender);
    };

    return (
        <>
            <QtyDivContainer>
                <Button sx={{ color: "#828282" }} onClick={handleModalOpen}>
                    <ShoppingCartOutlinedIcon />
                </Button>
                {cartItems.length > 0 && <p>{cartItems.length}</p>}
            </QtyDivContainer>

            <Modal sx={{ overflow: "auto" }} open={open}>
                {cartItems[0] ? (
                    <Box sx={style}>
                        <Header>
                            <h3>Carrinho de Compras</h3>
                            <CloseOutlinedIcon
                                className="closeButton"
                                onClick={handleModalClose}
                            />
                        </Header>
                        <Box>
                            {cartItems?.map((product: ProductTypes) => (
                                <div key={product.id}>
                                    {!productCartCounterRender.includes(
                                        product.name
                                    )
                                        ? productCartCounterRender.push(
                                              product.name
                                          ) && (
                                              <CartProductsContainer
                                                  elevation={3}
                                              >
                                                  <CartCard
                                                      name={product.name}
                                                      image={product.image}
                                                      price={product.price}
                                                  />
                                                  <CartQtyContainer>
                                                      <CartButton
                                                          onClick={() =>
                                                              removeProductFromCart(
                                                                  product.id
                                                              )
                                                          }
                                                      >
                                                          -
                                                      </CartButton>
                                                      <CartItemQty>
                                                          {
                                                              cartItems.filter(
                                                                  (
                                                                      item: ProductTypes
                                                                  ) =>
                                                                      item.name ===
                                                                      product.name
                                                              ).length
                                                          }
                                                      </CartItemQty>
                                                      <CartButton
                                                          onClick={() =>
                                                              addProductToCart(
                                                                  product
                                                              )
                                                          }
                                                      >
                                                          +
                                                      </CartButton>
                                                  </CartQtyContainer>
                                                  <DeleteIcon
                                                      className="deleteIcon"
                                                      onClick={() =>
                                                          removeProductFromCart(
                                                              product.id
                                                          )
                                                      }
                                                  />
                                              </CartProductsContainer>
                                          )
                                        : null}
                                </div>
                            ))}
                        </Box>
                        <hr />
                        <CartTotalCost>
                            <p>Total </p>
                            <p>
                                R$
                                {cartItems
                                    .reduce(
                                        (total: number, item: ProductTypes) =>
                                            total + item.price,
                                        0
                                    )
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>
                        </CartTotalCost>
                        <ButtonDiv>
                            <ActionButton
                                title="Remover Todos"
                                color="secondary"
                                width={true}
                                handleClick={deleteAllItemsFromCart}
                            ></ActionButton>
                        </ButtonDiv>
                    </Box>
                ) : (
                    <Box sx={style}>
                        <Header>
                            <h3>Carrinho de Compras</h3>
                            <CloseOutlinedIcon
                                className="closeButton"
                                onClick={handleModalClose}
                            />
                        </Header>
                        <Div>
                            <h1>Sua sacola está vazia</h1>
                            <p>Adicone itens</p>
                        </Div>
                    </Box>
                )}
            </Modal>
        </>
    );
};

export default Cart;
