import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  let endpoint = `https://www.googleapis.com/youtube/v3/search?${options.query}&key=${options.key}&maxResults=${options.max}`;
  return $.get(endpoint, null, callback);
};

export default searchYouTube;
