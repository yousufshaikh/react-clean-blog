import React, { Component } from 'react';
import Header from './Header';
import AboutDes from './AboutDes';

class About extends Component{
    render(){
        return(
            <div>
                <Header heading="About" subHeading="This is what I do."/>
                <AboutDes/>
            </div>
        );
    }
}

export default About;