import React from 'react'
import { LKO_MAPS, MAIL } from '../Utils/constants'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <h4>CONTACT</h4>
            <h2>Don't be shy! Hit me up! 👇</h2>
            <div className='contact-down-section'>
                <div className='mail-pin'>
                    <span>
                        <i className="fas fa-map-pin"></i>
                    </span>
                    <div>
                        <h5>Location</h5>
                        <a href={LKO_MAPS} target="blank">Lucknow, India</a>
                    </div>
                </div>
                <div className='mail-div'>
                    <span>
                        <i className="fas fa-envelope-open"></i>
                    </span>
                    <div>
                        <h5>Mail</h5>
                        <a href={MAIL} target="blank">akhileshyadav26620@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact