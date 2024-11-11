import React, {useEffect} from 'react'
import './AboutUs.css'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'Swift Portal - About Us';
  }, []);

  return (
    <div className='about-us-page'>
      <h1 className='au-h1'>About Us</h1>
      <div class="side-wrapper">
        <div className='au-lhs'>
          <div className='au-lhs-one'>
            <h2>Who Are we?</h2>
            <p>Swift Banking is a pristene banking enterprise designed to make baking for you a lot easier</p>
            <p>Swift is designed to ensure that contrants and claims get approved quickly and easily</p>
          </div>
          <div className='au-lhs-two'>
            <h2>Why Choose Us</h2>
            <p>Swift is designed to streamline the banking process</p>
            <p>Do labore consequat veniam elit sunt duis sint reprehenderit.</p>
            <p>Do labore consequat veniam elit sunt duis sint reprehenderit.</p>
            <p>Do labore consequat veniam elit sunt duis sint reprehenderit.</p>
          </div>
        </div>
        <div className='au-rhs'>
          <div className='au-rhs-one'>
            <h2>Aliqua nisi id tempor qui cillum excepteur est id.</h2>
            <p>Sit excepteur officia aliqua sunt sit eiusmod.</p>
            <p>Consequat quis mollit cillum nostrud commodo est.</p>
            <p>Laborum eu voluptate amet cupidatat.</p>
          </div>
          <div className='au-rhs-two'>
            <h2>Nisi est in aliquip amet esse elit ea sint pariatur mollit sit aliqua irure proident.</h2>
            <p>Eu velit irure quis laboris est dolore dolor elit.</p>
            <p>Ad officia irure labore et excepteur voluptate labore cillum ea sunt duis.</p>
            <ul>
              <ol>Do anim aliqua enim anim Lorem exercitation adipisicing irure proident voluptate dolore elit elit eu.</ol>
              <ol>Do anim aliqua enim anim Lorem exercitation adipisicing irure proident voluptate dolore elit elit eu.</ol>
              <ol>Do anim aliqua enim anim Lorem exercitation adipisicing irure proident voluptate dolore elit elit eu.</ol>
              <ol>Do anim aliqua enim anim Lorem exercitation adipisicing irure proident voluptate dolore elit elit eu.</ol>
              <ol>Do anim aliqua enim anim Lorem exercitation adipisicing irure proident voluptate dolore elit elit eu.</ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
