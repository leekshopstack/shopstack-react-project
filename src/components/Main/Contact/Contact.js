import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-page">
                <div className="mt-4 mb-4 border-bottom">
                    <h1 className="my-4 page-title text-center">Contact Me!</h1>
                </div>
                <div class="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows={3} defaultValue={""} placeholder="Enter your message" />
                        </div>
                        <button type="submit" value="Submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
