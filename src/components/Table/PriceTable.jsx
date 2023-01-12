import React from 'react'
import Heading from '../UI/Heading'
import Spacer from '../UI/Spacer'
import "./priceTable.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../UI/Button';

const PriceTable = () => {
  return (
    <>
        <div className="container-fluids price-table">
        <Spacer />
        <div className="col-11 col-sm-10 col-md-9 col-lg-9 mx-auto">
            <div className='row' id="pricing">
            <Heading text="Pricing"/>
            </div>
            <div className='row all-tables d-flex justify-content-evenly'>
                <div className="col-10 col-md-10 col-lg-3 single-table mt-4 mt-lg-0">
                    <div className='py-3'>
                        <h3>Basic</h3>
                    </div>
                    <div className='pt-2 pb-3 price-p'><h4 className='price'>149$ / Month</h4></div>
                    <ul class="list-group">
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> 24/7 Support</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Mobile Optimized</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-xmark" /> Free Custom Domain</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-xmark" /> Best Hosting</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-xmark" /> Marketplace evaluation</li>
                    </ul>
                <div className="py-4">
                    <Button text="Get Started" color="black"/>
                </div>
                </div>
                <div className="col-10 col-md-10 col-lg-3 single-table mt-4 mt-lg-0 special-price">
                    <div className="dark-div"></div>
                    <div className='div-up'>
                    <div className='py-3'>
                        <h3>Pro</h3>
                    </div>
                    <div className='pt-2 pb-3 price-p'><h4 className='price'>249$ / Month</h4></div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> 24/7 Support</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Mobile Optimized</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Free Custom Domain</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Best Hosting</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Marketplace evaluation</li>
                    </ul>
                <div className="py-4">
                    <Button text="Get Started" color="black"/>
                </div>
                </div>
                <div className="col-10 col-md-10 col-lg-3 single-table mt-4 mt-lg-0">
                    <div className='py-3'>
                        <h3>Business</h3>
                    </div>
                    <div className='pt-2 pb-3 price-p'><h4 className='price'>199$ / Month</h4></div>
                    <ul class="list-group">
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> 24/7 Support</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Mobile Optimized</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-check" /> Free Custom Domain</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-xmark" /> Best Hosting</li>
                        <li class="list-group-item"><FontAwesomeIcon icon="fa-solid fa-xmark" /> Marketplace evaluation</li>
                    </ul>
                <div className="py-4">
                    <Button text="Get Started" color="black"/>
                </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default PriceTable