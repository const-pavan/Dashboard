import React from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { GrContact } from 'react-icons/gr'
import './SideBarFooter.css'
function SideBarFooter() {
  return (
    <div>
      <div className=''>
        <h2 className='sidebarfooter-container'>Help</h2>
        <h2 className='sidebarfooter-container'>Contact Us</h2>
        <BiHelpCircle className='sidebarfooter-icon' />
        <GrContact className='sidebarfooter-icon' />
      </div>
    </div>
  )
}

export default SideBarFooter
