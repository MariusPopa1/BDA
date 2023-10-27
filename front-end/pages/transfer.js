'use client'
import React, { useState } from 'react';
import './styles/global.css';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const Lp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('page')
  };
  return (<p id="logo" onClick={handleClick} >playlist transfer</p>);
};
const Tp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('transfer')
  };
  return (<p class="un" onClick={handleClick} >Transfer</p>);
};
const LGp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('logIn')
  };
  return (<p onClick={handleClick} >Log in</p>);
};



const Header = () => {
  return (
    <header>
      <Lp />
      <Tp />
      <LGp />
    </header>
    );
};
let YS = true;

const YouTubeToSpotify = () => {
  const [isDiv1Visible, setIsDiv1Visible] = useState(true);

  const handleButtonClick = () => {
    setIsDiv1Visible(!isDiv1Visible);
  };

  return (
    <div>
      {
        isDiv1Visible
        ?
        <div class="YtS">
          <div class="YtS_left">
            <p id="MainP">Transfer playlists from YouTube and Spotify</p>
            <p id="SecondaryP">Transfer all your tracks in 1 click only with link quickly and free.</p>
            <div className="Now">
              <p>
                Now: Transfer to Spotify
              </p>
              <button onClick={handleButtonClick}><p>YouTube to Spotify</p></button>
            </div>
          </div>
          <div class="YtS_right">
            <div className="Transfer">
              <p>Transfer Youtube playlist to Spotify</p>
              <input className="TransferInput" type="text" placeholder="Enter YouTube playlist link..."></input>
              <input className="TransferInput" type="text" placeholder="Enter Spotify playlist name..."></input>
              <button><p>Transfer to Spotify</p></button>
            </div>
          </div>
        </div>
        :
        <div class="StY">
          <div class="StY_left">
            <p id="MainP">Transfer playlists from YouTube and Spotify</p>
            <p id="SecondaryP">Transfer all your tracks in 1 click only with link quickly and free.</p>
            <div className="Now">
              <p>
                Now: Transfer to YouTube
              </p>
              <button onClick={handleButtonClick}><p>Spotify to YouTube</p></button>
            </div>
          </div>
          <div class="StY_right">
            <div className="Transfer">
              <p>Transfer Spotify playlist to YouTube</p>
              <input className="TransferInput" type="text" placeholder="Enter YouTube playlist link..."></input>
              <input className="TransferInput" type="text" placeholder="Enter Spotify playlist name..."></input>
              <button><p>Transfer to YouTube</p></button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

















const R1 = () => {
  return (
  <div id="R1">
    <YouTubeToSpotify />
  </div>
  );
}
const Container = () => {
  return (
    <div id="container">
      <Header />
      <R1 />
    </div>
  ); 
};
const Body = () => {
  return (
    <body>
      <Container />
    </body>
  );
};
const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Playlist Transfer</title>
      </Head>
      <Body />
    </div>
  );
};
export default IndexPage;