import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default withRouter(App);
