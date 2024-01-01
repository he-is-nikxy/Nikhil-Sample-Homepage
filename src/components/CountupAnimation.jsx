import React, { useState } from "react";
import "../css components/countupanimation.css";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountupAnimation = () => {

    const [counterOn, setCounterOn] = useState(false)


  return (
    <ScrollTrigger onEnter={() => {setCounterOn(true)}} onExit={() => {setCounterOn(false)}}>
        <div id="countupAnimation">

            <div id="countupAnimationDivs">
                <div>
                    <h3>Lorem Ipsum</h3>
                    <h1>{counterOn && <CountUp start={0} end={123} duration={3} delay={0.2} />}+</h1>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, et est! Architecto harum quo non, id possimus accusamus inventore!</p>
                </div>
                <div>
                    <h3>Lorem Ipsum</h3>
                    <h1>{counterOn && <CountUp start={0} end={12} duration={2} delay={0.2} />}+</h1>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, et est! Architecto harum quo non, id possimus accusamus inventore!</p>
                </div>
                <div>
                    <h3>Lorem Ipsum</h3>
                    <h1>{counterOn && <CountUp start={0} end={12} duration={2} delay={0.2} />}+</h1>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, et est! Architecto harum quo non, id possimus accusamus inventore!</p>
                </div>
                <div>
                    <h3>Lorem Ipsum</h3>
                    <h1>{counterOn && <CountUp start={0} end={123} duration={3} delay={.2} />}</h1>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, et est! Architecto harum quo non, id possimus accusamus inventore!</p>
                </div>
            </div>
        </div>
    </ScrollTrigger>
  );
};

export default CountupAnimation;
