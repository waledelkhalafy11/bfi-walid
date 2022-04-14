import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
const FixedNavbar = () => {
    const [navVariant, setnavVariant] = useState("dark");
    window.onscroll = function () {
        scrollFunction();
      };
    function scrollFunction() {
        if (document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").classList.add("scrolledTop");
          setnavVariant("light");
        } else {
          document.getElementById("navbar").classList.remove("scrolledTop");
          setnavVariant("dark");
        }
      }
    return ( 
        <>
         <Navbar
          id="navbar"
          variant={navVariant}
          className="h-[9vh] bg-[#000000ab] md:bg-[#70707000]"
          expand="lg"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#home" className="ml-[5%] text-4xl">
              BFI
            </Navbar.Brand>
            <Navbar.Toggle
              className="text-white "
              aria-controls=" basic-navbar-nav"
            />
            <Navbar.Collapse
              className="bg-[#000000ab] md:bg-[#70707000] rounded-3xl mt-2"
              id="basic-navbar-nav"
            >
              <Nav className="text-white me-auto lg:mx-[30%]">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Demos</Nav.Link>
                <Nav.Link href="#link">Properties</Nav.Link>
                <Nav.Link href="#link">Agent</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
              <Nav className="ms-auto mr-[5%]">
                <Nav.Link href="#home"><PhoneIcon/> +1 800-555-6789</Nav.Link>

                <Nav.Link href="#link"><AccountCircleIcon/></Nav.Link>
                <Nav.Link>
                  <Button variant="primary">Add Listing</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
     );
}
 
export default FixedNavbar;