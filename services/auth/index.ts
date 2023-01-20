import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function authCheck(token:any) {
  if (!token) {
    const isAuthorized = false;
    return isAuthorized;
  }
  const result = await fetch(`${ROOT_API}/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  const { isTokenValid } = result;
  return isTokenValid;
}

export async function handleRegister(params :any) {
  const URL = 'auth/register';
  const result:any = await axios.post(`${ROOT_API}/${URL}`, params)
    .then((res) => res)
    .catch((err) => console.log(err));
  return result.data;
}

export async function handleLogin(params :any) {
  const URL = 'auth/login';
  const result:any = await axios.post(`${ROOT_API}/${URL}`, params)
    .then((res) => res)
    .catch((err) => console.log(err));
  return result.data;
}
