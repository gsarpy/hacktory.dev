import React from 'react';
import { Button, Container, Row, Col, Jumbotron, Form, Label, Input, FormGroup } from 'reactstrap';

const NewVideo = (props) => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>Submit a New Video</h3>
          <p>and start organizing your learning</p>
          <Form>
            <FormGroup>
              <Label for="video_url">Enter a Complete YouTube URL</Label>
              <Input type="text" name="video_url" id="video_url" placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </FormGroup>
            <Button>Add Video</Button>
          </Form>
        </Col>
      </Row>

    </div>
  );
}

export default NewVideo;