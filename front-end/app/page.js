// components/PlaylistTransfer.js

import React from 'react';

const PlaylistTransfer = () => {
  const transfer = () => {
    // Функция transfer() должна быть определена здесь для обработки логики
    // переноса плейлистов
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Playlist Transfer</title>
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body>
        <header>
          <p id="logo" className="un">
            playlist transfer
          </p>
          <p>Transfer</p>
          <p>Log in</p>
        </header>

        <div id="container">
          <div id="R1">
            <div id="R1_cont_1">
              <div className="P_cont">
                <p>TRANSFER YOUR PLAYLISTS AND FAVORITES</p>
                <p>The most reliable and fast solution to recreate your music collection across music services.</p>
              </div>
              <div className="btn" onClick={transfer}>
                <p>Try it for free</p>
              </div>
            </div>
            <div id="R1_cont_2">
              <div>
                <img src="/img/YouTube.png" alt="YouTube" />
              </div>
              <div>
                <img src="/img/Transfer.png" alt="Transfer" />
              </div>
              <div>
                <img src="/img/Spotify.png" alt="Spotify" />
              </div>
            </div>
          </div>
        </div>
        <script src="/scripts/links.js"></script>
      </body>
    </html>
  );
};

export default PlaylistTransfer;
