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
  return (<p id="logo" onClick={handleClick} >playlist transfer</p>);
};
const Fp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('features')
  };
  return (<p class="un" onClick={handleClick} >Features</p>);
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
      <Fp />
      <Tp />
      <LGp />
    </header>
    );
};


const ImgCont1 = () => {
  return (<div className="ImgCont">
      <img src="./YouTube.png" alt="YouTube" />
    </div>);
};
const ImgCont2 = () => {
  return (<div className="ImgCont">
      <img src="./Spotify.png" alt="Spotify" />
    </div>);
};

const MultipleTags = () => {
  const texts = ["Playlist transfer", "Playlist transfer", "Search by artist", "Search by artist", "find similar tracks", "find similar tracks", "creating playlists", "creating playlists"];
  const router = useRouter();

  const handleClick = () => {
    router.push('transfer')
  };
  return (
    <div class="under_platform_cont">
      {texts.map((text, index) => (
        <div className="under_platform" onClick={handleClick}>
          <p key={index}>{text}</p>
        </div>
      ))}
    </div>
  );
};

const R1 = () => {
  return (
    <div id="R1">
      <ImgCont1 />
      <ImgCont2 />
      <div className="tags-container">
        <MultipleTags />
      </div>
    </div>
  );
};

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