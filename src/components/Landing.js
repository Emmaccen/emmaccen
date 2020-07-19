import React from 'react'
import NavBar from './NavBar'


class Landing extends React.Component {

    render () {

        return (
            <div className='homepageWrapper backgroundFix'>
                <NavBar />
                <div className='jumbotron'>
                    <div>
                        <p className='hello emphasise'>Hello !</p>
                        <p className='f-2'>I'm <span className='name emphasise'>Emmanuel Oriola.</span></p>
                        <p>A Freelance Web Developer. I Bring Your Ideas To Life.</p>
                    </div>
                    <div>
                            <button>PORTFOLIO</button>
                            <button>HIRE ME</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing