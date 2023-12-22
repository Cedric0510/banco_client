import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
// prévoir paramètre dans fonction pour attribuer texte et lien si navbar dans page accueil public ou dans espace client.
// bien appeler nom de la fonction comme nom du fichier
function NavBarTemplate({NavLink1, NavValue1,NavLink2, NavValue2,NavLink3, NavValue3,NavLink4, NavValue4, NavLink5, NavValue5, NavLink6, NavValue6}) {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand alt="Accueil"> <Link to="/"> <img src='https://i.imgur.com/lUNJbPb.png' width="130" height="40"/> </Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
            <Nav id="navBar" >
              <Nav.Link ><Link to={NavLink1} > {NavValue1} </Link></Nav.Link>
              <Nav.Link><Link to={NavLink2} > {NavValue2} </Link></Nav.Link>
              <Nav.Link><Link to={NavLink3} > {NavValue3} </Link></Nav.Link>
              <Nav.Link ><Link to={NavLink4} > {NavValue4} </Link></Nav.Link>
              <Nav.Link ><Link to={NavLink5} > {NavValue5} </Link></Nav.Link>
              <Nav.Link ><Link to={NavLink6} > {NavValue6} </Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBarTemplate;