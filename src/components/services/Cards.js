import React, { Component } from 'react'
import Card from './CardUi'
import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpg'

class Cards extends Component {


  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title='Weddings' />
          </div>
          <div className="col-md-4" >
            <Card imgsrc={img2} title='Clubs' />
          </div>
          <div className="col-md-4" >
            <Card imgsrc={img3} title='Corporate Events' />
          </div>
        </div>
      </div>
    )
  }
}

export default Cards