import {  Routes, Route } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { ThankYouPage } from './pages/ThankYouPage';

 function App() {
  return(
   <div className="app">
        <Routes> 
          <Route path="/" element={<LandingPage/>} />
          <Route path="/gracias" element={<ThankYouPage/>} />
        </Routes>
      </div>
  )
}
export default App;