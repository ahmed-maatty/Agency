import React from 'react' ;
import './Header.css' ;
import { motion } from 'framer-motion';


export default function Header() {
            const HomeAnimate = {
                LogoAnimation : {
                    y : 0,
                    opacity: 1,
                    transition:{
                        duration : 1
                    }
                },
                HomeTitleAnimation : {
                    x : 0 ,
                    opacity: 1,
                    transition:{
                        delay:1.5,
                        duration : 1,
                    }
                },
                HomeParagraphAnimation : {
                    x : 0,
                    opacity : 1,
                    transition:{
                        delay:1.5,
                        duration : 1,
                    }
                },
                HomeButtonAnimation : {
                    opacity:1,
                    transition:{
                        delay:3,
                        duration : 1,
                    }
                }
            }
    return (
        <div>
            <section id='Home'>
                <div className='HomeContent row'>
                    <motion.div 
                        className = 'Logo col-lg-12 col-md-12 '
                        variants={HomeAnimate}
                        animate = "LogoAnimation"
                        initial = {{
                            y : '-190',
                            opacity : 0
                        }}
                    > 
                        <img src={require('../../Img/h.png')} />
                    </motion.div>

                    <motion.div 
                        className = 'HomeTitle'
                        variants = {HomeAnimate}
                        animate = "HomeTitleAnimation"
                        initial = {{opacity : 0 , x : '-150'}}
                    >
                        <h1>digital design studio</h1>
                    </motion.div>
                    <motion.div 
                        className='HomeParagraph'
                        variants = {HomeAnimate}
                        animate = "HomeParagraphAnimation"
                        initial = {{opacity : 0 , x : '150'}}
                    >
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </motion.div>
                    <motion.div 
                        className = 'HomeButton'
                        variants = {HomeAnimate}
                        animate = "HomeButtonAnimation"
                        initial = {{opacity : 0}}
                    >
                        <button>contact us</button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
