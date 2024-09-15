import React from 'react'
import './SectionSpan.css'

function SectionSpan({title}) {
  return (
    <div className="spanBox">
        <button className='expand'>{title} <img src="./src/assets/downArrow.svg" alt="" srcset="" className='downArrow' /></button>
    </div>
  )
}

export default SectionSpan