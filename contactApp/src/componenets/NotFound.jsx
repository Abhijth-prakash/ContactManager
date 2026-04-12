import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      
      <p className="text-xl text-gray-600 mt-2">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        <FiHome className="text-lg" />
        Go Home
      </Link>

    </div>
  )
}

export default NotFound