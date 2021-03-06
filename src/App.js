import React from 'react';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {



  return (
    <Router>
      <Routes>
      {/* Página de Login */}
        <Route exact path="/login"
          element={
            <div className="flex justify-center items-center bg-gray-300 h-screen">
              <Login />
            </div>
          }
        />
        {/* Página principal */}
        <Route path="/mainpage"
          element={
            <div>
              <MainPage />
            </div>
          }
        />
          {/* Página del perfil */}
        <Route path="/profile"
          element={
            <div>
              <Profile />
            </div>
          }
        />
        {/* Si no se encuentra la página se redirige a la pagina NotFound */}
        <Route path="*" element={
          <NotFound />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
