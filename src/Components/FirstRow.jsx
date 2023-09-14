import React from 'react'
import './FirstRow.css'

function FirstRow() {
  const cards = [
    {
      icon: '/assets/g1.png',
      text: 'Total Revenues',
      amount: '$2,129,430',
      per: '+2.5%',
    },
    {
      icon: '/assets/g2.png',
      text: 'Total Transactions',
      amount: '1,520',
      per: '+1.7%',
    },
    {
      icon: '/assets/g3.png',
      text: 'Total Likes',
      amount: '9,721',
      per: '+1.4%',
    },

    {
      icon: '/assets/g4.png',
      text: 'Total Users',
      amount: '9,721',
      per: '+4.2%',
    },
  ]
  return (
    <div className='first-row'>
      {cards.map((card) => (
        <div className='card'>
          <img src={card.icon} alt={card.text} />
          <h2 className='card-text'>{card.text}</h2>
          <div className='card-content'>
            <h1 className='card-fig'>{card.amount}</h1>
            <h3 className='card-per'>{card.per}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FirstRow
