import React from 'react';
import './Contact.css'


export default function Contact() {
    return (
        <div>
            <section id='Contact'>
                <h1 className='ContactTitle'>Contact us</h1>
                <div className='Contact'>
                    <input type={'text'} placeholder = {'Enter Your Name'}/>
                    <input type={'email'}  placeholder = {'Your Email'}/>
                    <input type={'number'} placeholder = {'Your Phone number'}/> 
                    <textarea placeholder='Write your Message'></textarea>
                    <button> Send </button>
                </div>
            </section>
        </div>
    )
}
