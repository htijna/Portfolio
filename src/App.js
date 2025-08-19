


import { Route, Router, Routes } from 'react-router-dom';
import Ctools from './Portfolio/Ctools';
import Portfolio from './Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';
import Webprojects from './Portfolio/Webprojects';






function App() {
  

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ctools" element={<Ctools />} />
        <Route path="/webprojects" element={<Webprojects/>} />
      </Routes>
    </BrowserRouter>

   
     
    </div>
  );
}

export default App;
