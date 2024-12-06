import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FormCard from './Pages/FormCard';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-card" element={<FormCard />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
