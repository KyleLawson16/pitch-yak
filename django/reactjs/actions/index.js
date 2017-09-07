import axios from 'axios';

export const FETCH_VIDEO = 'fetch_video';

const ROOT_URL = 'https://www.googleapis.com';
const API_KEY = '?key=AIzaSyAI8niheRLYsF75iVAriiwLfs4tWT8GUUM';

export function fetchVideo(id) {
  const request = axios.get(`${ROOT_URL}/youtube/v3/videos${API_KEY}&part=snippet&id=${id}`);

  return {
    type: FETCH_VIDEO,
    payload: request
  };
}
