import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { user: userName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-10">
        <Link to="/dashboard">Go To Root </Link>
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/dashboard/main"> Go To Main</Link>
      </button>
      <div id="title" className="text-center text-xl mt-4">Profile</div>
      <div id="username">{userName}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
