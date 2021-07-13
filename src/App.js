import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Col, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">First-Step</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#learnit/3.1">Learn It</NavDropdown.Item>
        <NavDropdown.Item href="#about/3.2">About</NavDropdown.Item>
        <NavDropdown.Item href="#contact/3.3">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#parteners">Parteners</Nav.Link>
      <Nav.Link eventKey={2} href="#us">
        Support Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<div className="mister">
<Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Full Name"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form>
</div>

<div className="part2">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.studyrama.com/IMG/arton1002.png"
      alt="River"
    />
    <Carousel.Caption>
      <h3>First River</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/65/84/96/03/131303225199_News_NewsRevision_3780.jpg"
      alt="River"
    />

    <Carousel.Caption>
      <h3>Second River</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</div>

<div>
  <a className="facebook" href="https://www.facebook.com/Fa5rinovic/" ><i class="fab fa-facebook"></i></a>
</div>
    </div>
  );
}

export default App;
