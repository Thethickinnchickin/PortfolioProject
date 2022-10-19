import React from 'react';
import CardItem from './CardItem';
import './ProjectCards.css'

function ProjectCards() {
  return(
      <div className='cards'>
        <h1>Check out my Projects</h1>
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/calc.png'
                        text='Calculator made with javascriipt'
                        label='Graping Calculator'
                        path='https://reiley-calculatorr.herokuapp.com/'
                    />
                    <CardItem 
                        src='images/friendslink.png'
                        text='Social Platfrom made with ASP Net Core and Angular'
                        label='Friends-Link'
                        path='https://friendslink.herokuapp.com/'
                    />

                    <CardItem 
                        src='images/coffee-calling.png'
                        text='E-Commerce-Site Made with Nuxt and Express'
                        label='Coffee-Calling'
                        path='https://coffee-e-commerce.herokuapp.com/'
                    />
                    <CardItem 
                        src='images/sudoku.png'
                        text='Sudoku Solver made with python'
                        label='Sudoku Solver'
                        path='https://github.com/Thethickinnchickin/sudoku-solver'
                    />
                </ul>
                <ul className='cards__items'>

                    <CardItem 
                        src='images/restaurantreview.jpg'
                        text='Restaurant Review with Express and EJS'
                        label='Restaurant Review'
                        path='https://rocky-meadow-39048.herokuapp.com'
                    />

                    <CardItem 
                        src='images/workout.png'
                        text='Workout App made with Nuxtjs'
                        path='https://calm-brushlands-65146.herokuapp.com/'
                        label='League-Workout'
                    />

                    <CardItem 
                        src='images/25231.png'
                        text='Come Check out My GitHub'
                        link='Here'
                        path='https://github.com/Thethickinnchickin'
                        label='GitHub'
                    />
                </ul>
                <ul className='cards__items'>

                </ul>
            </div>
            
        </div>
      </div>
  );
}

export default ProjectCards;
