import React, { useEffect } from 'react'
import smoke2 from '../../assets/img/smoke2.png'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import pixel from '../../assets/img/pixel.png'
import unpixel from '../../assets/img/unpixel.png'
import shopify from '../../assets/img/shopify.png'
import www from '../../assets/img/www.png'
import ecommerce from '../../assets/img/ecommerce.png'
import smokeVid from '../../assets/img/smoke2.mp4'
import { AboutPageElm } from '../includes/Animations'
import Typed from 'react-typed';
import { checkNav } from '../includes/Hooks'

export default function About({ navRef }) {

    var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    var hero
    if (isIOS) {
        hero = <img src={smoke2} style={{ height: '100%' }} />
    } else {
        hero = <video autoPlay muted loop id="myVideo" poster={smoke2} preload='metadata'>
            <source src={smokeVid} type="video/mp4" />
        </video>
    }

    useEffect(() => {
        checkNav(navRef)
    }, [])

    //Type.js
    var options = {
        strings: ['Hello!', '你好', 'Bonjour', 'Hola', '안녕하세요', 'Ciao', 'こんにちは', 'Guten Tag',
            'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'Still reading? 🤓', '(ᵔᴥᵔ)'],
        typeSpeed: 80,
        loop: true,
        backSpeed: 100
    };
    var aboutOptions = {
        strings: ['Hello there!', `A UK-based Web Developer specialising in Front-End and E-commerce solutions. 
        <br>
        I'm a naturally optimistic, glass-half-full kind of person who is into fitness &amp; tech (particularly retro games), currently pursuing my passion in technology; primarily developing E-commerce &amp; web apps.`],
        typeSpeed: 40,
        backSpeed: 100,
    };
    return (
        <AboutPageElm>

            <div id='about'>
                <section className='hero'>
                    <div id="overlay"></div>
                    <div className='wrapping'></div>
                    {hero}
                </section>
                <section className='about'>
                    <div className='wrapper'>
                        <div className='typing'>
                            <Typed
                                strings={options.strings}
                                typeSpeed={options.typeSpeed}
                                backSpeed={options.backSpeed}
                                loop>
                            </Typed>
                        </div>
                        <div className='about-wrapper'>
                            <sub>ABOUT ME</sub>
                            <div className='flex about-inner-wrapper'>
                                <Slide left >
                                    <div className='flex f-dir-column f-center f-vertical-center'>
                                        <div className='img-wrapper'>
                                            <img className='pixelated' src={pixel} alt="portrait" />
                                            <img className='noPixelated ' src={unpixel} alt="portrait" />
                                        </div>
                                        <div className='name'>Wayne</div>
                                    </div>
                                </Slide>
                                <Fade delay={1000}>
                                    <div className='skills'>
                                        <div className='healthBar flex f-vertical-center'>
                                            <div className='text'>HP: </div><div className='bar flex f-center f-vertical-center'>248/248</div>
                                        </div>
                                        <div className='manaBar flex f-vertical-center'>
                                            <div className='text'>MP: </div><div className='bar flex f-center f-vertical-center'>88/88</div>
                                        </div>
                                        <div className='inner-skills flex'>
                                            <div className='flex-1' style={{ paddingBottom: '10px' }}>
                                                <h3>Skills</h3>
                                                <ul>
                                                    <li>HTML5</li>
                                                    <li>SASS (SCSS)</li>
                                                    <li>JavaScript</li>
                                                    <li>React, Redux</li>
                                                    <li>Node, Express</li>
                                                    <li>MySQL</li>
                                                    <li>Liquid (Shopify)</li>
                                                    <li>GIT</li>
                                                </ul>
                                            </div>
                                            <div className='flex-1'>
                                                <h3>Class</h3>
                                                <p>
                                                    1:1 in BSc Computer Science
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                            <Fade delay={1500}>
                                <div className='intro'>
                                    <Typed
                                        strings={aboutOptions.strings}
                                        typeSpeed={aboutOptions.typeSpeed}
                                        backSpeed={aboutOptions.backSpeed}
                                        loop={false}
                                        cursorChar='_'
                                        fadeOut={true}
                                        fadeOutClass='typed-fade-out'
                                        fadeOutDelay={500}
                                        startDelay={2500}>
                                    </Typed>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                <section className='services'>
                    <div className="container">
                        <sub>SERVICES</sub>
                        <div className='flex' style={{ paddingTop: '20px' }}>
                            <Fade delay={500} >
                                <div className='width-100'>
                                    <div>
                                        I'm currently working full time, but I am open to taking on freelance projects; whether you are launching your next online business or simply looking to have an online presence!
                                    </div>
                                    <div className='flex f-center f-space-evenly' style={{ padding: '20px' }}>
                                        <div className='flex f-dir-column f-center f-vertical-center'>
                                            <img src={ecommerce} alt="ecommerce" />
                                            {/* E-commerce */}
                                        </div>
                                        <div className='flex f-dir-column f-center f-vertical-center'>
                                            <img src={www} alt="website" style={{ width: '70px' }} />
                                            {/* WEBSITE BUILD */}
                                        </div>
                                        <div className='flex f-dir-column f-center f-vertical-center'>
                                            <img src={shopify} alt="shopify" style={{ width: '119px' }} />
                                        </div>
                                    </div>
                                    <div>
                                        If you're interested in collaborating together, or just wanted to say hello - feel free to email me:
                                        <a href="mailto:hello@wayneluong.com" target="_blank" ><p className='email'>hello@wayneluong.com</p></a>
                                        Alternatively you can reach me on several other platforms in the menu.
                                        {/* <Link to={homeLink + 'contact'}> <span style={{ textDecoration: 'underline', color: '#000', fontWeight: 'bold' }}>here</span></Link> */}
                                    </div>
                                </div>
                            </Fade>
                            <Slide right>
                                {/*  <img src={gear} alt="gear" style={{ width: '200px', height: '200px' }} /> */}
                            </Slide>
                        </div>
                    </div>
                </section>
            </div>
        </AboutPageElm >
    )
}
