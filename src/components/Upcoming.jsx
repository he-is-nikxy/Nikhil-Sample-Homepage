import React from 'react'
import "../css components/upcoming.css"

const Upcoming = () => {
  return (
    <div id='upcoming'>
        <div className='examinationsMain'>
        <div className='examinations'>
            <h2>Upcoming Examinations</h2>
            <p>Enquire about the examination & register for the exams</p>
        </div>
        </div>
        <div className='date-time'>
            <div className='oct2014'>
                <div className='calendarIcon'>
                <i class="ri-calendar-line"></i>
                </div>
                <div className='calendarContent'>
                    <h4>02th October 2014</h4>
                    <p>Level 1 exam</p>
                    
                </div>
            </div>
            <div className='nov2016'>
            <div  className='calendarIcon'> <i class="ri-calendar-line"></i> </div>
                <div className='calendarContent'>
                    <h4>Nov-Dec 2016</h4>
                    <p>Level 2</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className='ongoing'>
            <div  className='calendarIcon'><i class="ri-calendar-line"></i></div>
                <div className='calendarContent'>
                    <h4>Ongoing this year</h4>
                    <p>Level 3 Grad</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upcoming