import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-6">
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">Go To Profile </Link>
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/dashboard/main"> Go To Main</Link>
      </button>
      <div id="title" className="text-center text-xl mt-4">Dashboard</div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
