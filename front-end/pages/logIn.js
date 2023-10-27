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

const LogIn = () => {
  const router = useRouter();

  const ToForget = () => {
    router.push('Forget');
  }
  const ToSingup = () => {
    router.push('Singup');
  }
  return (
  <div class="LogIn"> 
    <p>
      Login
    </p>
    <hr />
    <input type="text" placeholder="Username"></input>
    <input type="text" placeholder="Password"></input>
    <p id="forget" onClick={ToForget}>Forget Password?</p>
    <button id="LogInBtn"><p>Login</p></button>
    <p id="SingUp">Not a member? <span onClick={ToSingup}>Singup</span></p>
  </div>
  );
};













const R1 = () => {
  return (
  <div id="R1">
    <LogIn />
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