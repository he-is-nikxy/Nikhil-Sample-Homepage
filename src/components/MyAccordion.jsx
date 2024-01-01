import React, { useState } from 'react'
import "../css components/accordions.css"

const MyAccordion = ({question, answer}) => {

    const [show, setShow] = useState(false)

  return (
    <div id='myAccordion'>
        <div className='myAccordionContent' onClick={() => {setShow(!show)}}>
            <h3>{question}</h3>
            <p>{show? <i class="ri-subtract-fill"></i> : <i class="ri-add-circle-fill"></i>}</p>
        </div>
        { show && <p className='answer'>{answer}</p> }
    </div>
  )
}

export default MyAccordion