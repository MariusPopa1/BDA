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
  return (<p onClick={handleClick} >Transfer</p>);
};
const LGp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('logIn')
  };
  return (<p class="un" onClick={handleClick} >Log in</p>);
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


const Forget = () => {
  const [isStyled, setIsStyled] = useState(true);

  const handleClick = () => {
    setIsStyled(!isStyled);
  };
  const customStyles = {
    opacity: isStyled ? '0' : '1',
    transition: 'opacity 0.1s easy',
  }; 
  return (
    <div class="LogIn">
      <p>
       Resset password
      </p>
      <hr />
      <input type="text" placeholder="Email"></input>
      <p id="message" style={customStyles}>A recovery link has been sent by email, you can close this page.</p>
      <button id="SingUpBtn" onClick={handleClick}><p>Send message</p></button>
    </div>
  );
};












const R1 = () => {
  return (
  <div id="R1">
  <Forget />
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