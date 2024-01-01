import React, { useState } from 'react'
import "../css components/accordions.css"
import { questions } from './api'
import MyAccordion from './MyAccordion'






const Accordions = () => {

    const [data, setData] = useState(questions)

  return (
    <div id='accordions'>
        <section id='accordionsSection'>
            <h1>FAQ</h1>
            {
                data.map( (ele) => {
                    return <MyAccordion key={ele.id} {...ele} />
                } )
            }
        </section>
    </div>
  )
}

export default Accordions