import React from 'react'

class Services extends React.Component {

    render () {
        return (
            <div id='services' className='backgroundFix centered servicesContainer'>
                <div className='servicesContent'>
                    <header className='centered'>
                        <h1>My <span className='accent'>Services</span>
                        <span className='primary'>.</span></h1>
                    </header>
                    <div className='services'>
                        <div className='centered'>
                            <div className='serviceContent'>
                                <span className='icon icon-network'></span>
                                <h1 className='serviceTitle'>Web Design</h1>                    
                                <p>
                                Development of fully responsive and interactive web pages using tools within the confines of my practice.
                                </p>
                            </div>
                        </div>
                        <div className='centered'>
                            <div className='serviceContent'>
                                <span className='icon icon-round-brush'></span>
                                <h1 className='serviceTitle'>UI | UX</h1>                    
                                <p>
                                User Interface designs done in Figma or AdobeXD as required or desired
                                </p>
                            </div>
                        </div>
                        <div className='centered'>
                            <div className='serviceContent'>
                                <span className='icon icon-database'></span>
                                <h1 className='serviceTitle'>Database</h1>                    
                                <p>
                                Creation and management of database in Firebase or MongoDB, Express.Js and Node.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services