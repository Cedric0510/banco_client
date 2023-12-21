import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";


function FooterTemplate({link1, value1,link2, value2,link3, value3,link4, value4, link5, value5, link6, value6}) {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>B.Bank</Accordion.Header>
                <Accordion.Body>
                    <Accordion.Div>
                        Nous contacter :
                    </Accordion.Div>
                    <Accordion.Div>
                        Adresse Banco
                    </Accordion.Div>
                    <Accordion.Link>
                        <Link to="/mailto">Email</Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to="/conditions">Conditions d'utilisation</Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to="/legal-notice">Mentions légales</Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link1} > {value1} </Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link2} > {value2} </Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link3} > {value3} </Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link4} > {value4} </Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link5} > {value5} </Link>
                    </Accordion.Link>
                    <Accordion.Link>
                        <Link to={link6} > {value6} </Link>
                    </Accordion.Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FooterTemplate;