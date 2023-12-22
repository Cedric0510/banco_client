import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem'
import { Link } from "react-router-dom";


function FooterTemplate({ FooterLink1, FooterValue1, FooterLink2, FooterValue2, FooterLink3, FooterValue3, FooterLink4, FooterValue4, FooterLink5, FooterValue5, FooterLink6, FooterValue6 }) {
    return (
            <Accordion defaultActiveKey={['0']}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header class="text-center" bg="dark" data-bs-theme="dark">B.BANK</Accordion.Header>
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
                                        <Link to={FooterLink1} > {FooterValue1} </Link>
                                    </div>
                                    <div>
                                        <Link to={FooterLink2} > {FooterValue2} </Link>
                                    </div>
                                    <div>
                                        <Link to={FooterLink3} > {FooterValue3} </Link>
                                    </div>
                                    <div>
                                        <Link to={FooterLink4} > {FooterValue4} </Link>
                                    </div>
                                    <div>
                                        <Link to={FooterLink5} > {FooterValue5} </Link>
                                    </div>
                                    <div>
                                        <Link to={FooterLink6} > {FooterValue6} </Link>
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