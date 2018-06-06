import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactFormMain extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <ContactForm/>
                </div>
            </div>
        );
    }
}

export default ContactFormMain;