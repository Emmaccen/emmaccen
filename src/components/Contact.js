import React from 'react'


class Contact extends React.Component {


    render () {
        return (
            <div className='container contactWrapper'>
                <header className='centered'>
                    <h2 className='contactHeader'>Wanna <span className='accent'>Start Work</span> With Me ?</h2>
                </header>

                <div className='contactCards'>

                    <div className='contactCard'>
                        <div className='contactDetails'>
                            <div className='centered'>
                                <div className='iconBg centered'>
                                    <span className='icon icon-home'></span>
                                </div>
                            </div>
                            <div>
                                <h3>My Address</h3>
                                <p>
                                    Galzaxy 139GXT, React Planet, Props Zone, Redux.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='contactCard'>
                        <a href='tel:+234-703-068-0817' className='contactDetails'>
                            <div className='centered'>
                                <div className='iconBg centered'>
                                    <span className='icon icon-phone'></span>
                                </div>
                            </div>
                            <div>
                                <h3>My Phone</h3>
                                <p className='contactLink'>+234-703-068-0817</p>
                            </div>
                        </a>
                    </div>

                    <div className='contactCard'>
                        <a href='mailto:oriolaemmanuel199@mail.com' className='contactDetails'>
                            <div className='centered'>
                                <div className='iconBg centered'>
                                    <span className='icon icon-mail'></span>
                                </div>
                            </div>
                            <div>
                                <h3>My Address</h3>
                                <p className='contactLink'>oriolaemmanuel199@gmail.com</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className='contactFormContainer'>
                    <div>
                        <h3>Get In <span className='accent'>Touch</span>
                        <span className='primary'>.</span></h3>
                        <form className='formGroup'>
                            <input required type='text' placeholder='Full Name'></input>
                            <input required type='email' placeholder='Email'></input>
                            <input required type='text' placeholder='Subject'></input>
                            <textarea required placeholder='Message...'></textarea>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                    <div className='centered'>
                        <div className='backgroundFix contactImg'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact