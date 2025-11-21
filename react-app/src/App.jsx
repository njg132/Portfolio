import { useState } from 'react'
import coolImg from './cool.png'
import './styles.css'


// function img(){
//   const backImg = 'url(./cool.png)';
// }

function WavyText({ text }) {
    return (
        <h1 className="wave-text">
            {text.split('').map((char, index) => (
                <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
        </h1>
    );
}

function App() {


  return (
    <div className="App" style={{ 
      backgroundImage: `url(${coolImg})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh' 
    }}>


        <header id="wavy-text" class="wavetext"style={{
          backgroundImage: `url(${coolImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '20px'
        }}>
        <WavyText text="Welcome to my Website" />
        </header>


        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#blah">Contact</a></li>
                <li><a href="Maze.html">Maze Game</a></li>

            </ul>
        </nav>

        <main>
            <section id="about">
                <h2>About Me</h2>
                <p id="pAbout">
                    Hello! I am Nicholas Gambino.
                    I am a junior at Rutgers University.
                    I major in Computer Sceince with a minor in music technology.
                    I have a passion for frontend development and I love music.
                    I am in the Rutgers University Marching Scarlet Knights,
                    part of the Rutgers University Cyber Security Club and RUBlueprints Software Engineer Fellowship: Fronted Development.
                    I love the band Incubus and I love snowboarding with my friends when the weather permits.
                    Contact me with any questions and checkout my projects and Linkedin.
                </p>

            </section>

            <section id="Projects">
                <h2>Projects</h2>


            </section>

        </main>


    </div>
  )
}

export default App
