import { Component } from "react";
import { connect } from "react-redux";

class ListComments extends Component {

  render() {
    const { comments, result } = this.props;
    return (
      <div>
        { result &&
          comments.map((comment) => 
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <h6>{comment.email}</h6>
            <p>{comment.body}</p>
          </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentsPost.posts,
  result: state.commentsPost.result,
});

export default connect(mapStateToProps)(ListComments);
