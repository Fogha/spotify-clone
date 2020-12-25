import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/home';
import Login from './pages/login/login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateProviderValue } from './context/StateProvider'

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();
  console.log(token);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        console.log('====================================');
        console.log(playlists);
        console.log('====================================');
        dispatch({
          type: 'SET_USER_PLAYLISTS',
          playlists
        })
      })
    }

    spotify.getPlaylist('37i9dQZEVXcFkb4kasyGU3').then(Response => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discoverWeekly: Response
      })
    })
 }, [token, dispatch])

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Home spotify={spotify} />}
    </div>
  );
}

export default App;
