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
                        src='images/img-9.jpg'
                        text='Project with description'
                        label='project1'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Project with description'
                        label='project2'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Project with description That goes into detail about what it is and what code I have used'
                        label='project3'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Project with description'
                        label='project4'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-9.jpg'
                        text='Project with description'
                        label='project4'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
      </div>
  );
}

export default ProjectCards;
