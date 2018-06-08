import React, {Component} from 'react';
import './Home.css'
import Header from './Header';
import HomeLink from './HomeLinks';
import OlderPostBtn from './OlderPostBtn';


class Home extends Component{
    render(){
        return(
            <div>
                <Header heading="Clean Blog" subHeading="A Blog Theme by Start Bootstrap"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <HomeLink 
                                linkHeading="Man must explore, and this is exploration at its greatest"
                                linkPostDate="Posted by Start Bootstrap on September 24, 2018">
                                <h3>Problems look mighty small from 150 miles up</h3>
                                </HomeLink>
                                <HomeLink 
                                linkHeading="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                                linkPostDate="Posted by Start Bootstrap on September 24, 2018"/>
                                <HomeLink 
                                linkHeading="Science has not yet mastered prophecy"
                                linkPostDate="Posted by Start Bootstrap on September 24, 2018">
                                <h3>We predict too much for the next year and yet far too little for the next ten.</h3>
                                </HomeLink>  
                                <HomeLink
                                linkHeading="Failure is not an option"
                                linkPostDate="Posted by Start Bootstrap on September 24, 2018">
                                <h3>Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                                </HomeLink>
                                <OlderPostBtn/>                              
                            </div>
                        </div>
                    </div>
                    <hr/>
            </div>
        );
    }
}

export default Home;