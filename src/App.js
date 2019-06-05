import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import LandingPage from './pages/landingpage'
import ContactMe from './pages/contactme'


function App() {
    
    return (
       <BrowserRouter>
           <div className ="App">
                <Navbar/>
                <Switch>
                    <Route path='/contactme' component={ContactMe}/>
                </Switch>
           </div>
       </BrowserRouter>
    );
}

export default App;
