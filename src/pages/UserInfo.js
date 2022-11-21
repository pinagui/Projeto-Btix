import { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    const { user, result } = this.props;
    return (
      <div className="mt-6">
        <div className="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4">
          {result && (
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h1 className="text-4xl">{user.name}</h1>
              <span className="text-xl">
                <p>{user.username}</p>
                <p>{user.email}</p>
              </span>

              <span className="text-lg">
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </span>

              <span className="text-base">
                <p>{user.company.name}</p>
                <p>
                  {user.address.street} {user.address.suite} {user.address.city}{" "}
                  {user.address.zipcode}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userInfo.users,
  result: state.userInfo.result,
});

export default connect(mapStateToProps)(UserInfo);
