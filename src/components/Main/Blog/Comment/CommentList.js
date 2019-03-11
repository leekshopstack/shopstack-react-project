import React, { Component } from 'react';
import CommentData from '../../../../data/comment.json';
import CommentForm from './CommentForm';

class CommentList extends Component {
  render() {
    const Comments = CommentData;
    return (
        <div className="comments">
            <CommentForm />
            {Comments.map((Comment, index) => {
                if(Comment['reply']) {
                    const RepData = Comment['reply'];
                    return (
                        <div className="media mb-4" key={index}>
                            <img className="d-flex mr-3 rounded-circle" src={Comment.author.avatar} alt={Comment.author.name} />
                            <div className="media-body">
                                <h5 className="mt-0">{Comment.author.name}</h5>
                                {Comment.content}
                                {Comments.map((RepData, index) => {
                                    return (
                                        <div className="media mt-4" key={index}>
                                            <img className="d-flex mr-3 rounded-circle" src={RepData.author.avatar} alt={RepData.author.name} />
                                            <div className="media-body">
                                                <h5 className="mt-0">{RepData.author.name}</h5>
                                                {RepData.content}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="media mb-4" key={index}>
                            <img className="d-flex mr-3 rounded-circle" src={Comment.author.avatar} alt={Comment.author.name} />
                            <div className="media-body">
                                <h5 className="mt-0">{Comment.author.name}</h5>
                                {Comment.content}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
  }
}

export default CommentList;