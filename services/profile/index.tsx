import axios from 'axios';

// export interface userProfile{
//     email:string
//     id:string,
//     username: string,
//     profilePicture: File,
// }

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export async function setProfile(props:FormData, userId:string) {
  const result = await axios.put(`${ROOT_URL}/users/${userId}/profile`, props);
  return result;
}

export async function setProfileImg(props:FormData, userId:string) {
  const result = await axios.put(`${ROOT_URL}/users/${userId}/profile`, props);
  return result;
}
