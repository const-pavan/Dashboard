import React from 'react'
import { Bargraph } from '../Graph'
import './SecRow.css'

function SecRow() {
  return (
    <div className='sec-row'>
      <div className='sec-row-header'>
        <h1 className='sec-row-title'>Activities</h1>
        <div className='sec-row-subheader'>
          <h2 className='sec-row-date'>May - June 2021</h2>
          <div>
            <div className='sec-row-legend'>
              <div className='sec-row-legend-item'>
                <div className='sec-row-legend-color sec-row-legend-color-red'></div>
                <h2 className='sec-row-legend-text'>Guest</h2>
              </div>
              <div className='sec-row-legend-item'>
                <div className='sec-row-legend-color sec-row-legend-color-green'></div>
                <h2 className='sec-row-legend-text'>User</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-graph'>
        <Bargraph />
      </div>
    </div>
  )
}

export default SecRow
