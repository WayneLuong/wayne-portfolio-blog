import React from 'react'
import invaders from '../../assets/img/invaders.gif'

export default function NotFound() {
    return (
        <div id='Notfound' className=' flex f-center f-vertical-center'>
            <div className='flex f-dir-column f-vertical-center'>
                <h1>GAME OVER</h1>
                <img src={invaders} alt="invader" width='200' />
                <h1>404: PAGE NOT FOUND</h1>
            </div>
        </div>
    )
}
