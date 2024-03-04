import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Reports from './Components/Reports/Reports';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
