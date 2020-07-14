
import { useRef, useEffect } from 'react'

export function checkNav(navRef) {
    let navArr = navRef.current.querySelectorAll('li a')
    navArr.forEach(item => {
        let string = window.location.pathname
        if (string.includes(item.innerHTML.toLowerCase())) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}

//Custom hook
export function useEffectOnce(callback) {
    //useRef: contains a mutable object
    const didRun = useRef(false)
    useEffect(() => {
        if (!didRun.current) {
            callback();
            didRun.current = true
        }
    })
}