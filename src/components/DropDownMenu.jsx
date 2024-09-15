import React from 'react'
import './DropDownMenu.css'
import '../index.css'

function DropDownMenu({title, dropOptions}) {
  return (
    <div className="dropMenuBox">
        <p className="dropTitle">{title}</p>
        <select name="" id="" className='dropMenu'>
            {dropOptions.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default DropDownMenu