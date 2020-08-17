/** @format */

import React, { Component } from "react";
import { Grid, Cell ,List, ListItem, Icon, ListItemContent} from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Deeksha Garg</h2>
            <img
              src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              blah blaj balh lkllhjhh hkjh jkjhjh hjkh jhjkh kjhk j khjkhjkh jh
              kjhj khh hjjkh kj jhjkhkjhkjh kjh jkh kjkjh jk hjkh kjhkhkjhjh kjh
              khjkhjh h jjkhjkhjh k hjk jkjhkj hj khjhkh kjh jkhj this was a
              dummy text
            </p>
          </Cell>



          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">

                <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    9522949005
                    </ListItemContent>

              </ListItem>
              <ListItem>
                <ListItemContent icon="person">Aaron Paul</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
              </ListItem>
            </List>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
