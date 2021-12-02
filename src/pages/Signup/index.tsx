import { Grid, Box, TextField, Paper, ThemeProvider } from "@material-ui/core";
import ActionButton from "../../components/ActionButton";
import { yupResolver } from "@hookform/resolvers/yup";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { InputAdornment } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../Providers/user/index";
import {
    LeftBox,
    NewBox,
    BagContainer,
    CustomPaper,
    style,
    DivPasswordWarning,
    textFieldTheme,
} from "./styles";

interface FormTypes {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

const Signup = () => {
    const { signup, isSignedIn } = useUser();
    const history = useHistory();

    const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .min(8, "Min. de 8 caracteres")
            .matches(passRegex, "Senha inválida"),
        confirmPassword: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>({ resolver: yupResolver(schema) });

    const onSubmitForm = ({ name, email, password }: FormTypes) => {
        const user = { name, email, password };
        signup(user);
        reset();
    };

    if (isSignedIn) {
        history.push("/login");
    }

    return (
        <>
            <Grid container sx={{ justifyContent: "center" }}>
                <Grid sx={style} item xs={12} sm={10} md={6} lg={5} xl={4}>
                    <LeftBox
                        sx={{
                            justifyContent: { xs: "flex-start", md: "center" },
                        }}
                    >
                        <h1>
                            Burguer<p> Kenzie</p>
                        </h1>
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
                    </LeftBox>
                </Grid>

                <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                    <NewBox>
                        <Paper className="formContainer" elevation={3}>
                            <div className="formHeader">
                                <h2>Cadastro</h2>
                                <Link className="loginLink" to="/login">
                                    Retornar para o login
                                </Link>
                            </div>

                            <form onSubmit={handleSubmit(onSubmitForm)}>
                                <ThemeProvider theme={textFieldTheme}>
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        className="textField"
                                        label="Nome"
                                        fullWidth
                                        {...register("name")}
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
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
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        className="textField"
                                        label="Confirmar senha"
                                        type="password"
                                        fullWidth
                                        {...register("confirmPassword")}
                                        error={!!errors.confirmPassword}
                                        helperText={
                                            errors.confirmPassword?.message
                                        }
                                    />
                                </ThemeProvider>
                                <div>
                                    <ActionButton
                                        width
                                        title="Cadastrar"
                                        color="primary"
                                        type="submit"
                                    ></ActionButton>
                                </div>
                                <DivPasswordWarning>
                                    <p>
                                        Senha forte, min de 8 caracteres, com
                                        letra maiúscula, minúscula, número e os
                                        seguintes símbolos @$!%*?
                                    </p>
                                </DivPasswordWarning>
                            </form>
                        </Paper>
                    </NewBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Signup;
