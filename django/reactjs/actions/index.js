import axios from 'axios';

export const FETCH_PITCHES = 'fetch_pitches';

const ROOT_URL = 'http://localhost:8000/api';

export function fetchPitches(id) {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_PITCHES,
    payload: request
  };
}
