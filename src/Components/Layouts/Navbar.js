import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";
import darkLogo from '../../Assets/imgs/logo1.png'
import lightLogo from '../../Assets/imgs/logo2.png'
import { useEffect, useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

const FixedNavbar = () => {
  const location = useLocation();
  const [isActive, SetActive] = useState();
  const navigate = useNavigate();
  const [navVariant, setnavVariant] = useState("dark");
  const [navHoverClass, setnavHoverClass] = useState("");
  const Active = " active ";
  const btns = [
    {
      id: 1,
      name: "Home",

      navigate: "/",
    },
    {
      id: 2,
      name: "Search",

      navigate: "/search",
    },
    {
      id: 3,
      name: "About Us",

      navigate: "/about-us",
    },
    {
      id: 6,
      name: "Agent",

      navigate: "/",
    },
    {
      id: 4,
      name: "Blog",

      navigate: "/Blog",
    },
    {
      id: 5,
      name: "Contact Us",

      navigate: "/contact-us",
    },
  ];

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
      if (window.innerWidth >= 768) {
        if (location.pathname === "/") {
          document.getElementById("navbar").classList.add("scrolledTop");
          setnavVariant("light");
        }
      }
    } else {
      if (location.pathname === "/") {
        document.getElementById("navbar").classList.remove("scrolledTop");
        setnavVariant("dark");
      }
    }
  }
  const handleActive = (id) => {
    SetActive(id);
  };

  useEffect(() => {
    if (navVariant === "light") {
      setnavHoverClass("hover:text-[#45b6ca]");
    } else {
      setnavHoverClass("");
    }
  }, [navVariant]);

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("navbar").classList.remove("bg-white");
      document.getElementById("navbar").classList.remove("scrolledTop");
      
      SetActive(1);
    } else {
      document.getElementById("navbar").classList.add("bg-white");
      setnavVariant("light");
      btns.map((itm) => {
        if (itm.navigate === location.pathname) {
        SetActive(itm.id);
        }
        return null
      });
    }
  })
  return (
    <>
      <Navbar
        id="navbar"
        variant={navVariant}
        className="h-auto sm:min-h-[9vh] md:min-h-[9vh] bg-[#000000ab] md:bg-[#70707000]"
        expand="md"
        fixed="top"
      >
        <Container fluid className="flex flex-row">
          <Navbar.Brand
            href="#home"
            className="w-[50%] md:w-[100%] hover:text-[#45b6ca] text-left flex xl:w-[15%] font-[Changa] md:ml-[5%] text-5xl"
          >
            <img className="md:w-[80%]" alt="" src={navVariant === "dark" ? darkLogo : lightLogo} />
          </Navbar.Brand>
          <Navbar.Toggle
            className="text-white"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="bg-[#000000ab] md:bg-[#70707000]  rounded-3xl sm:mt-4 md:mt-2"
            id="basic-navbar-nav"
          >
            <Nav className="text-white small-caps font-[900] xl:me-auto  text-[22px]  lg:text-[25px] ml-auto md:gap-8">
              {btns.map((item) => {
              if(item.id === 9 ){
                return (
                  <Nav.Link
                    onClick={() => {
                    
                      document.getElementById(item.navigate).scrollIntoView();

                      handleActive(item.id);
                    }}
                    className={
                      isActive === item.id
                        ? Active + navHoverClass
                        : navHoverClass
                    }
                  >
                    {item.name}
                  </Nav.Link>
                );
              }else {

                return (
                  <Nav.Link
                    onClick={() => {
                    
                      navigate(item.navigate)
                      handleActive(item.id);
                    }}
                    className={
                      isActive === item.id
                        ? Active + navHoverClass
                        : navHoverClass
                    }
                  >
                    {item.name}
                  </Nav.Link>
                );
              }
              })}
            
            </Nav>
            <Nav className="hidden xl:flex ms-auto md:font-[900] mr-[5%]">
              <Nav.Link className="md:mt-2" href="#home">
                <span className={navHoverClass}>
                  <PhoneIcon /> +2 800-555-6789
                </span>
              </Nav.Link>

              <Nav.Link className="md:mt-2" href="#link">
                <AccountCircleIcon className={navHoverClass} />
              </Nav.Link>
              <Nav.Link>
                <Button
                  variant={
                    navVariant === "dark" ? "outline-light" : "outline-primary"
                  }
                >
                  Add Listing
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FixedNavbar;
