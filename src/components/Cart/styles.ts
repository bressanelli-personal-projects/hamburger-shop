import { styled } from "@material-ui/system";
import { Paper } from "@material-ui/core";

export const CartButton = styled("button")({
    width: "40px",
    height: "40px",
    border: "2px solid var(--gray100-color)",
    color: "var(--secondary-color)",
    fontSize: "18px",
    fontWeight: 'bold',
});

export const CartItemQty = styled("div")({
    width: "40px",
    height: "40px",
    border: "2px solid var(--gray100-color)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 'bold',
});

export const CartQtyContainer = styled("div")({
    width: "50%",
    display: "flex",
});

export const ButtonDiv = styled(CartQtyContainer)({
    margin: "10px auto",
    width: '95%',
});

export const CartProductsContainer = styled(Paper)({
    margin: "5px",
    display: "flex",
    alignItems: "center",
    
    "& .deleteIcon": {
        color: "var(--gray100-color)",
        fontSize: "2rem",
        cursor: "pointer",
    },
});

export const Header = styled("header")({
    height: "60px",
    backgroundColor: "var(--primary-color)",
    color: "var(--gray100-color)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",

    "& .closeButton": {
        cursor: "pointer",
    },
});

export const Div = styled("div")({
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
        color: "var(--gray300-color)",
        margin: "10px",
    },
});

export const CartTotalCost = styled(CartQtyContainer)({
    width: "100%",
    padding: "0 15px",
    justifyContent: "space-between",
});

export const QtyDivContainer = styled("div")({
    position: "relative",

    "& p": {
        position: "absolute",
        top: "0",
        right: "5px",
        width: "20px",
        height: "20px",
        padding: "2px 0 0 5px",
        borderRadius: "30%",
        backgroundColor: "var(--primary-color)",
        color: "var(--gray0-color)",
        fontWeight: "700",
    },
});

export const style = {
    zIndex: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
        xs: 300,
        sm: 500,
        xl: 600,
    },

    bgcolor: "background.paper",
    border: "2px solid var(--primary-color)",
    borderRadius: "5px",
    boxShadow: 24,
    p: 0,
} as const;
