import React, {Component} from 'react';
import HomeBg from '../img/home-bg.jpg';

class Header extends Component{
    render(){
            const style = {
                backgroundImage: 'url(' + HomeBg + ')'
            }
        return(
            <header className="masthead" style={style}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.heading}</h1>
                                <span className="sub-heading">{this.props.subHeading}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;