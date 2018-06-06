import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item"><a href=""><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                                <li className="list-inline-item"><a href=""><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                                <li className="list-inline-item"><a href=""><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-github fa-stack-1x fa-inverse"></i></span></a></li>
                            </ul>
                            <p className="text-muted">Copyright © Your Website 2018</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;