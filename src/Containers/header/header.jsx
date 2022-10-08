import React from 'react';
import './header.css'
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';

const Header = () => {
  return <div className="gpt3__header section__padding" id='home'>
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>Let's Build something amazing with GPT3</h1>
      <p>This is my first full moden UI/UX project eyvfaiefvufsfgrhg erugfvarugvw weytvfayv</p>
      <div className='gpt3__header-content__input'>
        <input type="email" placeholder="Your Email Address" />
        <button type='button'>Get Started</button>
      </div>

      <div className='gpt3__header-content__people'>
        <img src={people} alt='people' />
        <p> The People who use our content</p>
      </div>

      
    </div>
    <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
  </div>;
};

export default Header;
