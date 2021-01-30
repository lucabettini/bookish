import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Searchbar from './Searchbar';

const Title = styled(Navbar.Brand)`
  font-family: 'Bree Serif', serif;
  font-size: 2.5em;
  padding: 0;
`;

const NavigationBar = styled(Navbar)`
  padding-right: 0;
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
`;

const Header = ({ searchBooks }) => {
  return (
    <Container
      className='background-white'
      style={{ padding: '5px 15px 0 15px' }}
    >
      <header className='header'>
        <NavigationBar className='navigation-bar'>
          <LinkContainer to='/'>
            <Title className='small-title'>Bookish.</Title>
          </LinkContainer>
          <Searchbar searchBooks={searchBooks} />
        </NavigationBar>
      </header>
    </Container>
  );
};

export default Header;
