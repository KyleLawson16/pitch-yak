import axios from 'axios';

export const FETCH_PITCHES = 'fetch_pitches';
export const CREATE_PITCH = 'create_pitch';

const ROOT_URL = 'http://localhost:8000/api';

export function fetchPitches(id) {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_PITCHES,
    payload: request
  };
}

export function createPitch(values, callback) {
  const request = axios.post(`${ROOT_URL}/create`, values)
    .then(() => callback());

  return {
    type: CREATE_PITCH,
    payload: request
  };
}
