//import ici votre élément
import React, { useState } from 'react';
import NavBarTemplate from "./navBars/NavBarTemplate";
import UpdateClientToaster from "./toaster/UpdateClientToaster";
import Button from 'react-bootstrap/Button';

function TestPage() {
  const [showToaster, setShowToaster] = useState(false);

  const handleClick = () => {
    // Mettre à jour l'état pour afficher ou masquer le composant UpdateClientToaster
    setShowToaster(!showToaster);
  };

  return (
    <>
      <h1>Page de test</h1>
      <NavBarTemplate />
      <p>Testez ici votre élément</p>
      <Button onClick={handleClick}>Test</Button>

      {/* Afficher UpdateClientToaster en fonction de la valeur de showToaster */}
      {showToaster && <UpdateClientToaster />}
    </>
  );
}

export default TestPage;