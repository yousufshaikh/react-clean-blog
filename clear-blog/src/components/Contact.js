import React, {Component} from 'react';
import Header from './Header';
import ContactFormMain from './ContactFormMain';

class Contact extends Component{
    render(){
        return(
            <div>
                <Header heading="Contact Me" subHeading="Have questions? I have answers."/>
                <ContactFormMain/>
            </div>
        );
    }
}

export default Contact;