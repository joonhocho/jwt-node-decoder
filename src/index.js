import jwtDecode from 'jwt-decode';

export const decodeToken = jwtDecode;

export function getTokenExpirationDate(token) {
  const decoded = jwtDecode(token);
  if (decoded.exp == null) {
    return null;
  }

  const d = new Date(0); // The 0 here is the key, which sets the date to the epoch
  d.setUTCSeconds(decoded.exp);

  return d;
}

export function isTokenExpired(token, offsetSeconds) {
  const d = getTokenExpirationDate(token);
  if (d == null) {
    return false;
  }

  // Token expired?
  return !(d.valueOf() > new Date().valueOf() + (offsetSeconds || 0) * 1000);
}

export default {
  decodeToken: jwtDecode,
  getTokenExpirationDate,
  isTokenExpired,
};
