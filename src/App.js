import React, { useRef } from "react";
import "./App.scss";

import Header from './Components/Layout/Header'
import Controller from './Components/Layout/Controller'
import Sidebar from './Components/snippets/Sidebar'

export const homeLink = '/wp_dev/'

const App = () => {

    const laserRef = useRef(null)
    const laserRef2 = useRef(null)
    const navRef = useRef(null)
    const sideBarRef = useRef(null)

    return (
        <div className="App">
            <Controller navRef={navRef} sideBarRef={sideBarRef} laserRef={laserRef} laserRef2={laserRef2} />
            <Header navRef={navRef} homeLink={homeLink} laserRef={laserRef} laserRef2={laserRef2} />
            <Sidebar sideBarRef={sideBarRef} />
        </div>
    );
}

export default App;

