import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark py-2 mt-5 text-white'>
      <Container>
        <Row>
          <Col className='text-center'>Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
