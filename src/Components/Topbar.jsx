import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import './Topbar.css'
function Topbar() {
  return (
    <div className='topbar-container'>
      <div>
        <h1 className='topbar-header'>Dashboard</h1>
      </div>
      <div className='topbar-end-container'>
        <div className=''>
          <form>
            <div class='topbar-form'>
              <input
                type='search'
                id='default-search'
                class='topbar-input'
                placeholder='Search...'
                required
              />
              <div class='topbar-img'>
                <div class='topbar-img'>
                  <svg
                    class='search-icon'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <AiOutlineBell className='topbar-bell' />
        </div>
        <div>
          <img src='/assets/img.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Topbar
