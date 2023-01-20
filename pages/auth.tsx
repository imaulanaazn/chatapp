import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { handleLogin, handleRegister } from '../services/auth';

export default function auth() {
  const router = useRouter();
  const [curentForm, setCurentForm] = useState('signin');
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  async function handleSubmit(e:any) {
    e.preventDefault();
    const result = curentForm === 'signin' ? await handleLogin(formData) : await handleRegister(formData);
    setFormData({ username: '', email: '', password: '' });
    if (result.token) {
      const { token } = result;
      const base64Token = btoa(token);
      Cookies.set('token', base64Token);
      router.push('/');
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-1/2 xl:max-w-screen-sm w-full">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Chatapp</div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            {curentForm === 'signin' ? 'Log in' : 'Register'}

          </h2>
          <div className="mt-12">
            <form onSubmit={(e) => { handleSubmit(e); }}>
              {curentForm === 'signin' ? ''
                : (
                  <div>
                    <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                    <input
                      type="text"
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      placeholder="username"
                      onChange={(e) => { setFormData({ ...formData, username: e.target.value }); }}
                      value={formData.username}
                      required
                    />
                  </div>
                )}
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide mt-8">Email Address</div>
                <input
                  type="text"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="youremail@gmail.com"
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }}
                  value={formData.email}
                  required
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      href="/#"
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                      cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  type="password"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                  onChange={(e) => { setFormData({ ...formData, password: e.target.value }); }}
                  value={formData.password}
                  required
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                >
                  {curentForm === 'signin' ? 'Log in' : 'Register'}
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              {curentForm === 'signin' ? "Don't have an account ?" : 'Already have an account?'}
              {' '}
              <button type="button" onClick={() => { setCurentForm(curentForm === 'signin' ? 'signup' : 'signin'); }} className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                {curentForm === 'signin' ? 'Register' : 'Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
