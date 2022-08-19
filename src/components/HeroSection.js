import React from 'react';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>CAMPING</h1>
      <p>멋진 여행을 기대하고 계신가요?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          보러 가기
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          영상 보기 <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;