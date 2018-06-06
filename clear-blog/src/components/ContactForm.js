import React, { Component } from 'react';

class ContactForm extends Component{
    render(){
        return(
            <div className="col-lg-8 col-md-10">
                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                <form>
                    <div className="">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">SEND</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;