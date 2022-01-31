import React, {useCallback, userCallBack} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './HeroSection.css';
import '../App.css';



function HeroSection() {

const navigate = useNavigate();
const routeOnClick = useCallback(() => navigate('/about'), [navigate]);

  return (
      <div className='hero-container'>
          <video src="/videos/video-2.mp4" autoPlay loop muted/>
          <h1>I am a Web Developer</h1>
          <p>Come learn more about me</p>
          <div className='hero-btns'>
              <Button onClick={routeOnClick}
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/about'
            >
                About
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/portfolio'
            >
                Portfolio <FontAwesomeIcon icon={faPlayCircle}/>
            </Button>
          </div>
      </div>
  );
}

export default HeroSection;
