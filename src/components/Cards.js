import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>여행이 특별해지는 곳!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/images/camping1.jpg'
              text='분지울 작은 캠프장'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./assets/images/camping2.jpg'
              text='백리포 바다와 파도소리 캠핑장'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./assets/images/camping3.jpg'
              text='밀양 뮤토 캠핑장'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='./assets/images/camping4.jpg'
              text='화왕산 오토캠핑장'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./assets/images/camping5.jpg'
              text='춘천 숲자연 휴양림 캠핑장'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;