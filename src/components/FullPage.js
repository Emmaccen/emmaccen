import React from 'react'
import Landing from './Landing'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'

class FullPage extends React.Component {

    render () {

        return (
            <div>
                <Landing />
                <About />
                <Skills />
                <Portfolio />
            </div>
        )
    }
}

export default FullPage