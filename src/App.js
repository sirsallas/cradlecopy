import React from 'react';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Footer, Pricing} from './components'
import Home from './pages/HomePage/Home'; 
import AboutUs from './pages/AboutUs/AboutUs';
import Admissions from './pages/Admissions/Admissions'
import Facilities from './pages/Facilities/Facilities'
import Publications from './pages/Publications/Publications'
import VisionPage from './pages/visionPage/visionPage';
import AdmissionsPage from './pages/admissionsPage/admissionsPage';
import PublicationPage from './pages/publicationPage/publicationPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' exact component={Home}/>
        <Route path='/aboutUs' exact component={AboutUs}/>
        <Route path='/admissions' exact component={Admissions}/>
        <Route path='/facilities' exact component={Facilities}/>
        <Route path='/publications' exact component={Publications}/>
        <Route path='/visionPage' exact component={VisionPage}/>
        <Route path='/admissionsPage' exact component={AdmissionsPage}/>
        <Route path='/publicationPage' exact component={PublicationPage}/>
      </Switch>
      <Footer/>
      <GlobalStyle />
    </Router>
  );
}

export default App;
