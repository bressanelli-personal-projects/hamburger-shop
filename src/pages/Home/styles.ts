import { styled, alpha } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#27AE60",
        },
        secondary: {
            main: "#EB5757",
        },
    },
});

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "row-reverse",
    border: "2px solid var(--gray100-color)",    
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        borderColor: 'var(--gray600-color)',
    },
    marginLeft: 0,
    right: '10px',    
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    width: "15%",
    height: "80%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--primary-color)",
    color: "var(--gray0-color)",
    borderRadius: "10px",
    cursor: "pointer",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        [theme.breakpoints.up("sm")]: {
            width: "25ch",
        },       
    },
}));

export const Div = styled("div")({
    "& h1": {
        width: "60%",
        fontSize: "26px",
        display: "inline",
        textAlign: "left",
        color: "var(--gray600-color)",

        "& p": {
            fontSize: "18px",
            display: "inline",
            color: "var(--secondary-color)",
        },
    },
});

export const paperSx = {
    width: 250,
    height: 350,
    p: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
} as const;

export const ProductContent = styled("div")({
    border: "2px solid transparent",
    margin: 10,
    borderRadius: "4px",
    ":hover": {
        border: "2px solid var(--primary-color)",
        transform: 'scale(1.1)',
    },
});
