import React from 'react'
import { RouteProject } from './routes/RouteProject'
import { AuthProvider } from './auth/context/AuthContext'

const Home = () => {
  return (
    <div>
        <RouteProject />
    </div>
  )
}

export default Home