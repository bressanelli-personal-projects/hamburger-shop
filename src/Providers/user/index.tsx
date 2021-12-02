import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import jwtDecode from "jwt-decode";
import api from "../../services/api";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
}

interface User {
    name?: string;
    email: string;
    password: string;
    id?: number;
    accessToken?: string;
    user?: object;
}

interface UserProviderData {
    accessToken: string;
    logout: () => void;
    login: (userData: User) => void;
    signup: (userData: User) => void;
    getUsers: (userData: User) => void;
    userId: number;
    isLoggedIn: boolean;
    isSignedIn: boolean;
}

interface DecodedType {
    decoded: object;
    sub: number;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [accessToken, setAccessToken] = useState<string>(
        () => localStorage.getItem("@Hamb:token") || ""
    );
    const [ userId, setUserId ] = useState<number>(0);
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);  
    const [ isSignedIn, setIsSignedIn ] = useState<boolean>(false) 

    const signup = (userData: User) => {
        api.post<User[]>("/register", userData)
            .then((response) => {
                toast.success('Registrado com sucesso!')
                setIsSignedIn(true)
                })
            .catch((err) => {
                toast.error('E-mail já cadastrado!')
                console.log(err)});
    };

    const login = (userData: User) => {
        api.post("/login", userData)
            .then((response) => {
                localStorage.setItem("@Hamb:token", response.data.accessToken);
                setAccessToken(response.data.accessToken);
                toast.success(`Login bem sucedido! Bem vindo ${response.data.user.name}`);                
                setIsLoggedIn(true);
            })
            .catch((err) => {
                toast.error("Senha incorreta ou usuário não encontrado!");
                console.log(err);
            });
    };

    useEffect(() => {
        const token = localStorage.getItem("@Hamb:token") || "";
        if (token) {
            const decoded: DecodedType = jwtDecode(token);
            setUserId(decoded.sub);
            setIsLoggedIn(true);            
        } // eslint-disable-next-line
    },[isLoggedIn]);

    const logout = () => {
        localStorage.clear();
        setAccessToken("");
        setIsLoggedIn(false);
        toast.success('Logout efetuado com sucesso!');        
    };

    const getUsers = (userData: User) => {
        api.get<User[]>(`/users/${userData.id}`)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    return (
        <UserContext.Provider
            value={{
                signup,
                login,
                logout,
                getUsers,
                accessToken,
                userId,
                isLoggedIn,
                isSignedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
