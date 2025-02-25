import React from 'react'
import Banner from './Banner'
import "./maincomp.css"
import Slide from './Slide'

const maincomp = () => {
  return (
    <div className="home_section">
        <div className="banner_part">
            <Banner />
        </div>

        <div className='slide_part'>
          <div className='left_slide'>
            <Slide />
          </div>
          <div className='right_slide'>
            <h4>Festive latest launches</h4>
            <imgs src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg"/>
            <a href='#'>see More</a>
          </div>
        </div>
        
        <Slide title="Today's Deal"/>
            <div className='center_img'>
                <img src='' alt=''/>
            </div>
        <Slide title="80% off"/>
    </div>
  )
}

export default maincomp