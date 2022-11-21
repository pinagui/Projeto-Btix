import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../redux/actions/apiUserInfo";
import { fetchUsers } from "../redux/actions/apiUsers";
import { Link } from "react-router-dom";

class UsersList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  handleClickUser(id) {
    const { dispatch } = this.props;
    dispatch(fetchUserInfo(id));
  }

  render() {
    const { users, result } = this.props;
    return (
      <div>
        {result &&
          users.map((user) => (
            <div key={user.id} onClick={() => this.handleClickUser(user.id)}>
              <Link to="userinfo">
                <h2>{user.name}</h2>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userList.users,
  result: state.userList.result,
});

export default connect(mapStateToProps)(UsersList);
