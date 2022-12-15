import React from 'react' ;
import './Team.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

export default function Team() {
    return (
        <div>
            <section id='Team'>
            <h1 className='TeamTitle'> meet our team</h1>
            <p className='paragraphTitleTeam'> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore </p>
            <div className='Box'>
                <div className='TeamBoxes'>
                    <span className='TeamImg'><img src = {require('../../Img/man.jpg')} /></span>
                    <span className='TeamName'>jeffrey brown</span>
                    <span className='Teampos'>ceo</span>
                    <span className='TeamDetails'>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</span>
                </div>
                <div className='TeamBoxes'>
                    <span className='TeamImg'><img src = {require('../../Img/fggf.jpg')} /></span>
                    <span className='TeamName'>samuel jackson</span>
                    <span className='Teampos'>web development leader</span>
                    <span className='TeamDetails'>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</span>
                </div>
                <div className='TeamBoxes'>
                    <span className='TeamImg'><img src = {require('../../Img/fggr.jpg')} /></span>
                    <span className='TeamName'>addriano</span>
                    <span className='Teampos'>sales manager</span>
                    <span className='TeamDetails'>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</span>
                </div>
                <div className='TeamBoxes'>
                    <span className='TeamImg'><img src = {require('../../Img/2.jpg')} /></span>
                    <span className='TeamName'>sakrlet johanson </span>
                    <span className='Teampos'>Graphic leader</span>
                    <span className='TeamDetails'>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</span>
                </div>
                <div className='TeamBoxes'>
                    <span className='TeamImg'><img src = {require('../../Img/3.jpg')} /></span>
                    <span className='TeamName'>dema albert</span>
                    <span className='Teampos'>marketing leader</span>
                    <span className='TeamDetails'>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</span>
                </div>
            </div>
            </section>
        </div>
    )
}
