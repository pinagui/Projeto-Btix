import { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {

    const { user, result } = this.props
    return (
      <div>
        {result && (
          <>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <h4>{user.phone}</h4>
            <h5>{user.website}</h5>
            <p>{user.company.name}</p>
            <p>
              `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
            </p>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userInfo.users,
  result: state.userInfo.result,
});

export default connect(mapStateToProps)(UserInfo);
