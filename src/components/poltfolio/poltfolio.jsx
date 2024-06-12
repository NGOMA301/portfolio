import React from 'react'
import ben1 from './ben1.jpg'
import ben3 from './ben3.jpg'
import ben4 from './ben4.jpg'

export default function poltfolio() {
  return (
    <section className='portfolio section'>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2 className='title'>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row">
          {/* ===================portfolio item start=========================== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner">
              <div className="portfolio-img">
                <img className='rango' src={ben1} alt='project1'/>
              </div>
            </div>
          </div>
          {/* ===================portfolio item end=========================== */}
          {/* ===================portfolio item start=========================== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner">
              <div className="portfolio-img">
                <img className='rango' src={ben3} alt='project2'/>
              </div>
            </div>
          </div>
          {/* ===================portfolio item end=========================== */}
          {/* ===================portfolio item start=========================== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner">
              <div className="portfolio-img">
                <img className='rango' src={ben4} alt='project3'/>
              </div>
            </div>
          </div>
          {/* ===================portfolio item end=========================== */}
        </div>
      </div>
    </section>
  )
}
