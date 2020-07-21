import React from 'react'

class Skills extends React.Component {


    render () {

        return (
            <div className='skillBg backgroundFix'>
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
                                <li>HTML - 95%</li>
                                <li>CSS - 73%</li>
                                <li>Bootstrap | JQuery - 55%</li>
                                <li>Figma (UI | UX) - 50%</li>
                            </ul>
                        </div>
                        <div className='skills'>
                            <span className='icon-code'></span>
                            <ul>
                                <li>JavaScript - 75%</li>
                                <li>React.Js - 73%</li>
                                <li>Angular - 58%</li>
                                <li>Java - 85%</li>
                            </ul>
                        </div>
                        <div className='skills'>
                            <span className='icon-database'></span>
                            <ul>
                                <li>Firebase - 65%</li>
                                <li>Node JS - 30%</li>
                                <li>Mongo DB - 0%</li>
                                <li>Express JS - 0%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Skills