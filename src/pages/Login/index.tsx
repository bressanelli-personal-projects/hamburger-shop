import {
    Grid,
    Box,
    TextField,
    Paper,
    InputAdornment,
    ThemeProvider,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../Providers/user/index";
import ActionButton from "../../components/ActionButton";
import {
    NewBox,
    RightBox,
    BagContainer,
    CustomPaper,
    style,
    textFieldTheme,
} from "./styles";

interface FormTypes {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

const Login = () => {
    const { login, isLoggedIn } = useUser();
    const history = useHistory();

    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .min(6, "Min. de 8 caracteres"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>({ resolver: yupResolver(schema) });

    const onSubmitForm = ({ email, password }: FormTypes) => {
        const user = { email, password };
        login(user);
        reset();
    };

    if (isLoggedIn) {
        history.push("/");
    }

    return (
        <>
            <Grid
                container
                sx={{
                    justifyContent: "center",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    alignContent: { xs: "center" },
                }}
            >
                <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                    <NewBox>
                        <Paper className="formContainer" elevation={3}>
                            <div className="formHeader">
                                <h2>Login</h2>
                            </div>

                            <form onSubmit={handleSubmit(onSubmitForm)}>
                                <ThemeProvider theme={textFieldTheme}>
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        className="textField"
                                        label="Email"
                                        fullWidth                                        
                                        {...register("email")}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        className="textField"
                                        label="Senha"
                                        type="password"
                                        fullWidth
                                        {...register("password")}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
                                </ThemeProvider>

                                <div>
                                    <ActionButton
                                        width
                                        title="Logar"
                                        color="primary"
                                        type="submit"
                                    ></ActionButton>
                                </div>

                                <p>
                                    Crie sua conta para saborear muitas delícias
                                    e matar sua fome!
                                </p>

                                <div>
                                    <ActionButton
                                        width
                                        title="Cadastrar"
                                        color="secondary"                                        
                                        handleClick={() =>
                                            history.push("/signup")
                                        }
                                    ></ActionButton>
                                </div>
                            </form>
                        </Paper>
                    </NewBox>
                </Grid>

                <Grid sx={style} item xs={12} sm={10} md={6} lg={5} xl={4}>
                    <RightBox
                        sx={{
                            justifyContent: { xs: "flex-start", md: "center" },
                            alignItems: { xs: "center" },
                            height: { xs: "10px", md: "100vh" },
                        }}
                    >
                        <Link style={{ width: "70%" }} to="/">
                            <h1>
                                Burguer<p> Kenzie</p>
                            </h1>
                        </Link>

                        <CustomPaper elevation={3}>
                            <BagContainer>
                                <LocalMallOutlinedIcon />
                            </BagContainer>
                            <p>
                                A vida é como um sanduiche, é preciso recheá-la
                                com os <strong>melhores</strong> ingredientes.
                            </p>
                        </CustomPaper>
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "block",
                                },
                            }}
                            className="ballsDivContainer"
                        >
                            <div className="balls">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <br />
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <br />
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Box>
                    </RightBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
