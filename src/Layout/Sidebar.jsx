import React from 'react'
import List from './List'
import SideBarFooter from './SideBarFooter'
import './Sidebar.css'
const Navbar = () => {
  const links = [
    {
      icon: '/assets/i1.png',
      name: 'Dashboard',
      link: '#',
    },
    {
      icon: '/assets/i2.png',
      name: 'Transactions',
      link: '#',
    },
    {
      icon: '/assets/i3.png',
      name: 'Schedules',
      link: '#',
    },
    {
      icon: '/assets/i4.png',
      name: 'Users',
      link: '#',
    },
    {
      icon: '/assets/i5.png',
      name: 'Settings',
      link: '#',
    },
  ]

  return (
    <section className='sidebar-container'>
      <div>
        <h1 className='sidebar-header'>Board.</h1>
      </div>
      <div className='sidebar-body'>
        <List links={links} />
        <SideBarFooter />
      </div>
    </section>
  )
}

export default Navbar
