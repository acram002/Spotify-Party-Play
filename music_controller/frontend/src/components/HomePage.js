import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
//import Layout from '../containers/Layout'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/">
              <p>This is the home page</p>
            </Route>
            <Route path="/join" element={<RoomJoinPage/>} />
            <Route path="/create" element={<CreateRoomPage/>} />
          </Routes>
        </Layout>
      </Router>
    );
  }
}