//import ici votre élément

import NavBarTemplate from "./navBars/NavBarTemplate";
import MyBudgetButton from "./buttons/MyBudgetButton";
import ManageButtonBudget from "./buttons/ManageButtonBudget";
import BackAdminButton from "./buttons/BackAdminButton";
import AccessClientAccountButton from "./buttons/AccessClientAccount";
import UpdateClientButton from "./buttons/UpdateClientButton";
import DeleteClientButton from "./buttons/DeleteClientButton";
// import TestButton from "./buttons/TestButton";
import TestParts from "./parts/Test2parts.js";

function TestPage(){

    return (
        <>
        <h1>Page de test</h1>
        <TestParts  />
        <p>Testez ici votre élement</p>
        </>
    )

};

export default TestPage;