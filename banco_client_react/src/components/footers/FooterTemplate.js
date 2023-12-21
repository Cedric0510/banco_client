import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem'
import { Link } from "react-router-dom";


function FooterTemplate({ link1, value1, link2, value2, link3, value3, link4, value4, link5, value5, link6, value6, value7 }) {
    return (
        <Accordion defaultActiveKey={['0']}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>B.BANK</Accordion.Header>
                <Accordion.Body>
                    <div>
                        Nous contacter :
                    </div>
                    <div>
                        Adresse Banco
                    </div>
                    <Link to="/mailto">Email</Link>
                    <Link to="/conditions">Conditions d'utilisation</Link>
                    <Link to="/legal-notice">Mentions légales</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> {value7} </Accordion.Header>
                <Accordion.Body>
                    <Link to={link1} > {value1} </Link>
                    <Link to={link2} > {value2} </Link>
                    <Link to={link3} > {value3} </Link>
                    <Link to={link4} > {value4} </Link>
                    <Link to={link5} > {value5} </Link>
                    <Link to={link6} > {value6} </Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FooterTemplate;