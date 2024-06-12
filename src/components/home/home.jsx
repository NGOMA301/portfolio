import React from 'react'
import benpic from '../home/BenPic.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Home() {
  const [text] = useTypewriter({
    words: ["Web Designer", "Web Developer", "Graphic Designer", "Photographer", "Music Director", "Video Editor"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 20,
  });
  return (
    <div className='main-content'>
      <section className='home section' id='section'>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">Hello, my name is <span class="name">Ngoma Benjamin</span></h3>
              <h3 className="my-profession">I`m a <span class="typing">{text}</span><Cursor cursorStyle='$' /> </h3>
              <p>Hello I`m  experienced web developer specializing in front-end and back-end technologies. Passionate about crafting user-friendly websites with clean, efficient code.</p>
            </div>
            <div className="home-img padd-15">
              <img src={benpic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>


  )
}

export default Home