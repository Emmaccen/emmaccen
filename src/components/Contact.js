import React from 'react'
import Fade from 'react-reveal/Fade';
import { handleNotification } from './Notification'
import $ from 'jquery'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Contact extends React.Component {

    checkForErrors (name, email, subject, message) {
        if(name === "" || email === "" || subject === "" || message === ""){
            console.log(name, email, subject, message)
            return true;
        }else {
            console.log(name, email, subject, message)
            return false;
        }
    }

    sendMessage(e) {
        e.preventDefault()
        let fullName = $('#fullName').val()
        let email = $('#email').val()
        let subject = $('#subject').val()
        let message = $('#message').val()

        if(this.checkForErrors(fullName,email,subject,message)){
            // we've got blank fields... display Error-message
            handleNotification("Please Input All Fields")
        }else {
            // No blank fields so... Everyone is happy :)
            handleNotification('Processing Request...')
            const db = firebase.firestore();
            db.collection('clients').doc(new Date().toString()).set({
                customer : fullName,
                mail : email,
                messageSubject : subject,
                messageText : message,
                serverTimestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(function(){
                handleNotification('Message Sent Successfuly !');
                $('#fullName').val('')
                $('#email').val('')
                $('#subject').val('')
                $('#message').val('')
            })
            .catch(e => handleNotification("Something Went Wrong ! " + e))
            }
        
    }

    render () {
        return (
            <div id='contact' className='container contactWrapper'>
                <Fade bottom>
                <header className='centered'>
                    <h2 className='contactHeader'><span className='accent'>Contact </span>Me</h2>
                </header>
                </Fade>

                <div className='contactCards'>
                    
                    <div className='contactCard centered'>
                    <Fade bottom>
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
                    </Fade>
                    </div>

                    <div className='contactCard centered'>
                    <Fade bottom>
                        <a href='tel:+234-703-068-0817' className='contactDetails'>
                            <div className='centered'>
                                <div className='iconBg centered'>
                                    <span className='icon icon-phone'></span>
                                </div>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p className='contactLink'>+234-703-068-0817</p>
                            </div>
                        </a>
                    </Fade>
                    </div>

                    <div className='contactCard centered'>
                    <Fade bottom>
                        <a href='mailto:oriolaemmanuel199@mail.com' className='contactDetails'>
                            <div className='centered'>
                                <div className='iconBg centered'>
                                    <span className='icon icon-mail'></span>
                                </div>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p className='contactLink'>oriolaemmanuel199@gmail.com</p>
                            </div>
                        </a>
                    </Fade>
                    </div>

                </div>

                <div className='contactFormContainer'>
                    <Fade bottom>
                    <div>
                        {/* <h3>Get In <span className='accent'>Touch</span>
                        <span className='primary'>.</span></h3> */}
                        <form className='formGroup' onSubmit={(e)=> this.sendMessage(e)}>
                            <input required id='fullName'  type='text' placeholder='Full Name'></input>
                            <input required id='email'  type='email' placeholder='Email'></input>
                            <input required id='subject'  type='text' placeholder='Subject'></input>
                            <textarea required id='message'  placeholder='Message...'></textarea>
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className='centered'>
                        <div className='backgroundFix contactImg'></div>
                    </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Contact