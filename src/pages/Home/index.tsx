import { AppBar, Grid, Paper, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ActionButton from "../../components/ActionButton/index";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Cart from "../../components/Cart";
import ProductCard from "../../components/ProductCard";
import { useUser } from "../../Providers/user/index";
import { useCart } from "../../Providers/cart/index";
import { useProducts } from "../../Providers/products";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    Div,
    paperSx,
    ProductContent,
} from "./styles";

interface ProductsTypes {
    name: string;
    image: string;
    category: string;
    id: number;
    price: number;
    userId: number;
}

const Home = () => {
    const { productsList } = useProducts();
    const { addItemToCart, getCartFromApi } = useCart();
    const { userId, logout, isLoggedIn } = useUser();
    const history = useHistory();
    const [searchProduct, setSearchProduct] = useState<string>("");

    const HandleAddItemToCart = (product: ProductsTypes) => {
        product.userId = userId;
        addItemToCart(product);
        getCartFromApi();
    };

    const handleLogout = () => {
        logout();
        history.push("/login");
    };

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"                        
                        component="div"
                        sx={{
                            flexGrow: 1,                            
                        }}
                    >
                        <Div>
                            <Link to="/login">
                                <h1>
                                    Burguer <p>Kenzie</p>
                                </h1>
                            </Link>
                        </Div>
                    </Typography>
                    <Search>
                        <StyledInputBase
                            placeholder="Digitar pesquisa"
                            inputProps={{ "aria-label": "search" }}
                            value={searchProduct}
                            onChange={(e) => setSearchProduct(e.target.value)}
                        />
                        <SearchIconWrapper>
                            {searchProduct ? (
                                <ClearOutlinedIcon
                                    onClick={() => setSearchProduct("")}
                                />
                            ) : (
                                <SearchIcon />
                            )}
                        </SearchIconWrapper>
                    </Search>

                    <Link to='/login'>
                        <AccountCircleOutlinedIcon
                            sx={{ 
                                color: isLoggedIn ? "#27AE60" : "#828282",
                                margin: '0 10px',
                            }}
                        />
                    </Link>

                    <div>
                        <Cart />
                    </div>
                    <Button onClick={handleLogout}>
                        <LogoutOutlinedIcon
                            sx={{ color: "#828282" }}
                        ></LogoutOutlinedIcon>
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid
                container
                sx={{
                    justifyContent: "center",
                    maxWidth: "1150px",
                    m: "0 auto",
                }}
            >
                {productsList[0] &&
                    productsList
                        .filter((product: ProductsTypes) =>
                            product.name.includes(searchProduct)
                        )
                        .map((product: ProductsTypes) => (
                            <ProductContent key={product.id}>
                                <Paper elevation={3} sx={paperSx}>
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        image={product.image}
                                        category={product.category}
                                        price={product.price}
                                    />
                                    <div>
                                        <ActionButton
                                            title="Adicionar"
                                            color="primary"
                                            type="submit"
                                            handleClick={() =>
                                                HandleAddItemToCart(product)
                                            }
                                        ></ActionButton>
                                    </div>
                                </Paper>
                            </ProductContent>
                        ))}
            </Grid>
        </>
    );
};

export default Home;
