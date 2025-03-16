import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter basename="/trinity">
    <Navbar />
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      color: 'white'
    }}>
      <h1>TrinityTech</h1>
    </div>
  </BrowserRouter>
);

export default App;
