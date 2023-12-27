const SpotifyWebApi = require('spotify-web-api-node');

// Replace with your Spotify API access token
const accessToken = process.env.spotoken;

// Initialize the Spotify Web API client
const spotifyApi = new SpotifyWebApi({
  accessToken: accessToken
});

// Replace with the Spotify user ID you want to retrieve playlists for
const userId = '5ljno3qf9t1cic1q5mblung7b';

// Set the maximum number of playlists to retrieve per request (max is 50)
const limit = 50;

// Set the starting offset for retrieving playlists
let offset = 0;

// Array to store all retrieved playlists
let playlists = [];

// Recursive function to retrieve all playlists for a user
async function getAllPlaylists() {
  console.log(`Retrieving playlists with offset ${offset}`);
  const response = await spotifyApi.getUserPlaylists(userId, {
    limit: limit,
    offset: offset
  });

  // Add the retrieved playlists to the array
  playlists = playlists.concat(response.body.items.map(item => {
    return {
      name: item.name,
      url: item.external_urls.spotify
    }
  }));

  console.log(`Retrieved ${response.body.items.length} playlists`);

  // If there are more playlists to retrieve, increment the offset and call the function again
  if (response.body.total > offset + limit) {
    offset += limit;
    await getAllPlaylists();
  }

  // If all playlists have been retrieved, log the array
  else {
    console.log(playlists);
  }
}

// Call the function to retrieve all playlists
getAllPlaylists();
