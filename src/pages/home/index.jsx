
import "./style.scss"

const Home = () =>{
  return(
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>Hello, I am Ellie.
          <br/>
          A Full Stack Developer
        </h1>
        <div className="contact-wrapper">
          <div className="contact-wrapper-button">
            <button>Hire Me</button>
            <button>Download Resume</button>
          </div>
          <div className="social-wrapper">
            <div className="social-wrapper-button">
              <button>Linkedin</button>
              <button>GitHub</button>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Home