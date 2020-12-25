import React from 'react';
import './home.css'
import SideBar from '../../components/sidebar/sideBar';
import Body from '../../components/body/body'
import Footer from '../../components/footer/footer';

export default function Home({ spotify }) {
  return (
    <div className="home">
      <div className="home__body">
        <SideBar />
        <Body spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  )
}
