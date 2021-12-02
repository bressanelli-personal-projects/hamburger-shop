import { styled } from "@material-ui/system";
import { Box, Paper, createTheme } from "@material-ui/core";

export const LeftBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    "& h1": {
        width: "70%",
        fontSize: "26px",
        display: "inline",
        textAlign: "left",

        "& p": {
            fontSize: "18px",
            display: "inline",
            color: "var(--secondary-color)",
        },
    },

    "& div.ballsDivContainer": {
        width: "70%",
    },

    "& div.balls": {
        width: "60%",
        height: "150px",
        aligSelf: "left",

        "& span": {
            display: "inline-Block",
            width: "15px",
            height: "15px",
            backgroundColor: "var(--gray100-color)",
            borderRadius: "100%",
            margin: "0 20px 20px 0",
        },
    },
});

export const BagContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    backgroundColor: " #e7fff1",
    color: "var(--primary-color)",
    margin: "10px",
});

export const CustomPaper = styled(Paper)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    padding: "10px",
    margin: "20px",

    "& p": {
        width: "70%",
        color: "var(--gray300-color)",
    },
});

export const NewBox = styled(Box)({
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    "& .formContainer": {
        width: "90%",
        padding: "20px",
    },

    "& div.formHeader": {
        display: "flex",
        justifyContent: "space-between",

        "& .loginLink": {
            color: "var(--gray300-color)",
            textDecoration: "underline",
            fontSize: "14px",
        },
    },

    "& .textField": {
        margin: "15px 0",
    },
});

export const style = {
    width: { xs: "100%" },
    height: { xs: "100px" },
    p: { xs: "20px" },
    display: { xs: "flex", md: "block" },
    justifyContent: { xs: "flex-start" },
} as const;

export const DivPasswordWarning = styled("div")({
    margin: "10px 0",
    textAlign: "justify",
    padding: "0 10px",
    fontSize: "14px",
    lineHeight: "1.2",
});

export const textFieldTheme = createTheme({
    palette: {
        primary: {
            main: "#168821",
            dark: '#6FCD96'
            
        },             
    },   
});
