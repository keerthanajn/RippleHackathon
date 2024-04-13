import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export const Routed = () =>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Home}>
                    
                </Route> 
                <Route path='/login' Component={Login}>
                    
                </Route> 
            </Routes>
            
        </Router>
    )

}