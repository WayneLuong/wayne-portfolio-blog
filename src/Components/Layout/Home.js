import React, { useEffect, useRef } from 'react'
import Particles from 'react-particles-js'
import ParticleSettings from '../includes/Particles'
import Fade from 'react-reveal/Fade';
import { HomePageElm } from '../includes/Animations'
import ghost from '../../assets/img/blueghost.png'
import pacman from '../../assets/img/pacman.png'

export default function Home({ laserRef, laserRef2 }) {
    const bg = useRef(null)
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    useEffect(() => {
        bg.current.addEventListener('mouseover', (e) => {
            const windowWidth = window.innerWidth / 200;
            const windowHeight = window.innerHeight / 200;
            const mouseX = e.clientX / windowWidth;
            const mouseY = e.clientY / windowHeight;
            bg.current.style.transform = `translate3d(-${mouseX}px, -${mouseY}px,0)`
        })
    }, [])

    return (
        <HomePageElm>
            <div className='wrapper' >
                <div id="particles-js" ref={bg}>
                    {isSafari ? null : <Particles params={ParticleSettings} />}
                </div>
                <div id='home' className='abs-center'>
                    <Fade><h1 className='header'>Wayne <span>Lu<div className='pacman-wrap'><img src={pacman} alt="" /></div>ng</span></h1></Fade>
                    <Fade delay={500}><h2 className='sub-header'>&lt;<span>Web Devel<div className='ghost-wrap'><img src={ghost} alt="" /></div>per</span>/&gt;</h2></Fade>
                    <div className='slogan flex f-center f-vertical-center'>
                        <Fade delay={1500}><span style={{ color: '#E13C38' }}>Design</span></Fade>
                        <Fade delay={1500}><span className='divider'>.</span></Fade>
                        <Fade delay={2500}><span style={{ color: '#E99447' }}> Develop</span></Fade>
                        <Fade delay={1500}><span className='divider'>.</span></Fade>
                        <Fade delay={3500}> <span style={{ color: '#67C1BB' }}> Inspire</span></Fade>
                    </div>
                    <div className="laser-beam none" ref={laserRef} ></div>
                    <div className="laser-beam red none" ref={laserRef2} ></div>

                </div>
            </div>
        </HomePageElm>
    )
}

