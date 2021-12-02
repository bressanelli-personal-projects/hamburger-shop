import { styled } from "@material-ui/system";
import { Box, Paper } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

export const RightBox = styled(Box)({
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
        color: 'var(--gray600-color)',

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
        width: "70%",
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
        color: 'var(--gray300-color)',
    },
});

export const NewBox = styled(Box)({
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    '& .formContainer': {        
        width: '90%',
        padding: '20px',
    },

    '& div.formHeader': {
        display: 'flex',
        justifyContent: 'space-between',        
    },    

    '& form > p': {
        margin: '20px',
        textAlign: 'center',
        color: 'var(--gray300-color)',
    },

    '& .textField': {
        margin: '15px 0',
    }
});

export const style = {
    width: { xs: "100%" },
    height: { xs: "100px" },
    p: { xs: "20px" },
    display: { xs: "flex", md: "block" },
    justifyContent: { xs: "flex-start" },
} as const;

export const textFieldTheme = createTheme({
    palette: {
        primary: {
            main: "#168821",
            dark: '#6FCD96'            
        },             
    },   
});