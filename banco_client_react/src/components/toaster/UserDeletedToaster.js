import Toast from "react-bootstrap/Toast";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function UserDeletedToaster() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Banco</strong>
            <small>1 mins ago</small>
          </Toast.Header>
          <Toast.Body>L'élément est bien supprimé !</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default UserDeletedToaster;