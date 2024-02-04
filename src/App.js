import React from 'react';
import { Login } from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { AuthProvider } from "./Auth";
import Homepage from './Homepage';

function App() {
  return (<div className="App">
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route index exact element={<Homepage />} />
        </Routes>
      </AuthProvider>
    </Router>
  </div>
  );
}
export default App;


