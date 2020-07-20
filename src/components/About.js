import React from 'react'


class About extends React.Component {

    render () {

        return (
            <div className='aboutMeWrapper'>
                <video src='/vids/aboutShowcase.mp4' autoPlay='true' loop='true'>

                </video>
                <div className='aboutMeDesc'>
                    <header>
                        <h1>About <span className='accent'>Me</span>
                        <span className='primary'>.</span></h1>
                    </header>
                    <div>
                        <p className='descText'>
                            I'm a seasoned <span className='primary'>Front-End</span> developer with a strong sense 
                            for aesthetics and interaction. Currently walking-up the <span className='primary'>Full-Stack</span> echo system.
                        </p>
                        <p className='descText'>
                            I have <span className='primary'>{new Date().getFullYear() - 2018}+ Years</span> of experience building <span className='primary'>Stable</span> and 
                            <span className='primary'> Maintainable</span> websites in fast-paced, collaborative environments. 
                            Proficient and fast at <span className='primary'>Creating</span> | <span className='primary'>Converting </span>
                            user interfaces, adaptive at working with a <span className='primary'>Team </span>
                            and versed in <span className='primary'>Scrum</span> & <span className='primary'>Agile</span>.
                        </p>
                    </div>
                    <div>
                        <button>Download CV</button>
                        <button>View Resume</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About