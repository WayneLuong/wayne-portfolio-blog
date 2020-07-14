import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../../actions/blogActions'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import gear from '../../assets/img/gear.png'
import pika from '../../assets/img/pika.gif'
import { BlogsPageElm } from '../includes/Animations'
import { checkNav } from '../includes/Hooks'

import Blog from '../snippets/Blog'

export default function Blogs({ navRef, homeLink }) {
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const gearRef = useRef(null)
    const gearRef2 = useRef(null)
    const neon = useRef(null)

    useEffect(() => {
        checkNav(navRef)
    }, [])

    //Get Blogs
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBlogs())

        if (window.innerWidth < 500) {
            neon.current.style.textShadow =
                '0 0 10px #fff,0 0 10px #ff4da6,  0 0 20px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 40px #e60073'
            setActive(true)
            setActive2(false)
        }

        window.addEventListener('scroll', () => {
            const boundary1 = window.innerHeight / 10
            const boundary2 = (window.innerHeight / 10) * 5

            gearRef.current.style.transform = "rotate(" + window.pageYOffset + "deg)";
            gearRef2.current.style.transform = "rotate(-" + window.pageYOffset + "deg)";
            if (window.pageYOffset < boundary1 && window.innerWidth > 501) {
                neon.current.style.textShadow = '0 0 3px #fff'
                setActive(false)
                setActive2(false)
            } else if (window.pageYOffset > boundary1 && window.pageYOffset < boundary2 && window.innerWidth > 501) {
                neon.current.style.textShadow =
                    '0 0 10px #fff,0 0 10px #ff4da6,  0 0 20px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 40px #e60073'
                setActive(true)
                setActive2(true)
            } else if (window.pageYOffset > boundary2 && window.innerWidth > 501) {
                neon.current.style.textShadow =
                    '0 0 15px #fff, 0 0 20px #fff, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073, 0 0 80px #e60073'
                setActive(false)
                setActive2(true)
            }
        })
    }, [dispatch])

    const blogs = useSelector(state => state.blogs)

    return (
        <BlogsPageElm>
            <div id='blogs'>
                <Slide delay={1000} left>
                    <div className='blogs-wrapper'>
                        <div></div>
                        <div className='blog-wrapper'>
                            <h1 className='neon' ref={neon}>B<span className={active ? 'flicker' : ''}>l</span>ogs
                            <p>n stuff</p>
                            </h1>
                            <img className={active2 ? 'fadeIn' : ''} id='pika' src={pika} alt="pika" />
                        </div>
                    </div>
                </Slide>

                <img src={gear} alt="gear" className='gear1' ref={gearRef} />
                <img src={gear} alt="gear" className='gear2' ref={gearRef2} />
                <Fade>
                    <div className="timeline-wrap">
                        <ol className="timeline">
                            {blogs.map((blog, i) => (
                                <Blog key={blog.id} int={i} blog={blog} homeLink={homeLink} />
                            ))}
                        </ol>
                    </div>
                </Fade>
            </div>
        </BlogsPageElm>
    )
}
