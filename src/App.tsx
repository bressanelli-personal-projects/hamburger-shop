import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer                          
                theme='colored'
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss                
                draggable
                pauseOnHover                
            />

            <Routes />
        </>
    );
}

export default App;
