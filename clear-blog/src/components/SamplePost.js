import React, { Component } from 'react';
import Header from './Header';

class SamplePost extends Component{
    render(){
        return(
            <div>
                <Header heading="Man must explore, and this is exploration at its greatest"
                subHeading="Posted by Start Bootstrap on August 24, 2018"/>
                {/* <h3>Problems look mighty small from 150 miles up</h3> */}
            </div>
        );
    }
}

export default SamplePost;