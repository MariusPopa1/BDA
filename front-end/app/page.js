'use client'
import React from 'react';
import './styles/global.css';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const Lp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('page')
  };
  return (<p id="logo" class="un" onClick={handleClick} >playlist transfer</p>);
};
const Tp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('transfer')
  };
  return (<p onClick={handleClick} >Transfer</p>);
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




















const R1_cont_1 = () => {
  const router = useRouter();

    const handleClick = () => {
      router.push('transfer')
    };
  return (
    <div id="R1_cont_1">
      <div className="P_cont">
        <p>
          TRANSFER YOUR PLAYLISTS AND FAVORITES
        </p>
        <p>
         The most reliable and fast solution to recreate your music collection across music services.
        </p>
      </div>
      <div className="btn" onClick={handleClick}><p>Try it for free</p></div>
    </div>
  );
};
const R1_cont_2 = () => {
  return (
  <div id="R1_cont_2">
    <div>
      <img src="YouTube.png" alt="YouTube"/>
    </div>
    <div>
      <img src="Transfer.png" alt="Transfer"/>
    </div>
    <div>
      <img src="Spotify.png" alt="Spotify"/>
    </div>
  </div>
  );
}
const R1 = () => {
  return (
  <div id="R1">
    <R1_cont_1 />
    <R1_cont_2 />
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