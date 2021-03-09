import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DynamicRoute from './components/DynamicRoute/DynamicRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  // const { t, i18n } = useTranslation();

  // const handleClick = (lang) =>{
  //   i18n.changeLanguage(lang)
  // }
  // const handleRoute=()=>{
  //   <Link to="/dynamic"></Link>
  // }
  return (
    <div className="App">
      {/* <h1>Hello Internationalization</h1>
      <nav>
        <button onClick={()=>handleClick('en')}>English</button>
        <button onClick={()=>handleClick('ar')}>Arabic</button>
      </nav>
      <br/>
       <div>
       <p>{t('Thanks.1')}</p>
       <p>{t('Why.1')}</p>
       </div>
       <br/>
       <button onClick={handleRoute}>
         click for next page
       </button> */}
       <Router>
         <Switch>
           
           <Route exact path = "/">
             <Navbar/>
             <Home/>
           </Route>
           <Route path="/para1">
             <DynamicRoute/>
           </Route>
           <Route path="/navigate">
             <Navigation/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
