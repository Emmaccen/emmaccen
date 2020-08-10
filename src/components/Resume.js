import React from 'react'
import resume from '../data/resume'
import Fade from 'react-reveal/Fade';

function EducationTemplate (props) {
    return (
        <a href={props.link === '' ? null : props.link} rel='noopener noreferrer' 
        target='_blank' className='resumeCard'>
        <Fade bottom>
            <p className='resumeDate'>
                <span className={`icon ${props.icon}`}></span>
                {props.date}
            </p>
            <h2 className='resumeTitle'>{props.title}</h2>
            <p className='resumeDesc'>{props.desc}</p>
            <div className='flex-justify-sb'>
                <p><span className='icon icon-office'></span>{props.company}</p>
                <p><span className='icon icon-location'></span>{props.location}</p>
            </div>
        </Fade>
        </a>
    )
}
class Resume extends React.Component {

    constructor () {
        super()

        this.state = {}
    }

    filter (e,tab) {
        const activeTab = () => {
            const tab = document.getElementsByClassName('resumeSelector')
            for(let i = 0; i < tab.length; i ++){
                tab[i].classList.remove('currentTab')
            }
            e.target.classList.add('currentTab')
        }
            const current = this.state.resume.filter(items => {
                 return items.type === tab
             })
            /* 
                Capitalize the first letter of the current tab tag 
                NOTE : the js line that capitalizes the first letter can easily 
                be achieved using CSS, but... i love the look of destructuring(...) so :) 
            */
             const [,...modified] = tab
             const capitalize = tab[0].toUpperCase().concat(...modified)

             this.setState({
                 current,
                 activeTab : capitalize
             })
             activeTab()
    }
    componentWillMount () {
        const defaultResume = resume.filter(resume => {
            return resume.type === 'experience'
        })
        this.setState({
            resume,
            current : defaultResume,
            activeTab : 'Experience'
        })
    }
    render () {

        const edu = this.state.current.map(details => {
            return <EducationTemplate 
                date = {details.date}
                title = {details.title}
                desc = {details.desc}
                company = {details.company}
                location = {details.location}
                icon = {details.icon}
                link = {details.link}
            />
        })

        return (
            <div id='resume'>
                <Fade bottom>
                <div className='resumeHeader'>
                    <header className='centered'>
                        <h1>My <span className='accent'>Resume</span>
                        <span className='primary'>.</span></h1>
                    </header>
                </div>
                <div className='resumeTabs'>
                    <span className='icon icon-graduation-cap'><label onClick={e => this.filter(e,'education')} 
                    className='resumeSelector resumeTab'>Education</label>
                    </span>
                    <span className='icon icon-stack'> <label onClick={e => this.filter(e,'experience')} 
                    className='resumeSelector currentTab resumeTab'>Experience</label>
                    </span>
                    <span className='icon icon-medal'><label onClick={e => this.filter(e,'achievement')} 
                    className='resumeSelector resumeTab'>Achievement</label>
                    </span>
                </div>
                <div className='resumeCardWrapper container'>
                    <h2>{this.state.activeTab}</h2>
                    <div className='resumeContainer'>
                        {edu}
                    </div>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Resume