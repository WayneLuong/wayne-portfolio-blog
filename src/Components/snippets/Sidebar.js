import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Sidebar({ sideBarRef }) {

    return (
        <div className='icons-wrapper' ref={sideBarRef}>
            {/* <a href="https://www.linkedin.com/in/wayne-luong-093/" target="_blank" >
                <Fade delay={1500}><i className="fab fa-linkedin-in"></i></Fade>
            </a> */}
            {/* <a href="https://www.instagram.com/wayne.luong/" target="_blank" >
                <Fade delay={1500}><i className="fab fa-instagram"></i></Fade>
            </a> */}
            <a href="https://github.com/WayneLuong" target="_blank" >
                <Fade delay={1500}><i className="fab fa-github"></i></Fade>
            </a>
            <a href="mailto:hello@wayneluong.com" target="_blank" >
                <Fade delay={1500}><i className="fas fa-envelope"></i></Fade>
            </a>
        </div>
    )
}
