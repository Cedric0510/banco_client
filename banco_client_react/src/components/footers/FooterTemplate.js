import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem'
import { Link } from "react-router-dom";


function FooterTemplate({ link1, value1, link2, value2, link3, value3, link4, value4, link5, value5, link6, value6}) {
    return (
        <Accordion defaultActiveKey={['0']}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>B.BANK</Accordion.Header>
                <Accordion.Body>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div>
                                    Nous contacter : b.bank@email
                                </div>
                                <div>
                                    10 rue de la Bourse 34 500 Béziers
                                </div>
                                <div>
                                    <Link to="/mailto">Email</Link>
                                </div>
                                <div>
                                    <Link to="/conditions">Conditions d'utilisation</Link>
                                </div>
                                <div>
                                    <Link to="/legal-notice">Mentions légales</Link>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <Link to={link1} > {value1} </Link>
                                </div>
                                <div>
                                    <Link to={link2} > {value2} </Link>
                                </div>
                                <div>
                                    <Link to={link3} > {value3} </Link>
                                </div>
                                <div>
                                    <Link to={link4} > {value4} </Link>
                                </div>
                                <div>
                                    <Link to={link5} > {value5} </Link>
                                </div>
                                <div>
                                    <Link to={link6} > {value6} </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FooterTemplate;