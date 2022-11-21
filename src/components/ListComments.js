import { Component } from "react";
import { connect } from "react-redux";

class ListComments extends Component {
  render() {
    const { comments, result } = this.props;
    return (
      <div>
        <h1 className="text-center pt-5 text-3xl font-bold">Comentários</h1>
        <div className="m-4">
          {result &&
            comments.map((comment) => (
              <div
              key={comment.id}
              className="py-4 text-center"
              >
                <p className="font-medium text-center">{comment.name}</p>
                <p className="text-sm font-light text-center">{comment.email}</p>
                <p className="text-sm text-center px-5">{comment.body}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.commentsPost.posts,
  result: state.commentsPost.result,
});

export default connect(mapStateToProps)(ListComments);
