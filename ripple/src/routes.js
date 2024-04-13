import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ax from './ax'

export const Routed = () =>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Home}>
                    
                </Route> 
                <Route path='/login' Component={Login}>
                    
                </Route> 
                <Route path='/app' Component={ax}>
                    
                </Route> 
                
            </Routes>
            
        </Router>
    )

}