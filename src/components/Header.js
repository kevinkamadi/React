import React from 'react'

function Header({navItems}) {

    const navItemsArray = navItems.map(item => {
        return <a key={item.href} href={item.href} className='nav-item'>{item.header}</a>
    })

    return (
        <div id='header'>
            <h1>Bank App</h1>
            <nav>
                {navItemsArray}
            </nav>
        </div>
    )
}

export default Header