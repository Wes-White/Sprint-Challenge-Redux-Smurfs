import React from "react";
import "./App.css";



class Smurf extends React.Component {
  deleteSmurfHandler = event => {
    event.preventDefault()
    this.props.deleteSmurf(this.props.id)
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.age} Smurf Years</p> 
        <p>{this.props.height} cm</p>
      </div>
    )
  }
}

export default Smurf