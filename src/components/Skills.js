import React from 'react'

class Skills extends React.Component {


    render () {

        return (
            <div id='skills' className='skillBg backgroundFix'>
                <div className='skillsWrapper container'>
                    <header className='centered'>
                        <div>
                            <h1>My <span className='accent'>Skills</span>
                                <span className='primary'>.</span>
                                
                            </h1>
                            <p className='descText'>Here's a list of the tools, languages and frameworks I use for development. Constantly 
                            learning new things, improving and staying up-to-date.</p>
                        </div>
                    </header>
                    <div className='skillsContainer'>
                        <div className='skills'>
                            <span className='icon-colours'></span>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap | JQuery</li>
                                <li>Figma (UI | UX)</li>
                            </ul>
                        </div>
                        <div className='skills'>
                            <span className='icon-code'></span>
                            <ul>
                                <li>JavaScript</li>
                                <li>React.Js</li>
                                <li>Angular</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className='skills'>
                            <span className='icon-database'></span>
                            <ul>
                                <li>Firebase</li>
                                <li>Node JS</li>
                                <li>Mongo DB</li>
                                <li>Express JS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Skills