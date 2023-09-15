import React from 'react'
import './List.css'
function List({ links }) {
  return (
    <div>
      {links.map((link) => (
        <div className='list-container'>
          <img
            className={link.name === 'Dashboard' ? 'list-img-bold' : 'list-img'}
            src={link.icon}
            alt={link.name}
          />
          <h2
            className={
              link.name === 'Dashboard' ? 'list-text-bold' : 'list-text'
            }
          >
            {link.name}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default List
