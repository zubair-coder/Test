import React, { Component } from "react";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default class Signup extends Component {
  render() {
    return (
      <Container
        style={{
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1105px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          opacity: 1,
        }}
      >
        <h1>Register Here</h1>
        <form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Email"
            />
          </form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Password"
            />
          </form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Password"
            />
          </form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Password"
            />
          </form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Password"
            />
          </form>
          <form>
            <TextField
              style={{
                width: "585px",
                height: "44px",
                border: "1px solid #D0D0D0",
                borderRadius: "3px",
                opacity: 0.25,
              }}
              label="Password"
            />
          </form>
          <Button
            style={{
              width: "585px",
              height: "44px",
              background: "#B40008 0% 0% no-repeat padding-box",
              borderRadius: "3px",
              opacity: 1,
            }}
            variant="contained"
            color="secondary"
          >
            Login in
          </Button>
        </form>
        Don't have account? <Link to="Signin">Register here</Link>
      </Container>
    );
  }
}
