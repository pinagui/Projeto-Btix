import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/comments" component={ Comments }/>
          <Route exact path="/userinfo" component={ UserInfo }/>
        </Switch>
      </div>
    );
  }
}

export default App;
