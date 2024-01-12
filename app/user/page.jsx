"use client"
import React, { useState } from 'react'

const page = () => {
  const [usersData, setUsersData] = useState(null);
  return <>
    {usersData && (
        <div className="max-w-xl mx-auto bg-white rounded shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={usersData.avatar_url} alt={usersData.name} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{usersData.login}</div>
              <a href={usersData.html_url} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {usersData.name}
              </a>
              <p className="mt-2 text-gray-500">Public Repositories: {usersData.public_repos}</p>
              <p className="mt-2 text-gray-500">Public Gists: {usersData.public_gists}</p>
              <p className="mt-2 text-gray-500">
                Profile Created: {new Date(usersData.created_at).toISOString().split('T')[0]}
              </p>
            </div>
          </div>
        </div>
      )}
  </>
}

export default page