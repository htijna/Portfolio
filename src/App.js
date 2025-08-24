


import { Route, Router, Routes } from 'react-router-dom';
import Ctools from './Portfolio/Ctools';
import Portfolio from './Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';
import Webprojects from './Portfolio/Webprojects';
import Protectedproject from './Portfolio/Protectedproject';
import Ctf from './Portfolio/Ctf';






function App() {
  

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ctools" element={<Ctools />} />
        <Route path="/webprojects" element={<Webprojects/>} />
         <Route path="/ctf" element={<Ctf/>} />
            <Route path="/protectedproject" element={<Protectedproject />} />

      </Routes>
    </BrowserRouter>

   
     
    </div>
  );
}

export default App;
