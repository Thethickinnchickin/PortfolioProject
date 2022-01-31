import React from 'react';
import CardItem from './CardItem';
import './ContactCards.css'

function ContactCards() {
  return(
      <div className='cards'>
        <h1>Contact Me here!</h1>
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Contact me on upwork'
                        label='project1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Contact Phone Number'
                        label='project2'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Contact My Email'
                        label='project2'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
      </div>
  );
}

export default ContactCards;
