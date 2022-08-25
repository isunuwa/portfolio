import React from 'react'

const Intro = () => {
  return (
    // section for hero intro
    <section aria-labelledby='native-greetings' className="introSectionComponent">
      <div className="is-intro-wrapper">
        <div className='is-intro__text'>
          <h1 id='native-greetings'>Nam-sewal</h1>
          <span>(Namaste)</span>
        </div>

        <div className='is-intro__desc'>
          <p>
            I'm Israel Sunuwar, Frontend Developer.
          </p>
          <p>
            I design ethical, accessible websites for brands using tech for good.
          </p>
          <p className='alert-msg'> WIP </p>

          <div className='is-intro__mail'>
            <a href="mailto:israelsunuwar@gmail.com" className="button in-btn-lg w-button">israelsunuwar@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro