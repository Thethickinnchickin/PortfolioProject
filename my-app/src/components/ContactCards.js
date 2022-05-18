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
                        src='images/download.png'
                        text='Look at my Linked In'
                        label='LinkedIn'
                        link='https://www.linkedin.com/in/matt-reiley'

                    />
                    <CardItem 
                        src='images/Upwork-Symbol.png'
                        text='Contact Me on Upwork'
                        label='upwork'
                        link='https://www.upwork.com/freelancers/~01159c4051952ad22c?viewMode=1'

                    />
                    <CardItem 
                        src='images\Gmail.max-1100x1100.png'
                        text='Contact My Email'
                        link='mattreileydeveloper@gmail.com'
                        path='https://mail.google.com/'
                        label='Email'
                    />
                    <CardItem 
                        src='images/25231.png'
                        text='Come Check out My GitHub'
                        link='Here'
                        path='https://github.com/Thethickinnchickin'
                        label='GitHub'
                    />
                </ul>
            </div>
        </div>
      </div>
  );
}

export default ContactCards;
