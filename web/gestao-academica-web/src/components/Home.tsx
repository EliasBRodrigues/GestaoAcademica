import React from 'react'
import { RouteProject } from './routes/RouteProject'
import { AuthProvider } from './auth/context/AuthContext'

const Home = () => {
  return (
    <div>
      <AuthProvider>
        <RouteProject />
      </AuthProvider>
    </div>
  )
}

export default Home