import React, { useState } from 'react'
import { useEffectOnce } from '../includes/Hooks'
import laserSound from '../../assets/sounds/laserSound.wav'
import laserSound2 from '../../assets/sounds/laserSound2.wav'

export default function Controller({ navRef, sideBarRef, laserRef, laserRef2 }) {
    const [score, setScore] = useState(0)
    const [audio] = useState(new Audio(laserSound));
    const [audio2] = useState(new Audio(laserSound2));
    const [playing, setPlaying] = useState(true);

    //const toggle = () => setPlaying(!playing);

    useEffectOnce(() => {
        if (localStorage.getItem != undefined) {
            const raw = localStorage.getItem('data')
            setScore(score => score + (JSON.parse(raw)))
        }
    }, [])

    const handleMenuClick = () => {
        navRef.current.classList.toggle('menu-active')
        setScore(score => score + 100)
        localStorage.setItem('data', JSON.stringify(score + 100))
        if (laserRef.current) {
            laserRef.current.classList.remove('none')
            setTimeout(() => {
                laserRef.current.classList.add('none')
            }, 400)
            playing ? audio.play() : audio.pause();
        }
    }
    const handleSideBarClick = () => {
        sideBarRef.current.classList.toggle('side-bar-active')
        setScore(score => score + 500)
        localStorage.setItem('data', JSON.stringify(score + 500))
        if (laserRef2.current) {
            laserRef2.current.classList.remove('none')
            setTimeout(() => {
                laserRef2.current.classList.add('none')
            }, 400)
            playing ? audio2.play() : audio2.pause();
        }
    }

    return (
        <div className='controller'>
            {/* <button className="push--flat"></button> */}
            <div className='black-bar'>
                <div>1UP</div>
                <div>HI-SCORE: {score}</div>
            </div>
            <div className='button1'>
                <button className="push--skeuo noSelect" onClick={handleMenuClick}>A</button>
            </div>
            <div className='button2'>
                <button className="push--skeuo blue noSelect" onClick={handleSideBarClick}>B</button>
            </div>
        </div>
    )
}


