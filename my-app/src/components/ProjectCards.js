import React from 'react';
import CardItem from './CardItem';
import './ProjectCards.css'

function ProjectCards() {
  return(
      <div className='cards'>
        <h1>Check out these Projects</h1>
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/restaurantreview.jpg'
                        text='Restaurant Review with Express and EJS'
                        label='Restaurant Review'
                        path='https://rocky-meadow-39048.herokuapp.com'
                    />
                    <CardItem 
                        src='images/coffee-calling.png'
                        text='E-Commerce-Site Made with Nuxt and Express'
                        label='Coffee-Calling'
                        path='https://coffee-e-commerce.herokuapp.com/'
                    />
                    <CardItem 
                        src='images/friendslink.png'
                        text='Social Platfrom made with ASP Net Core and Angular'
                        label='Friends-Link'
                        path='https://friendslink.herokuapp.com/'
                    />
                    <CardItem 
                        src='images/25231.png'
                        text='Come Check out My GitHub'
                        link='Here'
                        path='https://github.com/Thethickinnchickin'
                        label='GitHub'
                    />
                    <CardItem 
                        src='images/workout.png'
                        text='Workout App to Log Workout Data'
                        link='Here'
                        path='https://github.com/Thethickinnchickin'
                        label='League-Workout'
                    />
                </ul>
            </div>
        </div>
      </div>
  );
}

export default ProjectCards;
