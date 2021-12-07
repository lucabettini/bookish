import React from "react";

import { Container } from "react-bootstrap";
import styled from "styled-components";

const P = styled.p`
  font-size: 1.2em;
`;

const Title = styled.h1`
  padding-top: 2em;
  font-family: "Bree Serif", serif;
  padding-bottom: 1em;
`;

const AboutScreen = () => {
  return (
    <div className="full-page background-img">
      <Container className="main-content background-white fill">
        <Title>About Bookish.</Title>
        <hr />
        <P>
          This website was first created in January 2021 by{" "}
          <a href="https://lucabettini.com" className="link">
            Luca Bettini
          </a>{" "}
          as a personal project for the React course of{" "}
          <a href="https://www.start2impact.it/" className="link">
            start2impact
          </a>
          .
        </P>
        <P>
          Additional infos and the entire code are available{" "}
          <a href="https://github.com/lucabettini/bookish" className="link">
            here
          </a>
          .
        </P>
      </Container>
    </div>
  );
};

export default AboutScreen;
