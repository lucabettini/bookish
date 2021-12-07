import React from "react";
import { Link } from "react-router-dom";

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

const ErrorScreen = () => {
  return (
    <div className="full-page background-img">
      <Container className="main-content background-white fill">
        <Title>Sorry Houston, we have a problem</Title>
        <hr />
        <P>
          <i className="fas fa-space-shuttle" /> Either we couldn't find any
          book that matches your search or the server had an unexpected problem.
        </P>
        <P>
          <i className="fas fa-space-shuttle" /> While we send our oompa-loompas
          squad to check, you can{" "}
          <Link to="/">
            <span className="link">go back and perform another search</span>.
          </Link>
        </P>
        <P>
          <i className="fas fa-space-shuttle" /> If the problem persists,{" "}
          <a
            href="https://lucabettini.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            please let me know
          </a>
          .
        </P>
      </Container>
    </div>
  );
};

export default ErrorScreen;
