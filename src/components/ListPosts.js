import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../redux/actions/apiPost";
import { fetchComments } from "../redux/actions/apiComments";
import { fetchUsers } from "../redux/actions/apiUsers";

class ListPosts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }

  handleClickComments(id) {
    const { dispatch } = this.props;
    dispatch(fetchComments(id));
  }

  render() {
    const { posts, result } = this.props;
    return (
      <div>
        {result &&
          posts.map((post) => (
            <div
              key={post.id}
              onClick={() => this.handleClickComments(post.id)}
            >
              <Link to="/comments">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postList.posts,
  result: state.postList.result,
  users: state.userList.users,
});

export default connect(mapStateToProps)(ListPosts);
