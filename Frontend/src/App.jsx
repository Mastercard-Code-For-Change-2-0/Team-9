
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<UserDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
