import React from 'react'
import './SimilarTitle.css'

function SimilarTitle({title, className=''}) {
  return (
    <div className={"similarItemBox " + className}>
        <p>{title}</p>
        <a href="#">More Products <img src="./src/assets/arrow-right.svg" alt="" srcset="" /></a>
    </div>
  )
}

export default SimilarTitle