import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/login/login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateProviderValue } from './context/StateProvider'

const spotify = new SpotifyWebApi;

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
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
