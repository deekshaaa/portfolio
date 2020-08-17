/** @format */

import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ margin: "auto", width: "100%" }}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
            <div className="aboutme-text">
              <h1>About Me</h1>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

              <p>
                Lorem Ipsum is simply dummy text of the printing and t
                ypesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essent ially
                unchanged.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and t
                ypesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essent ially
                unchanged.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
