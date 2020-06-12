/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './NavigationBar'

const Layout = ( { ...props } ) => (
  <>
    <Navigation />
    <Container
      fluid="md"
      style={{ marginTop: '2em', fontSize: 'larger' }}
    >
      {props.children}
    </Container>
  </>
)

export default Layout
