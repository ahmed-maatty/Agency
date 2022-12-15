import React from 'react'
import'./Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {faGear , faMobile , faFile ,faChartLine , faPalette , faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons'

export default function Service() {
    return (
        <div>
            <section id='services'>
                <h1 className='servicesTitle'> our services</h1>
                <p className='paragraphTitle'> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore </p>
                <div className='Boxes'>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faGear}/></span>
                        <span className='secondServiceSpan'>development</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faMobile}/></span>
                        <span className='secondServiceSpan'>mobile application</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faFile}/></span>
                        <span className='secondServiceSpan'>data analytic</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faChartLine}/></span>
                        <span className='secondServiceSpan'>marketing strategy</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faPalette}/></span>
                        <span className='secondServiceSpan'>designing</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                    <div className='Box'>
                        <span className='firstServiceSpan'><FontAwesomeIcon icon={faArrowUpRightDots}/></span>
                        <span className='secondServiceSpan'>SEO optimozation</span>
                        <span className='thirdServiceSpan'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
