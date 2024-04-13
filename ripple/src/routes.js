import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment'
import Bill from './pages/Bill'

export const Routed = () =>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Home}>
                    
                </Route> 
                <Route path='/login' Component={Login}>
                
                    
                </Route> 
                <Route path='/payment' Component={Payment}>
                </Route> 
                <Route path='/Bill' Component={Bill}>
                </Route> 
            </Routes>
            
        </Router>
    )

}