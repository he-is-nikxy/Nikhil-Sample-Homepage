import React from 'react'
import "../css components/subscribe.css"
import sub from "../images/subscribe.jpg"

const Suscribe = () => {
  return (
    <div id='subscribe'>
        <div id='subscribe1'>
            <h1>Subscribe</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure obcaecati ut perferendis quis repellat exercitationem magnam necessitatibus error officia placeat!</p>
            <div id='emailSub'>
                <input type="text" name="" id="" placeholder='Enter your Email Address' />
                <button>Subscribe Now <i class="ri-arrow-right-s-fill"></i></button>
            </div>
        </div>
        <div id='subscribe2'>
            <img src={sub} alt="" />
        </div>
    </div>
  )
}

export default Suscribe