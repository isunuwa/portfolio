import React from 'react'

const Intro = () => {
  return (
    // section for hero intro
    <section className="hero-intro-section">
      <div className="is-intro-wrapper">
        <div className="is-intro-div">
          <div className="is-intro-greet">
            <h1>
              I'm <span className="is-active" data-text="Israel">Israel</span>, welcome to my portfolio. Currently WIP.
            </h1>
          </div>
          <div className="is-intro-description">
            <p>Frontend Developer @ <a className="is-work-at" href="https://inctic.io" target="_blank">Inctic Labs</a> • Nepal • Kathmandu</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro