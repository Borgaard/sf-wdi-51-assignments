import React, { Component } from 'react';
import Comment from './Comment';
import CommentContainer from './CommentContainer'
class Post extends Component {
    render(){
      
        //let newComment = {this.state.newComment};

        // addComment = () => {
        //     console.log("HELLLOOOO");
        //     this.message;

        // }
        
        return(
            <div className="post-page">
                {/* <img src={ this.props.src}  alt=""/> */}
                <h1>{this.props.title}</h1>
                <h2>By: {this.props.author}</h2>
                <p>{this.props.body}</p>

                <CommentContainer comments={this.props.comments} />
            </div>
        )
    }
}

export default Post;


// import React, { Component } from 'react';
// import Comment from './Comment';
// class Post extends Component {
//     render(){
//         let comments = this.props.comments.map((comment, index) => (
//             <Comment message={comment} key={index}/>
//         ));

//         return(
//             <div className="post-page">
//                 {/* <img src={ this.props.src}  alt=""/> */}
//                 <h1>{this.props.title}</h1>
//                 <h2>By: {this.props.author}</h2>
//                 <p>{this.props.body}</p>
//                 <h3>Comments</h3>
//                  {comments}
//             </div>
//         )
        
//     }
// }

// export default Post;