import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="d-flex justify-content-center">
          <MDBRow>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="facebook.com"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="twitter.com"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://walletwizzard.netlify.app/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="instagram.com"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="linkedin.com"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="github.com/CallMeMo29/WalletWizard.git"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          @MoCa mit Schuss!
        </a>
      </div>
    </MDBFooter>
  );
}
