import React from 'react';
import SideBarOption from '../sidebarOption/sideBarOption';
import './sideBar.css'
//material icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
//context
import { useStateProviderValue } from '../../context/StateProvider'


export default function SideBar() {
  const [{ playlists }, dispatch] = useStateProviderValue();


  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
        className="sidebar__logo"
      />

      <SideBarOption Icon={HomeOutlinedIcon} title="Home" />
      <SideBarOption Icon={SearchOutlinedIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicOutlinedIcon} title="Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist, i) => (
        <SideBarOption key={i} title={playlist.name} />
      ))}

    </div>
  )
}
