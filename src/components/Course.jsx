import React from 'react'
import '../styles/course.css'

function Course({title,description,price,img}) {
  return (
    <div className="card">
        <img className="courseImg" src={img} alt="img" />
        <h3>{title}</h3>
        <p>{description}</p>
        <h4 className="price">Price: {price}$</h4>
    </div>
  )
}

export default Course