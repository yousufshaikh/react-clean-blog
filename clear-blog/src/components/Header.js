import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.heading}</h1>
                                <span className="subheading">{this.props.subHeading}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;