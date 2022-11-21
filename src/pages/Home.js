import { Component } from "react";
import ListPosts from "../components/ListPosts";
import UsersList from "../components/UsersList";

class Home extends Component {
  render() {
    return (
      <div>
        <UsersList />
        <ListPosts />
      </div>
    );
  }
}

export default Home;
