import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar></Toolbar>
        <main style={{ height: "100%" }}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
