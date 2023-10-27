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
const SingUp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('logIn');
  };
  return (
    <div class="LogIn">
      <p>
        Sing up
      </p>
      <hr />
      <input type="text" placeholder="Email" class="short_margin"></input>
      <input type="text" placeholder="Username" class="short_margin"></input>
      <input type="text" placeholder="Password" class="short_margin"></input>
      <input type="text" placeholder="Repeat password" class="short_margin"></input>
      <button id="SingUpBtn" class="short_margin" onClick={handleClick} ><p>Sing up</p></button>
    </div>
  );
};












const R1 = () => {
  return (
  <div id="R1">
  <SingUp />
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