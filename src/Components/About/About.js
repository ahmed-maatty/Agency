import { useEffect, useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import img1 from '../../Img/man.jpg';
import img2 from '../../Img/man (2).jpg';
import img3 from '../../Img/fggr.jpg';
import img4 from '../../Img/fggf.jpg';

export default function About() {

    const [counter,setcounter] = useState(0)

    const testimonials =[
        {
            imag: img1,
            para:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."',
            name: 'samuel albert',
            job: 'Top Manager'
        },

        {
            imag: img2,
            para:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."',
            name: 'antonio montana',
            job: 'Drug dealer'
        },
        {
            imag: img3,
            para:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."',
            name: 'Tommy shelby',
            job: 'Doctor'
        },
        {
            imag: img4,
            para:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."',
            name: 'Handosa',
            job: 'Killer'
        }
    ]

    

    return (
        <div>
            <section id='about'>
                <div className='row AboutSecondfst'>
                    <div className='col-lg-6 whatWeDoImg'></div>
                    <div className='col-lg-6 whatWeDo'>
                        <h4>what we do</h4>
                        <h1>the secrets great design</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button>read more</button>
                    </div>
                </div>

                                            {/******* Cards ******/}

                <div className='AboutSecondSec'>
                    <div className='aboutTitle'><h1>about us</h1></div>
                    <div className='aboutContent'>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                    <div className='col-lg-12 row Boxes'>
                        <motion.div 
                            className='Box'
                            animate={{opacity:1}}
                            initial={{opacity:0}}
                            transition={{duration : 1 ,delay : 1}}
                        >
                                <h1 id='FirstBox'>+200</h1>
                                <h6>HAPPY CLIENTS</h6>
                                <span>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                                </span>
                        </motion.div>
                        <motion.div 
                            className='Box'
                            animate={{opacity:1}}
                            initial={{opacity:0}}
                            transition={{duration : 1 ,delay : 1.8}}
                        >
                                <h1>+286</h1>
                                <h6>PROJECTS FINISHED</h6>
                                <span>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                                </span>
                        </motion.div>
                        <motion.div 
                            className='Box'
                            animate={{opacity:1}}
                            initial={{opacity:0}}
                            transition={{duration : 1 ,delay : 2.6}}
                        >
                                <h1>+1157</h1>
                                <h6>CUPS OF COFFEE</h6>
                                <span>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                                </span>
                        </motion.div>
                    </div>
                </div>

                                                    {/******* testimonials ******/}

                <div className='testimonial'>
                    <div className='opinion'>
                        <img src={testimonials[counter].imag} />
                        <p>{testimonials[counter].para}</p>
                        <h4>{testimonials[counter].name}</h4>
                        <h6>{testimonials[counter].job}</h6>
                    </div>
                    <span className='nextArrow' onClick={()=>{counter < testimonials.length - 1 ? setcounter(counter + 1) : setcounter(0)}}>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
                    <span className='prevArrow' onClick={()=>{counter === 0 ? setcounter(0) : setcounter(counter - 1)}}><FontAwesomeIcon icon={faArrowLeft} /></span>
                </div>
            </section>
        </div>
    )
}
