import React, { Component } from 'react';
import SideBar from './Sidebar/SideBar';
import CommentList from './Comment/CommentList';
import PostData from '../../../data/posts.json';

class Detail extends Component {
    render() {
        const PostDetailData = PostData[0];
        return (
            <div className="post-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="mt-4">{PostDetailData.title}</h1>
                            <p className="lead">by <a href="#">{PostDetailData.author.name}</a></p>
                            <hr />
                            <p>Posted on {PostDetailData.datePublished.toString()}</p>
                            <hr />
                            <img className="card-img-top" src={PostDetailData.detail_image_path} alt={PostDetailData.title} />
                            <hr />
                            <div dangerouslySetInnerHTML={{__html:PostDetailData.content}} />
                            <hr />
                            <CommentList />
                        </div>
                        <div className="col-lg-4">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
