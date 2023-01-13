import Navbar from "./Navbar";
import Crud from "./Components/Crud";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Crud/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
