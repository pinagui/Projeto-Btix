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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-3">
        {result &&
          posts.map((post) => (
            <div
              
              key={post.id}
              onClick={() => this.handleClickComments(post.id)}
              className="flex items-center justify-center p-3 max-w-sm mx-auto rounded-xl shadow-md my-2 bg-stone-50"
            >
              <Link to="/comments">
                <h3 className="text-center text-lg font-medium">{post.title}</h3>
                <p className="text-center text-md font-normal pt-6">{post.body}</p>
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
