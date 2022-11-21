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
      <div className="bg-violet-50">
        <h1 className="text-center pt-5 text-4xl font-bold">Lista de usuários</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-6">
          {result &&
            users.map((user) => (
              <div
                key={user.id}
                onClick={() => this.handleClickUser(user.id)}
                className="flex items-center justify-center p-3 max-w-sm mx-auto rounded-xl shadow-md my-2 bg-violet-100"
              >
                <Link to="userinfo">
                  <h2 className="text-xl ">{user.name}</h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userList.users,
  result: state.userList.result,
});

export default connect(mapStateToProps)(UsersList);
