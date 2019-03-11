import React, { Component } from 'react';

class Recent extends Component {
    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Post Recent</h5>
                <div className="card-body">
                    <ul className="list-unstyled mb-0">
                        <li>
                            <a href="post-detail">Post title link 01</a>
                        </li>
                        <li>
                            <a href="post-detail">Post title link 02</a>
                        </li>
                        <li>
                            <a href="post-detail">Post title link 03</a>
                        </li>
                        <li>
                            <a href="post-detail">Post title link 04</a>
                        </li>
                        <li>
                            <a href="post-detail">Post title link 05</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Recent;
