import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <h1>This is not good...</h1>;

    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ErrorBoundry;
