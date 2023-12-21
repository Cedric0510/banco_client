import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteClientButton = ({ userId, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    
    setShowModal(false);


    if (onDelete) {
      try {

        await onDelete(userId);
        console.log('Suppression réussie !');
      } catch (error) {
        console.error('Erreur lors de la suppression :', error);

      }
    }
  };

  const handleCancelDelete = () => {

    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleDeleteClick}>
        Supprimer Client
      </Button>

      {/* Modale de confirmation de suppression */}
      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer ce client ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteClientButton;
