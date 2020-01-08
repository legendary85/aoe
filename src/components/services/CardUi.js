import React from 'react'
import './card-style.css'

// import img1 from '../../img/img-1.jpg'
// import img2 from '../../img/img-2.jpg'


const Services = (props) => {
  return (

    //Bootstrap with card

    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className='card-title'>{props.title}</h4>
        <p className="card-text text-secondaary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium enim magnam porro sed, eos qui. Natus ex beatae error.</p>
        <a href="#" className='btn btn-outline-success'>Go Anaywhere</a>
      </div>
    </div>

  )
}

export default Services
