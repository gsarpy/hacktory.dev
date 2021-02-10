import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const Home = (props) => {
  return (
      <Row>
        <Col>
          <Jumbotron>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>Organize Your YouTube Learning</h3>
                <p>
                  Hacktory gives you the ability to take notes while 
                  you watch YouTube courses. Each note is linked to the
                  part of the video you wrote the note for so you can quickly
                  get some context
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
  );
}

export default Home;