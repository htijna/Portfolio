


import { Route, Router, Routes } from 'react-router-dom';
import Ctools from './Portfolio/Ctools';
import Portfolio from './Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';






function App() {
  

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ctools" element={<Ctools />} />
      </Routes>
    </BrowserRouter>

   
     
    </div>
  );
}

export default App;
