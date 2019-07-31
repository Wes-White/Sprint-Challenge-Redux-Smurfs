import React, { Component } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import "./App.css";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>The Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}
export default connect(
  mapStateToProps,
  {}
)(Smurfs);