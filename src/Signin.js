import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import "./App.css";
import { Container } from "@material-ui/core";

export default class Signin extends Component {
  render() {
    return (
      <Container>
        <h1>Login </h1>
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
        Don't have account? Register here
      </Container>
    );
  }
}
