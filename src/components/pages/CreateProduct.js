import React, { Component } from 'react';
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Card from '@material-ui/core/Card';

class CreateProduct extends Component {
  render() {
    return (
      <Card>
      <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Create your product
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      Please comply with the policies and terms of the contract we offer. If you violate this policy, you will be suspended immediately.
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
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
              Create <MDBIcon icon="plus-square-o" className="ml-1" />
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Card>
    );
  }
}

export default CreateProduct;
