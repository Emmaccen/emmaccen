import React from 'react'


class NavBar extends React.Component {


    render () {

        return (
            <nav className='navWrapper'>

                <div className='menuWrapper'>
                    <div className='logo'>
                        <img src='/images/logo.svg' alt='logo'></img>
                        <span className='icon openNav'>Menu Icon</span>
                    </div>
                    <div className='menuLinks'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Services</li>
                            <li>Resume</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}

export default NavBar