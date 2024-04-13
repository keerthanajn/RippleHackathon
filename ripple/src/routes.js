import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment'
import Bill from './pages/Bill'
import CreateBill from './pages/CreateBill'
import AddSource from './pages/AddSource'
import XRPtest from './pages/XRPtest'

export const Routed = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' Component={Login}>  
                </Route> 
                <Route path='/home' Component={Home}>
                </Route> 
                <Route path='/payment' Component={Payment}>
                </Route> 
                <Route path='/Bill' Component={Bill}>
                </Route> 
                <Route path='/AddSource' Component={AddSource}>
                </Route> 
                <Route path='/CreateBill' Component={CreateBill}>
                </Route> 
                <Route path='/XRP' Component={XRPtest}>
                </Route> 
                <Route path='/logo.jpg'>
                </Route> 
            </Routes>
            
        </Router>
    )

}