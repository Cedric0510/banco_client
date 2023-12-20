import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
// prévoir paramètre dans fonction pour attribuer texte et lien si navbar dans page accueil public ou dans espace client.
// bien appeler nom de la fonction comme nom du fichier
function NavBarTemplate({link1, value1,link2, value2,link3, value3,link4, value4}) {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand alt="Accueil"> <Link to="/"> <img src='/logo.svg' /> </Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav id="navBar" >
              <Nav.Link ><Link to={link1} > {value1} </Link></Nav.Link>
              <Nav.Link><Link to={link2} > {value2} </Link></Nav.Link>
              <Nav.Link><Link to={link3} > {value3} </Link></Nav.Link>
              <Nav.Link className='navLink'><Link to={link4} > {value4} </Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBarTemplate;