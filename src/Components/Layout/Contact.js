import React, { useEffect } from 'react'
import { ContactPageElm } from '../includes/Animations'
import { checkNav } from '../includes/Hooks'

export default function Contact({ navRef }) {

    useEffect(() => {
        checkNav(navRef)
    }, [])

    return (
        <ContactPageElm>
            <div>
                contact
            <div>
                    GET in touch wcluong93@gmail.com
                    alterntively on other platforms:
            </div>
            </div>
        </ContactPageElm>
    )
}
