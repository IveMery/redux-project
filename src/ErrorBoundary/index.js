import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>oops! Tenemos un Problema</p>{" "}
          <Link to="/">
            <button>Inicio</button>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
