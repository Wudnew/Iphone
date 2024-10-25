//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css/style.css"


import Header from './Components/Header';
import Footer from "./Components/Footer";
import Mac_laptop from "./Components/Mac_laptop";
import Iphone_pro from "./Components/Iphone_pro";
import Iphone from "./Components/Iphone";
import Watch from "./Components/Watch";
import Tv_airpod from "./Components/Tv_airpod";
import Macbook_ipad from "./Components/Macbook_ipad";
import AppleYoutube from "./Components/AppleYoutube";
import Main from './Components/Main';
import Fouro4 from './Components/Fouro4';
import {Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/SharedLayout';

//import Header from './Components/Header.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">       

        
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<Mac_laptop />} />
          <Route path="Iphone_pro" element={<Iphone_pro />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="tv" element={<Tv_airpod />} />
          <Route path="ipad" element={<Macbook_ipad />} />
          <Route path="AppleYoutube" element={<AppleYoutube />} />
          <Route path="*" element={<Fouro4 />} />
        </Route>
        

      </Routes>
    
        {/* <Mac_laptop/>
        <Iphone_pro />
        <Iphone />
        <Watch />
        <Tv_airpod />
        <Macbook_ipad />
        <AppleYoutube /> */}

      </header>
      
    </div>
    
  );
}


export default App;
