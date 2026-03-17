import {  Routes, Route } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { ThankYouPage } from './pages/ThankYouPage';

export default function App() {
   <div className="app">
        <Routes> 
          <Route path="/" element={<LandingPage/>} />
          <Route path="/gracias" element={<ThankYouPage/>} />
        </Routes>
      </div>
}