import React, { useRef } from 'react'

export default function Cartridge({ gameboyOverlay, handleProject, project, gameRef }) {
    const cartridge = useRef(null)
    const label = project.acf ? project.acf.project_image_1.url : ''

    function handleClick() {
        cartridge.current.classList.add('cartridge-active')
        setTimeout(() => {
            cartridge.current.classList.remove('cartridge-active')
            gameboyOverlay.current.classList.add('active')
            gameRef.current.classList.add('zIndex')
            handleProject(project)
        }, 3000)
    }

    return (
        <>
            <section className="cartridge" onClick={handleClick} >
                <div className="case" ref={cartridge}>
                    <figure className="front">
                        <figure className="base tall"></figure>
                        <figure className="base wide"></figure>
                        <figure className="linebase"></figure>
                        <figure className="line one"></figure>
                        <figure className="line two"></figure>
                        <figure className="line three"></figure>
                        <figure className="line four"></figure>
                        <figure className="leftindent"></figure>
                        <figure className="rightindent"></figure>
                        <figure className="oval flex f-center f-vertical-center">{project.title.rendered}</figure>
                        <figure className="label" style={{ backgroundImage: `url(${label})` }}></figure>
                    </figure>

                    <figure className="back">
                        <figure className="base tall"></figure>
                        <figure className="base wide"></figure>
                        <figure className="line one"></figure>
                        <figure className="line two"></figure>
                        <figure className="line three"></figure>
                        <figure className="line four"></figure>
                    </figure>

                    <figure className="rightside">
                        <figure className="top"></figure>
                        <figure className="bottom"></figure>
                        <figure className="line one"></figure>
                        <figure className="ceiling one"></figure>
                        <figure className="floor one"></figure>
                        <figure className="line two"></figure>
                        <figure className="ceiling two"></figure>
                        <figure className="floor two"></figure>
                        <figure className="line three"></figure>
                        <figure className="ceiling three"></figure>
                        <figure className="floor three"></figure>
                        <figure className="line four"></figure>
                        <figure className="ceiling four"></figure>
                        <figure className="floor four"></figure>
                    </figure>

                    <figure className="leftside">
                        <figure className="bottom"></figure>
                        <figure className="line one"></figure>
                        <figure className="ceiling one"></figure>
                        <figure className="floor one"></figure>
                        <figure className="line two"></figure>
                        <figure className="ceiling two"></figure>
                        <figure className="floor two"></figure>
                        <figure className="line three"></figure>
                        <figure className="ceiling three"></figure>
                        <figure className="floor three"></figure>
                        <figure className="line four"></figure>
                        <figure className="ceiling four"></figure>
                        <figure className="floor four"></figure>
                    </figure>

                    <figure className="topside">
                        <figure className="left"></figure>
                        <figure className="right"></figure>
                    </figure>

                    <figure className="bottomside">
                        <figure className="side"></figure>
                    </figure>
                </div>
            </section>
        </>
    )
}
