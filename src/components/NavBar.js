import React from 'react'
/*Smooth scroll to a view when a nav link is selected and is on that same page*/
function scrollToView(element){
    document.getElementById(element).scrollIntoView({
    behavior: 'smooth'
  });
  }

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
                            <li onClick={()=> scrollToView('home')}>Home</li>
                            <li onClick={()=> scrollToView('about')}>About</li>
                            <li onClick={()=> scrollToView('portfolio')}>Portfolio</li>
                            <li onClick={()=> scrollToView('services')}>Services</li>
                            <li onClick={()=> scrollToView('resume')}>Resume</li>
                            <li onClick={()=> scrollToView('blogs')}>Blogs</li>
                            <li onClick={()=> scrollToView('contact')}>Contact</li>
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}

export { NavBar }
export { scrollToView }