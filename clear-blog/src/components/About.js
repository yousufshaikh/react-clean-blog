import React, { Component } from 'react';
import Header from './Header';

class About extends Component{
    render(){
        return(
            <div>
                <Header heading="About" subHeading="This is what I do."/>
            </div>
        );
    }
}

export default About;