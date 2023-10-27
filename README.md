# Playlist Transfer: Youtube to Spotify
## Overview:
Our web app transfers Youtube playlists to spotify, working mainly in Python, with the help of the publicly available API's from Youtube and Spotify. For the front end, we used React paired with NextJs, with our 
motivation being that python boasts an extensive collection of libraries for data manipulation and even offers some API libraries for the websites we will use, making our work much easier. At the moment of writing this, we have yet to tie everything together, and implement it all into a fully working web app, but that is not far in our future and we look forward to completing our work.
## How to install and run the project:
### Setting Environment Variables Mac and Linux
* Edit the file by adding your credentials
    Run the following command to set your environment variable source .env

### Setting Environment Variables (Windows)
    set SPOTIFY_USER_ID <your_user_id>  
    set SPOTIFY_CLIENT_ID <your_client_id>  
    set SPOTIFY_CLIENT_SECRET <your_client_secret>  
    set SPOTIFY_REDIRECT_URI 'http://localhost:8888/callback'  
    set YOUTUBE_API_KEY <your_youtube_api_key> 

### Required libraries in python
    spotipy==2.16.1
    requests==2.25.0
    oauth2client==4.1.3
    youtube-title-parse==1.0.0
    google-api-python-client==1.12.8
  
## Future features and possibilites:
We look forward to developing this, and we are thinking of adding a multitude of features, such as:
* The possibility to view different statistics based on the music you listen, such as:
    * Popularity
    * Genres
    * Artists
* Updating playlist changes live to playlists on other platforms.
* Share playlists with friends
These are features we are planning to add to our web application, to further improve the experience of our users.
