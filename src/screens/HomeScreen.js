import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import Searchbar from '../components/Searchbar';

const Column = styled(Col)`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  display: block;
  margin-top: 20vh;
  margin-bottom: 10vh;
  font-family: 'Bree Serif', serif;
  font-size: 5em;
  color: #2a2b28;
  text-shadow: -1px 0 #ced4da, 0 1px #ced4da, 1px 0 #ced4da, 0 -1px #ced4da;
`;

const About = styled.div`
  font-size: 1em;
  font-family: 'Bree Serif', sans-serif;
  color: #2a2b28;
`;

const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  height: 3vh;
  background-color: #f8f5f0;
  width: 100%;
  opacity: 0.9;
`;

const HomeScreen = () => {
  return (
    <>
      <Container className='main-content fill'>
        <Row>
          <Column>
            <Title>Bookish.</Title>
          </Column>
        </Row>
        <Row>
          <Col>
            <Searchbar />
          </Col>
        </Row>
      </Container>
      <Footer>
        <HashRouter>
          <Link to='/about'>
            <About>
              <span>About Bookish.</span>
            </About>
          </Link>
        </HashRouter>
      </Footer>
    </>
  );
};

export default HomeScreen;
