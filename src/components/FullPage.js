import React from 'react'
import Landing from './Landing'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Services from './Services'
import Blogs from './Blogs'
import Resume from './Resume'

class FullPage extends React.Component {

    render () {

        return (
            <div>
                <Landing />
                <About />
                <Skills />
                <Portfolio />
                <Services />
                <Blogs />
                <Resume />
            </div>
        )
    }
}

export default FullPage