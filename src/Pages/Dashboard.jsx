import React from 'react'
import Sidebar from '../Layout/Sidebar'
import Topbar from '../Components/Topbar'
import FirstRow from '../Components/FirstRow'
import SecRow from '../Components/SecRow'
import ThirdRow from '../Components/ThirdRow'

import './Dashboard.css'
const Dashboard = () => {
  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='container'>
        <Topbar />
        <FirstRow />
        <SecRow />
        <ThirdRow />
      </div>
    </section>
  )
}

export default Dashboard
