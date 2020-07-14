import React, { useRef, useEffect, useState } from 'react'
import smokeVid from '../../assets/img/smoke.mp4'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../actions/projectActions'
import { WorksPageElm } from '../includes/Animations'
import { Link } from 'react-router-dom'
import { checkNav } from '../includes/Hooks'
import black from '../../assets/img/black.jpg'

import Catridge from '../snippets/Cartridge'
import ProjectContainer from '../snippets/ProjectContainer'

export default function Works({ navRef, homeLink }) {
    //Scrolling Ref
    const section1 = useRef(null);
    //GAMEBOY OVERLAY
    const gameboyOverlay = useRef(null);
    const gameRef = useRef(null);

    //Get Projects
    const dispatch = useDispatch()

    const projects = useSelector(state => state.projects)

    const [currentProjects, setCurrentProjects] = useState(projects)

    //Check if IOS
    var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    var hero
    if (!isIOS) {
        hero = <video autoPlay muted loop id="myVideo" preload="metadata" poster={black}>
            <source src={smokeVid} type="video/mp4" />
        </video>
    }

    useEffect(() => {
        checkNav(navRef)
        dispatch(getProjects())
    }, [dispatch])

    function handleClick() {
        gameboyOverlay.current.classList.remove('active')
        gameRef.current.classList.remove('zIndex')
    }
    const handleProject = (projectArg) => {
        setCurrentProjects(projectArg)
    }

    const scroll = (elRef) => {
        // Incase the ref supplied isn't ref.current
        const el = elRef.current ? elRef.current : elRef

        // Scroll the element into view
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <WorksPageElm>
            <div id='works'>
                <section className='hero'>
                    <div id="overlay"></div>
                    <div className='wrapping' style={{ color: '#fff' }}>
                        <h1>MY WORKS</h1>
                        {/* <img src={coin} alt="coin" className='coin bounce' /> */}
                        <div className='btn blinking' onClick={() => scroll(section1)}>
                            Press start
                        </div>
                    </div>
                    <div className='line' onClick={() => scroll(section1)}></div>
                    {hero}
                </section>
                <section className='about flex f-center f-vertical-center f-dir-column' ref={section1} >
                    <div id="table" ref={gameRef}>
                        <div id="centeralign">
                            <h1>THE COLLECTION</h1>
                            {projects.map((project) => (
                                <Catridge gameboyOverlay={gameboyOverlay} gameRef={gameRef} key={project.id} handleProject={handleProject} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className='services flex f-center f-vertical-center'>
                    <h1 style={{ padding: '0 010x' }}>ALL PROJECTS CAN BE VIEWED ON MY GITHUB</h1>

                </section>
                <section className='hero hero-footer'>
                    <div id="overlay"></div>
                    <div className='wrapping' style={{ color: '#fff' }}>
                        <h1 className='curious'>Curious?</h1>
                        <Link to={homeLink + 'about'}>
                            <div className='btn'>
                                get in touch
                        </div></Link>
                    </div>
                </section>
                <ProjectContainer handleClick={handleClick} gameboyOverlayRef={gameboyOverlay} currentProjects={currentProjects} />
            </div>

        </WorksPageElm>
    )
}
