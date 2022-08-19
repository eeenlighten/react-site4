import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        오늘은 어디로 가볼까?
        </p>
        <p className='footer-subscription-text'>
          빈 자리를 빠르게 찾아보세요
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='검색'
            />
            <Button buttonStyle='btn--outline'>검색</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>문의하기</h2>
            <Link to='/sign-up'>고객 지원</Link>
            <Link to='/'>교환 및 반품</Link>
            <Link to='/'>도움</Link>
            <Link to='/'>오시는길</Link>
            <Link to='/'>채용</Link>
          </div>
          <div class='footer-link-items'>
            <h2>우리에 대해</h2>
            <Link to='/'>CAMPING 정보</Link>
            <Link to='/'>개인화</Link>
            <Link to='/'>블로그</Link>
            <Link to='/'>사이트맵</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>유용한 링크</h2>
            <Link to='/'>이용 약관</Link>
            <Link to='/'>허용되는 사용 정책</Link>
            <Link to='/'>개인 정보 및 쿠키 정책</Link>
            <Link to='/'>위조 조언</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SNS</h2>
            <Link to='/'>인스타그램</Link>
            <Link to='/'>페이스북</Link>
            <Link to='/'>유튜브</Link>
            <Link to='/'>트위터</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CAMPING
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>CAMPING © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;