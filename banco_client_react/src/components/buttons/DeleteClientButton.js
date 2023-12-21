// import Button from "react-bootstrap/Button";
// import axios from "axios";
// import React, { useState } from "react";



// function TestButton() {
//     const [show, setShow] = useState(false);
//     function deleteUser() {
//         axios.delete(`http://localhost:8000/User/delete/1`)
//             .then(response => {
//                 console.log("User deleted")
//                     .catch(error => {
//                         console.error(error);
//                     })
//             })
//     }

//     return (
//         <>
//             <Button onClick={() => deleteUser}>Delete</Button>
//         </>

//     );
// }

// export default TestButton;

import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const DeleteClientButton = ({ userId, onDelete }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/User/delete/1`);

            // Appeler la fonction onDelete pour mettre à jour l'interface utilisateur
            onDelete(userId);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
    };

    return (
        // <Button variant="primary" onClick={handleDelete}>Supprimer</Button>
        <Button onClick={handleDelete}>Supprimer</Button>
    );
};

export default DeleteClientButton;