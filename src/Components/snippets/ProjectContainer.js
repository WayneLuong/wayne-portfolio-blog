import React, { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProjectContainer({ handleClick, gameboyOverlayRef, currentProjects }) {
    const power = useRef(null)
    const [title, setTitle] = useState(currentProjects.acf ? currentProjects.acf.project_title : 'Loading...')
    const [url, setURL] = useState(currentProjects.acf ? currentProjects.acf.url : undefined)
    const [image2, setImage2] = useState(currentProjects.acf ? currentProjects.acf.project_image_2.url : 'Loading...')
    const [content2, setContent2] = useState(currentProjects.acf ? currentProjects.acf.content_2 : 'Loading...')
    const [image3, setImage3] = useState(currentProjects.acf ? currentProjects.acf.project_image_3.url : 'Loading...')
    const [content3, setContent3] = useState(currentProjects.acf ? currentProjects.acf.content_3 : 'Loading...')
    /* const [image4, setImage4] = useState(currentProjects.acf ? currentProjects.acf.project_image_4.url : 'Loading...')
    const [content4, setContent4] = useState(currentProjects.acf ? currentProjects.acf.content_4 : 'Loading...') */

    useEffect(() => {
        console.log(currentProjects.acf)
        setTitle(currentProjects.title ? currentProjects.title.rendered : 'Loading...')
        setURL(currentProjects.acf ? currentProjects.acf.url : undefined)
        setImage2(currentProjects.acf ? currentProjects.acf.project_image_2.url : 'Loading...')
        setContent2(currentProjects.acf ? currentProjects.acf.content_2 : 'Loading...')
        setImage3(currentProjects.acf ? currentProjects.acf.project_image_3.url : 'Loading...')
        setContent3(currentProjects.acf ? currentProjects.acf.content_3 : 'Loading...')
        /* setImage4(currentProjects.acf ? currentProjects.acf.project_image_4.url : 'Loading...')
        setContent4(currentProjects.acf ? currentProjects.acf.content_4 : 'Loading...') */
        power.current.classList.add('power-off')
        setTimeout(() => {
            power.current.classList.remove('power-off')
        }, 4000);
    })

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='gameboy-overlay f-center f-vertical-center' ref={gameboyOverlayRef}>
            <div className='gameboy-container flex f-center f-vertical-center'>
                <div className='close-container' onClick={handleClick}>X</div>
                <div>
                    <div className='power power-off' ref={power}></div>

                    <div id="power_text">POWER</div>

                    <div className="power-moon"></div>
                    <div className="power-moon one"></div>
                    <div className="power-moon two"></div>
                </div>
                <div className='gameboy-content'>
                    <h1>{title}</h1>
                    <Slider {...settings} className='slick'>
                        {image2 ?
                            <div className='slide_wrap flex f-dir-column f-center f-vertical-center'>
                                <img src={image2} alt="" />
                                {content2 ?
                                    <div className='project-content'>
                                        {content2}
                                        {url ? <a className='site-link' href={url.url} target='_blank'>{url.title}</a> : null}
                                    </div> : null}
                            </div>
                            : null}
                        {image3 ?
                            <div className='slide_wrap flex f-dir-column f-center f-vertical-center'>
                                <img src={image3} alt="" />
                                {content3 ? <div className='project-content '>{content3}</div> : null}
                            </div>
                            : null}
                        {/* {image4 ?
                            <div className='slide_wrap flex f-dir-column f-center f-vertical-center'>
                                <img src={image4} alt="" />
                                {content4 ? <div className='project-content '>{content4}</div> : null}
                            </div>
                            : null} */}
                    </Slider>

                </div>
            </div>
        </div>
    )
}
