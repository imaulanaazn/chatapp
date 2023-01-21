import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes } from '../data-types';

export default function getCurrentUser() {
  const token = Cookies.get('token');
  if (token) {
    const jwtToken = atob(token);
    const payload: JWTPayloadTypes = jwtDecode(jwtToken);
    return payload;
  }
  return null;
}
