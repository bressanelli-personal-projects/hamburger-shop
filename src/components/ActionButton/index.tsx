import { ThemeProvider, Button } from "@material-ui/core";
import { theme } from "./styles";

interface User {
    name: string;
    email: string;
    password: string;    
}

interface ButtonProps {
    title: string;
    color: 'primary' | 'secondary';
    width?: boolean;
    type?: 'submit' | 'button' | 'reset' | undefined;
    handleClick?: any;
    onClick?: (userData: User) => void;
}

const ActionButton = ({ title, color, width = false, handleClick, type }: ButtonProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={color==='primary' ? { color: "#F5F5F5" } : { color: "#333333" }}
                size="large"
                fullWidth={width}
                color={color}
                variant="contained"
                type={type}
                onClick={handleClick}
            >
                {title}
            </Button>
        </ThemeProvider>
    );
};

export default ActionButton;
