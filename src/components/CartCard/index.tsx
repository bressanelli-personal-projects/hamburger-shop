import { Grid } from "@material-ui/core";
import { NewGrid } from "./styles";
import { Box } from "@material-ui/system";

interface ProductCardProps {
    name: string;
    image: string;    
    price: number;    
}

const CartCard = ({
    name,
    image = "https://i.ibb.co/7WTNbYf/generic-burger.png",
}: ProductCardProps) => {    

    return (
        <>
            <NewGrid container>
                <Grid item xs={4}>
                    <Box className='imgBox'>
                        <figure className="image">
                            <img src={image} alt={name} />
                        </figure>
                        <p>{name}</p>
                    </Box>
                </Grid>
            </NewGrid>
        </>
    );
};

export default CartCard;
