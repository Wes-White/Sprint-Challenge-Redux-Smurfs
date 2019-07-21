import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { getSmurf } from "../actions/index";
import { connect } from "react-redux";



class App extends Component {
  componentDidMount() {
    this.props.getSmurf()
  }
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurf }
)(App)