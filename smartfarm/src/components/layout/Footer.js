import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter className="#1b5e20 green darken-4 font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <Link to="/licence">#BuildForSDG Cohort 2</Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
