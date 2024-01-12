"use client"
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [username, setUsername] = useState("");
  const [usersData, setUsersData] = useState(null);
  const [error, setError] = useState('');

  const router = useRouter()
  const handleFetchUsersData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUsersData(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('User not found.');
      } else {
        setError('An error occurred. Please try again.');
      }
    
      setTimeout(() => {
        setError("")
      }, 3000)


    }
  };

  return (
    <div className="min-h-screen mx-auto p-4">
      <h1 className="text-center text-2xl font-bold my-4">Check GitHub User Info</h1>

      <form onSubmit={handleFetchUsersData} className="max-w-xl mx-auto my-4">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter GitHub Username eg: ONKAr156"
          className="border border-gray-400 text-black p-2 mb-4 w-full"
          required
        />
        <div className='text-end'>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            check
          </button>
        </div>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {usersData && (
        <div className="my-5 mx-10 h-[35rem] sm:h-[20rem] md:h-[15rem] bg-slate-950  rounded-md shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row h-full gap-4  ">
            <div className="my-2 flex items-center p-2 ">
              <img className=" shadow-2xl shadow-white  w-full object-cover md:object-contain  rounded-full md:w-48"
                src={usersData.avatar_url}
                alt={usersData}
              />
            </div>
            <div className="p-8 h-full">
              <div >
                <span>UserId: </span>
                <span className="text-sm text-blue-500 font-semibold">{usersData.login}</span>
              </div>
              <div className='flex items-center  gap-2'>
                <span className='md:text-lg'>Name:</span>
                <Link href={usersData.html_url} className="block mt-1 text-sm md:text-lg leading-tight font-medium text-white ">
                  {usersData.name}
                  <span className='mx-2 font-thin text-xs'>View</span>
                </Link>
              </div>

              <p className="mt-2 text-gray-500">Public Repositories: {usersData.public_repos}</p>
              <p className="mt-2 text-gray-500">Public Gists: {usersData.public_gists}</p>
              {/* The created_at contains  a string with 2023-02-11T03:03:48Z hence to achive only date I've use  toISOString() which converts the date object to a string in ISO 8601 format */}
              <p className="mt-2 text-gray-500">
                Profile Created: {new Date(usersData.created_at).toISOString().split('T')[0]}
              </p>
            </div>
          </div>
        </div>
      )}

      {
        usersData?<div className='text-end'>
        <button onClick={()=>router.push('/')} className='bg-gray-700 text-slate-50 py:2  md:py-2 px-2 md:px-4'>Home</button>
        </div>:""
      }

    </div>
  );
}

export default Home