import React, { Component } from "react";
import { MDBFileInput } from "mdbreact";

class InputPage extends Component {

render() {
  return (
      <MDBFileInput multiple btnColor="info" btn-size="sm" />
    );
  }
}

export default InputPage;