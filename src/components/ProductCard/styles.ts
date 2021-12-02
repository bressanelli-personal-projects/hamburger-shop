import { styled } from "@material-ui/core";
import { Grid } from "@material-ui/core";

export const NewGrid = styled(Grid)({
    width: "300px",   

    "& figure.image": {
        margin: "0 auto",
    },

    "& img": {
        width: "150px",
        height: "150px",
        objectFit: "cover",
    },
});

export const Title = styled("h3")({
    margin: "10px 0",
});

export const Category = styled("p")({
    margin: "10px 0",
    color: 'var(--gray300-color)'
});

export const Price = styled(Category)({
    color: "var(--primary-color)",
});
