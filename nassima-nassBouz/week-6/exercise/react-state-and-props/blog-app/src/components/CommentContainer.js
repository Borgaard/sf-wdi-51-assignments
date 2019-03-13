import React, {Component} from 'react';
import Comment from './Comment';

class CommentContainer extends Component{
    state = {
        commentList: this.props.comments,
        newCommentValue:''
    };

    handleSubmit = (event) => {
        let newComment = this.state.newCommentValue;
        this.state.commentList.push(newComment);
        this.setState({
            commentList: this.state.commentList,
            newComment: ''
        });
        console.info(`a new comment : "${newComment}"`);
        event.preventDefault();
    }

    handleChange = (event) => {
        //console.log("a change occured: "+ event.target.value);
        this.setState({newCommentValue: event.target.value})
    }
    render() {
        let comments = this.props.comments.map((comment, index) => (
            <Comment message={comment} key={index}/>
        ));
        return (
            <div>
                <h3>Comments</h3>
                { comments }
                 <form onSubmit = { this.handleSubmit }>
                    <label htmlFor="message">
                        Comment:
                        <input type="text" name="message" onChange={ this.handleChange } />
                    </label>
                    <input type="submit" value="Submit" />
                 </form> 
            </div>
        )
    }
}

export default CommentContainer