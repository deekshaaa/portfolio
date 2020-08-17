/** @format */

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFnKueXm6_OtQ/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=GSXo8HWusXgJyPtrYt9sq7aIz-_5PoTUn2RYDh2Cj-A"
                alt="avatar"
                stye={{ height: "100px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Deeksha Garg</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and t ypesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essent ially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Ayushi Apprts. Indore</p>
            <h5>Phone</h5>
            <p>9522949005</p>
            <h5>Email</h5>
            <p>deekshagarg2000@gmail.com</p>
            <h5>Web</h5>
            <p>My website</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          
          <Cell className="resume-right-col" col={8}>
            <div>
              <h2>Education</h2>

              <Education
                startYear={2018}
                schoolName="My University"
                schoolDescription="Lorem Ipsum is simply dummy text of the p
                    rinting and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type
                       specimen book."
              />

              <Education
                startYear={2018}
                schoolName="My University"
                schoolDescription="Lorem Ipsum is simply dummy text of the p
                    rinting and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type
                       specimen book."
              />

              <hr style={{ borderTop: "3px solid #e22947" }} />
            
            <h2>Experience</h2>
              <Experience
                startYear={2018}
                endYear={2020}
                jobName="HJKHKJ"
                jobDescription="Lorem Ipsum is simply dummy text of the p
                rinting and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type
                   specimen book."
              />

              <Experience
                startYear={2018}
                endYear={2020}
                jobName="HJKHKJ"
                jobDescription="Lorem Ipsum is simply dummy text of the p
                rinting and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type
                   specimen book."
              />

              <Experience
                startYear={2018}
                endYear={2020}
                jobName="HJKHKJ"
                jobDescription="Lorem Ipsum is simply dummy text of the p
                rinting and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type
                   specimen book."
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Skills</h2>
                <Skills 
                skill="Javascript"
                progress={100}
                />
                <Skills 
                skill="Javascript"
                progress={75}
                />
                <Skills 
                skill="Javascript"
                progress={50}
                />
                <Skills 
                skill="Javascript"
                progress={60}
                />


            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
