import React, { Component } from 'react';

class HomeLink extends Component{
    render(){
        return(
            <div>
                <div className="post-preview">
                    <a href="">
                        <h1 className="post-title">{this.props.linkHeading}</h1>
                        {/* <h3 className="post-subtitle">{this.props.linkSubHeading}</h3> */}
                        {this.props.children}
                        <p>{this.props.linkPostDate}</p>
                    </a>
                </div>
                <hr/>
            </div>
        );
    }
}

export default HomeLink;

