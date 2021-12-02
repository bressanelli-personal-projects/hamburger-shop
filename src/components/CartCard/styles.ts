import { styled } from "@material-ui/core";
import { Grid } from "@material-ui/core";


export const NewGrid = styled(Grid)({
    width: "200px",    

    "& figure.image": {
        margin: "0 auto",        
    },

    "& img": {
        width: "100px",
        height: "100px",
        objectFit: "cover",
    },

    '& .imgBox': {
        padding: '5px 10px',
        width: '100px',
    }
});


