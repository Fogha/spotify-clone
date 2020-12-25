import React from 'react';
import './header.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from '../../context/StateProvider';

export default function Header() {
  const [{ user }, dispatch] = useStateProviderValue()
  console.log(user);
  
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search for artist, songs, albums"/>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownOutlinedIcon className="header__dropDown"/>
      </div>
    </div>
  )
}
