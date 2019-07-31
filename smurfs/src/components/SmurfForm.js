import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./App.css";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addSmurfHandler = event => {
    event.preventDefault()
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf)
    this.setState({ name: "", age: "", height: "" })
  }

  render() {
    return (
      <Form inline onSubmit={this.addSmurfHandler} className='mainForm'>
        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfName" className="mr-sm-2">Smurf's Name:</Label>
          <Input
          onChange={this.handleInputChange}
          placeholder="What do we call you..."
          value={this.state.name}
          name="name"
        />
        </FormGroup>


        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfAge" className="mr-sm-2">Smurf's Age:</Label>
          <Input
          onChange={this.handleInputChange}
          placeholder="How old..."
          value={this.state.age}
          name="age"
        />
        </FormGroup>


        <FormGroup className="mb-3 mr-sm-3 mb-sm-0">
          <Label for="smurfHeight" className="mr-sm-2">Smurf's Height:</Label>
          <Input
          onChange={this.handleInputChange}
          placeholder="How tall..."
          value={this.state.height}
          name="height"
        />
        </FormGroup>

        <Button type="sumbit" color="info">Submit</Button>
      </Form>
    )
  }
}
export default connect(
  null,
  { addSmurf }
)(SmurfForm);


