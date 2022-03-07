import pics from "../assets/images/project-banner.png"
import React from 'react'

const Work = () => {
  return (
    <section className="hero-work-section" id="work">
      <div className="is-work-wrapper">
        <div className="work-div">
          <div className="is-work-desc">
            <h2 className="hero-heading">Work</h2>
            <p>
              With every step in life there is different possibility so, a man should make a impact in this world. I like to stay busy and always develop my skill in any field i am intrested in. Take a look at some of the applications, companies I've dedicated my time and work to.
            </p>
          </div>
          <div className="is-projects">
            <div className="row project-timeline">
              <div className="col-md-6 is-proj-col">
                <div className="is-proj-tile">
                  <div className="proj-banner">
                    <img src={pics} alt="banner img"/>
                  </div>
                  <div className="proj-desc">
                    <h3 className="proj-heading">Project Name</h3>
                    <p className="proj-desc">
                      this is to describe the work of the project in time and work related but not too much.
                    </p>
                    <a href="#">view project</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 is-proj-col">
                <div className="is-proj-tile">
                  <div className="proj-banner">
                    <a href="#">
                      <img src={pics} alt="banner img"/>
                    </a>
                  </div>
                  <div className="proj-desc">
                    <h3 className="proj-heading">Project Name</h3>
                    <p className="proj-overview">
                      this is to describe the work of the project in time and work related but not too much.
                    </p>
                    <a href="#">view project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work