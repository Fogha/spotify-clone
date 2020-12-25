import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/login/login'
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }
 }, [])

  return (
    <div className="App">
      {
        token ? (<Home />) : (<Login />)
      }
    </div>
  );
}

export default App;
