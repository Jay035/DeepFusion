import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = () => {
  return (
    <>
      {/* {['sm'].map((expand) => ( */}
      <Navbar expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">DeepFusion</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                DeepFusion
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About us</Nav.Link>
                {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
              </Nav>
              <Form className="d-flex ">
                {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                <Button className="mr-2 " variant="outline-success">Subscribe</Button>
                <Button className="mx-2 " variant="outline-success">Login</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* ))}  */}
    </>
  );
};
