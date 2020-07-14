import React, { useRef } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PageContainer } from '../includes/Animations'

import Home from './Home'
import About from './About'
import Blogs from './Blogs'
import Works from './Works'
/* import Contact from './Contact' */
import NotFound from './NotFound'
import Article from '../snippets/BlogArticle'

const Header = ({ navRef, homeLink, laserRef, laserRef2 }) => {
    const home = useRef(null)
    const about = useRef(null)
    const works = useRef(null)
    const blog = useRef(null)
    //const contact = useRef(null)
    const navArr = [about, works, blog]

    const setActive = (e) => {
        let el = e.target
        navArr.forEach(link => {
            link.current.classList.remove('active')
            if (link.current.getAttribute('href') == el.getAttribute('href')) {
                link.current.classList.add('active')
            } else {
                link.current.classList.remove('active')
            }
        })
        navRef.current.classList.toggle('menu-active')
    }

    return (
        <Router>
            <div className="overlay-navigation">
                <nav ref={navRef} >
                    <ul className='flex'>
                        <li className='initials'>
                            <Link to={homeLink} data-content="The beginning" ref={home} onClick={(e) => setActive(e)}>W<span>L</span></Link>
                        </li>
                        <li>
                            <Link to={homeLink + 'about'} data-content="Curious?" ref={about} onClick={(e) => setActive(e)}>About</Link>
                        </li>
                        <li>
                            <Link to={homeLink + 'works'} data-content="Only the finest" ref={works} onClick={(e) => setActive(e)}>Works</Link>
                        </li>
                        <li>
                            <Link to={homeLink + 'blogs'} data-content="Curious?" ref={blog} onClick={(e) => setActive(e)}>Blog</Link>
                        </li>
                    </ul>

                    <div className="open-overlay">
                        <span className="bar-top"></span>
                        <span className="bar-middle"></span>
                        <span className="bar-bottom"></span>
                    </div>
                </nav>
            </div>
            <Route
                render={({ location }) => {
                    return (
                        <PageContainer>
                            <TransitionGroup component={null}>
                                <CSSTransition
                                    timeout={300}
                                    classNames="page"
                                    key={location.key}
                                >
                                    <Switch location={location}>
                                        <Route exact path={homeLink} >
                                            <Home laserRef={laserRef} laserRef2={laserRef2} />
                                        </Route>
                                        {/* Specify exact url or user detail will be shown instead */}
                                        <Route exact path={homeLink + 'about'}>
                                            <About navRef={navRef} homeLink={homeLink} />
                                        </Route>
                                        <Route exact path={homeLink + 'works'}>
                                            <Works navRef={navRef} homeLink={homeLink} />
                                        </Route>
                                        <Route exact path={homeLink + 'blogs'}>
                                            <Blogs navRef={navRef} homeLink={homeLink} />
                                        </Route>
                                        <Route exact path={homeLink + 'blogs/:id'}>
                                            <Article homeLink={homeLink} />
                                        </Route>
                                        <Route path="*">
                                            <NotFound />
                                        </Route>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </PageContainer>
                    );
                }}
            />
        </Router >
    )
}

export default Header