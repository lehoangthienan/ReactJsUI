import React, { Component } from 'react';
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Card from '@material-ui/core/Card';

class UpdateProduct extends Component {
  
  render() {
    return (
      <Card>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
          <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBDropdown style={{marginLeft: -5}}>
                  <MDBDropdownToggle caret color="primary">
                    Banana
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right basic>
                    <MDBDropdownItem>Apple</MDBDropdownItem>
                    <MDBDropdownItem>Orange </MDBDropdownItem>
                    <MDBDropdownItem>Mango</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Product name" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Product content"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                  <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      Choose image
                    </label>
                  </div>
                </div>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left" style={{marginTop: 40, marginLeft: -5}}>
            <MDBBtn outline color="info">
              Update <MDBIcon icon="cloud-upload" className="ml-1" />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Card>
    );
  }
}

export default UpdateProduct;
