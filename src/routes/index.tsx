import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes = () => {

    return(
        <>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;