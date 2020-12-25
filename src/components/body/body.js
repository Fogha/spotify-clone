import React from 'react'
import { useStateProviderValue } from '../../context/StateProvider'
import Header from '../header/header'
import './body.css'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../songrow/songRow'

export default function Body({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useStateProviderValue()
  

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcFkb4kasyGU3`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };


  return (
    <div className="body">
      <Header />
      
      <div className="body__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">

      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={() => playPlaylist()}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow playSong={() => playSong()} track={item.track} />
        ))}
      </div>
    </div>
  )
}
