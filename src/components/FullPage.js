import React from 'react'
import Landing from './Landing'
import About from './About'

class FullPage extends React.Component {

    render () {

        return (
            <div>
                <Landing />
                <About />
            </div>
        )
    }
}

export default FullPage