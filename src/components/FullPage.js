import React from 'react'
import Landing from './Landing'
import About from './About'
import Skills from './Skills'

class FullPage extends React.Component {

    render () {

        return (
            <div>
                <Landing />
                <About />
                <Skills />
            </div>
        )
    }
}

export default FullPage