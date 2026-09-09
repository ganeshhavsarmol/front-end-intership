import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <div className="container page not-found"><h1>404</h1><h2>Page not found</h2><Link className="primary-button" to="/">Go to Home</Link></div>;
}