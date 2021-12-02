import { Grid } from "@material-ui/core";
import { NewGrid, Title, Category, Price } from "./styles";
import { Box } from "@material-ui/system";

interface ProductCardProps {
    name: string;
    image: string;
    category: string;
    price: number;
    id: number;
}

const ProductCard = ({
    name,
    image = "https://i.ibb.co/7WTNbYf/generic-burger.png",
    category,
    price,
    id,
}: ProductCardProps) => {
    return (
        <>
            <NewGrid container>
                <Grid item xs={4}>
                    <Box>
                        <figure className="image">
                            <img src={image} alt={name} />
                        </figure>
                        <div>
                            <Title>{name}</Title>
                            <Category>{category}</Category>
                            <Price>
                                R$ {price.toFixed(2).replace(".", ",")}
                            </Price>
                        </div>
                    </Box>
                </Grid>
            </NewGrid>
        </>
    );
};

export default ProductCard;
