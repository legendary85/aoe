import React, { Component } from 'react'
import Services from '../services/CardUi'

class PackageUI extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Bronze Package </h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$100<small className="text-muted">/ hr</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>DJ Service/MC</li>
                <li>Facade</li>
                <li>(2) PA Speakers</li>
                <li>(2) Wireless Microphones</li>
                <li>(8) Uplights</li>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Book Event</button>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Gold Package</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$150 <small className="text-muted">/ hr</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>DJ Service/MC</li>
                <li>Facade</li>
                <li>(2) PA Speakers</li>
                <li>(2) Wireless Microphones</li>
                <li>(10) Uplights</li>
                <li>Newlywed Game</li>
                <li>Totum Light Stands</li>
                <li>Ceremony service included 50% off <br />
                  (Wedding)</li>
                <li>Cocktail Hour included <br /> (Wedding)</li>
                <br />
                <br />
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <img src="..." className="card-img-top" alt="..."></img>
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Platinum Package</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$250 <small class="text-muted">/ hr</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>DJ Service/MC</li>
                <li>Facade/Totum</li>
                <li>(2) PA Speakers</li>
                <li>(2) Wireless Microphones</li>
                <li>(10) Uplights</li>
                <li>TV w/slideshow</li>
                <li>Newlywed Games</li>
                <li>Ceremony service included <br />(Wedding)</li>
                <li>Cocktail Hour included <br />
                  (Wedding)</li>
                <li>Photo booth included <br />(valued at $100 hr)</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PackageUI